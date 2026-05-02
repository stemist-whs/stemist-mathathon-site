import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

interface ContactPayload {
  name: string;
  email: string;
  query: string;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const body = (await req.json()) as Partial<ContactPayload>;
    const name = (body.name ?? "").toString().trim();
    const email = (body.email ?? "").toString().trim();
    const query = (body.query ?? "").toString().trim();

    if (!name || name.length > 100) {
      return new Response(JSON.stringify({ error: "Invalid name" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!email || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!query || query.length > 2000) {
      return new Response(JSON.stringify({ error: "Invalid query" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #4f46e5; margin: 0 0 16px;">New Mid-Event Contact — STEMist Mathathon</h2>
        <p style="margin: 0 0 8px;"><strong>Participant:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 8px;"><strong>Parent email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 16px 0 4px;"><strong>Query:</strong></p>
        <div style="white-space: pre-wrap; padding: 12px 16px; background: #f5f5fa; border-radius: 8px; border-left: 3px solid #4f46e5;">${escapeHtml(query)}</div>
      </div>
    `;

    const resp = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "STEMist Mathathon <onboarding@resend.dev>",
        to: ["ssharda@joinstemist.org"],
        reply_to: email,
        subject: `Mathathon Mid-Event Contact — ${name}`,
        html,
      }),
    });

    const data = await resp.json();
    if (!resp.ok) {
      console.error("Resend error", resp.status, data);
      throw new Error(`Email send failed [${resp.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("send-contact-email error:", msg);
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
