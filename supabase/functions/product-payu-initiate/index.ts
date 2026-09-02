import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const PRODUCTS: Record<string, { amount: string; productinfo: string }> = {
  "how-to-make-fall-7-days": {
    amount: "149.00",
    productinfo: "How to Make Any Girl or Boy Fall for You in 7 Days — PDF Guide",
  },
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { product_id, email, firstname, phone } = await req.json();

    if (!product_id || !PRODUCTS[product_id]) {
      return new Response(JSON.stringify({ error: "Invalid product" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "A valid email is required — the PDF will be sent there" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const phoneStr = (phone || "").replace(/\D/g, "");
    if (!phoneStr || phoneStr.length < 10) {
      return new Response(JSON.stringify({ error: "A valid phone number is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const product = PRODUCTS[product_id];
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const txnid = `PROD_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    const surl = `${supabaseUrl}/functions/v1/product-payu-callback`;
    const furl = `${supabaseUrl}/functions/v1/product-payu-callback`;

    const { error: dbError } = await supabase.from("product_purchases").insert({
      txnid,
      product_id,
      amount: parseFloat(product.amount),
      status: "initiated",
      email,
      firstname: firstname || null,
    });

    if (dbError) {
      return new Response(JSON.stringify({ error: "Failed to create purchase record" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const merchantKey = Deno.env.get("PAYU_MERCHANT_KEY");
    const merchantSalt = Deno.env.get("PAYU_MERCHANT_SALT");

    if (!merchantKey || !merchantSalt) {
      return new Response(JSON.stringify({ error: "PayU not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const hashString = `${merchantKey}|${txnid}|${product.amount}|${product.productinfo}|${firstname || ""}|${email}|||||||||||${merchantSalt}`;
    const hashBuffer = await crypto.subtle.digest("SHA-512", new TextEncoder().encode(hashString));
    const hashHex = Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");

    const payuBaseUrl = "https://secure.payu.in/_payment";

    return new Response(JSON.stringify({
      txnid,
      amount: product.amount,
      productinfo: product.productinfo,
      firstname: firstname || "",
      email,
      phone: phoneStr,
      surl,
      furl,
      hash: hashHex,
      merchantKey,
      payuBaseUrl,
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
