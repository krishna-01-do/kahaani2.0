import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const PRODUCT_FILES: Record<string, { storagePath: string; filename: string; subject: string }> = {
  "how-to-make-fall-7-days": {
    storagePath: "products/how-to-make-fall-7-days.pdf",
    filename: "How to Make Any Girl or Boy Fall for You in 7 Days.pdf",
    subject: "Your PDF Guide is Here — How to Make Any Girl or Boy Fall for You in 7 Days",
  },
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { access_key } = await req.json();

    if (!access_key) {
      return new Response(JSON.stringify({ sent: false, error: "Access key required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { data: purchase, error } = await supabase
      .from("product_purchases")
      .select("id, product_id, email, firstname, email_sent, status")
      .eq("access_key", access_key)
      .eq("status", "success")
      .maybeSingle();

    if (error || !purchase) {
      return new Response(JSON.stringify({ sent: false, error: "No valid purchase found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (purchase.email_sent) {
      return new Response(JSON.stringify({ sent: true, already: true, message: "Email already sent" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const productConfig = PRODUCT_FILES[purchase.product_id];
    if (!productConfig) {
      return new Response(JSON.stringify({ sent: false, error: "Product not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: fileData, error: fileError } = await supabase
      .storage
      .from("product-files")
      .download(productConfig.storagePath);

    if (fileError || !fileData) {
      return new Response(JSON.stringify({ sent: false, error: "Could not retrieve product file" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const pdfBytes = new Uint8Array(await fileData.arrayBuffer());

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      return new Response(JSON.stringify({ sent: false, error: "Email service not configured (RESEND_API_KEY missing)" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const buyerName = purchase.firstname || "there";
    const htmlBody = [
      '<!DOCTYPE html><html><body style="font-family: Inter, Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; background: #0B0A10; color: #F5F3F7;">',
      '<div style="text-align: center; margin-bottom: 32px;"><h1 style="font-size: 28px; margin: 0;"><span style="background: linear-gradient(135deg, #FF3D77, #FF8A3D); -webkit-background-clip: text; background-clip: text; color: transparent;">Toolorna</span></h1></div>',
      '<h2 style="font-size: 22px; color: #F5F3F7;">Your guide is here, ' + buyerName + '!</h2>',
      '<p style="font-size: 16px; color: #B8B3C4; line-height: 1.6;">Thank you for your purchase. Your PDF guide — <strong style="color: #FF8A3D;">How to Make Any Girl or Boy Fall for You in 7 Days</strong> — is attached to this email.</p>',
      '<p style="font-size: 16px; color: #B8B3C4; line-height: 1.6;">Save it to your device so you can read it anytime. Start with Day 1 today.</p>',
      '<div style="margin: 32px 0; padding: 20px; border-radius: 12px; background: rgba(255,61,119,0.08); border: 1px solid rgba(255,61,119,0.2);"><p style="font-size: 14px; color: #B8B3C4; margin: 0;">You deserve to be chosen. You deserve to be loved back. This guide will show you exactly how.</p></div>',
      '<p style="font-size: 13px; color: #6B6677; margin-top: 40px;">Toolorna — Every Love Story. Every Message. Every Moment.<br/>Guidance, not professional advice. Grounded in consent and honesty.</p>',
      '</body></html>'
    ].join("");

    // Resend API expects JSON with base64-encoded attachments.
    // Encode in chunks to avoid exceeding the call stack for large PDFs.
    const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let pdfBase64 = "";
    for (let i = 0; i < pdfBytes.length; i += 3) {
      const b1 = pdfBytes[i];
      const b2 = i + 1 < pdfBytes.length ? pdfBytes[i + 1] : 0;
      const b3 = i + 2 < pdfBytes.length ? pdfBytes[i + 2] : 0;
      pdfBase64 += base64Chars[b1 >> 2];
      pdfBase64 += base64Chars[((b1 & 0x03) << 4) | (b2 >> 4)];
      pdfBase64 += i + 1 < pdfBytes.length ? base64Chars[((b2 & 0x0f) << 2) | (b3 >> 6)] : "=";
      pdfBase64 += i + 2 < pdfBytes.length ? base64Chars[b3 & 0x3f] : "=";
    }

    const emailPayload = {
      from: "Toolorna <deliver@toolorna.com>",
      to: purchase.email,
      subject: productConfig.subject,
      html: htmlBody,
      attachments: [
        {
          filename: productConfig.filename,
          content: pdfBase64,
          content_type: "application/pdf",
        },
      ],
    };

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + resendApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      return new Response(JSON.stringify({ sent: false, error: "Email send failed: " + errText }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    await supabase.from("product_purchases").update({
      email_sent: true,
      updated_at: new Date().toISOString(),
    }).eq("id", purchase.id);

    return new Response(JSON.stringify({ sent: true, email: purchase.email }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ sent: false, error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
