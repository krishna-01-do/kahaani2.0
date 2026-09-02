import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

function redirectToApp(status: "success" | "failed", accessKey?: string) {
  const siteUrl = Deno.env.get("SITE_URL") || "https://toolorna.vercel.app";
  const params = new URLSearchParams({ payment: status });
  if (accessKey) params.set("access_key", accessKey);
  return Response.redirect(`${siteUrl}/scenarios?${params.toString()}`, 302);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const merchantSalt = Deno.env.get("PAYU_MERCHANT_SALT");

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // Parse the response from PayU (can be GET or POST)
    let formData: Record<string, string> = {};
    if (req.method === "POST") {
      const body = await req.text();
      const params = new URLSearchParams(body);
      for (const [k, v] of params.entries()) {
        formData[k] = v;
      }
    } else {
      const url = new URL(req.url);
      for (const [k, v] of url.searchParams.entries()) {
        formData[k] = v;
      }
    }

    const txnid = formData.txnid;
    const status = formData.status;
    const receivedHash = formData.hash;

    if (!txnid || !status) {
      return redirectToApp("failed");
    }

    // Verify the hash
    if (merchantSalt && receivedHash) {
      const merchantKey = Deno.env.get("PAYU_MERCHANT_KEY") || "";
      const key = formData.key || merchantKey;
      const amount = formData.amount || "99.00";
      const productinfo = formData.productinfo || "Toolorna Premium Scenarios Access";
      const firstname = formData.firstname || "";
      const email = formData.email || "";

      // Reverse hash for verification
      const hashString = `${merchantSalt}|${status}|||||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
      const hashBuffer = await crypto.subtle.digest(
        "SHA-512",
        new TextEncoder().encode(hashString),
      );
      const expectedHash = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      if (expectedHash !== receivedHash) {
        await supabase.from("payments").update({
          status: "failed",
          updated_at: new Date().toISOString(),
        }).eq("txnid", txnid);
        return redirectToApp("failed");
      }
    }

    if (status === "success") {
      // Generate a random access key
      const accessKey = crypto.randomUUID();

      await supabase.from("payments").update({
        status: "success",
        access_key: accessKey,
        updated_at: new Date().toISOString(),
      }).eq("txnid", txnid);

      return redirectToApp("success", accessKey);
    } else {
      await supabase.from("payments").update({
        status: "failed",
        updated_at: new Date().toISOString(),
      }).eq("txnid", txnid);
      return redirectToApp("failed");
    }
  } catch (err) {
    return redirectToApp("failed");
  }
});
