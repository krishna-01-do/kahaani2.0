import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { firstname, email } = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // Generate a unique transaction ID
    const txnid = `TXN_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    const amount = "99.00";
    const productinfo = "Toolorna Premium Scenarios Access";
    const surl = `${supabaseUrl}/functions/v1/payu-callback`;
    const furl = `${supabaseUrl}/functions/v1/payu-callback`;

    // Insert payment record
    const { error: dbError } = await supabase.from("payments").insert({
      txnid,
      amount: 99.00,
      status: "initiated",
      productinfo,
      firstname: firstname || null,
      email: email || null,
    });

    if (dbError) {
      return new Response(JSON.stringify({ error: "Failed to create payment record" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Generate PayU hash
    const merchantKey = Deno.env.get("PAYU_MERCHANT_KEY");
    const merchantSalt = Deno.env.get("PAYU_MERCHANT_SALT");

    if (!merchantKey || !merchantSalt) {
      return new Response(JSON.stringify({ error: "PayU merchant key or salt not configured. Set PAYU_MERCHANT_KEY and PAYU_MERCHANT_SALT secrets." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const hashString = `${merchantKey}|${txnid}|${amount}|${productinfo}|${firstname || ""}|${email || ""}|||||||||||${merchantSalt}`;

    const hashBuffer = await crypto.subtle.digest(
      "SHA-512",
      new TextEncoder().encode(hashString),
    );
    const hashHex = Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    const payuBaseUrl = "https://secure.payu.in/_payment";

    return new Response(JSON.stringify({
      txnid,
      amount,
      productinfo,
      firstname: firstname || "",
      email: email || "",
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
