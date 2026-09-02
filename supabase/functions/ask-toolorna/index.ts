import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");

const SYSTEM_PROMPT = `You are the "Ask Toolorna" assistant on an Indian relationship-guidance website. You help people with real, grounded questions about attraction, shyness, approaching someone, the talking stage, relationships, breakups, and heartbreak, in an Indian cultural context. Ground every answer in respect, consent, honesty, and healthy communication. Never suggest manipulation, pressure tactics, guilt-tripping, or "pickup artist" tricks. Encourage users to read the other person's actual interest and to accept "no" gracefully. Keep answers warm, direct, and practical — a few short paragraphs, not a lecture. Use Indian context naturally where relevant (family, office, college, mutual friends) but do not stereotype any single religion, caste, or region. If someone describes a breakup, heartbreak, or distress, respond with genuine empathy first before any advice. If a question touches on anything unsafe (self-harm, abuse, stalking, coercion), respond supportively but do not give tactics — gently point them toward talking to a trusted person or a professional instead.`;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const messages: { role: string; text: string }[] = Array.isArray(body?.messages)
      ? body.messages
      : [];

    if (messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "No messages provided." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.text }],
    }));

    if (!GEMINI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "AI service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
        }),
      },
    );

    if (!geminiRes.ok) {
      return new Response(
        JSON.stringify({ error: "The AI service could not be reached." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const data = await geminiRes.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Sorry, I couldn't put together a reply just now. Could you try rephrasing?";

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err?.message ?? "Unexpected server error." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
