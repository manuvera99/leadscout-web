import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const source = body.source || "landing";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  // 1) Log local (para debug en producción se sustituye por DB o Resend Audiences)
  console.log("[subscribe]", { email, source, at: new Date().toISOString() });

  // 2) Resend (opcional). Solo si RESEND_API_KEY está configurada.
  //    Si no lo está, devolvemos éxito igualmente — la UX no se rompe.
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (apiKey && audienceId) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.contacts.create({
        email,
        audienceId,
        unsubscribed: false,
      });
    } catch (err) {
      console.error("[subscribe] Resend error:", err);
      // No fallamos la request si Resend falla; el usuario ve éxito y reintentamos luego.
    }
  } else {
    // Modo "sin Resend": solo log. Útil para el primer deploy de validación.
    console.log(
      "[subscribe] RESEND_API_KEY no configurada — email solo en logs.",
    );
  }

  // 3) Email de bienvenida al usuario (opcional).
  //    Si tienes RESEND_FROM y RESEND_API_KEY, le mandamos un mini-auditor genérico.
  const fromAddr = process.env.RESEND_FROM;
  if (apiKey && fromAddr) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: fromAddr,
        to: email,
        subject: "Bienvenido a LeadScout — tu mini-auditor GBP",
        html: `
          <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
            <h1 style="color: #4F46E5; margin: 0 0 16px 0;">¡Bienvenido a LeadScout!</h1>
            <p>Gracias por registrarte. Aquí va tu <strong>mini-auditor gratuito de Google Business Profile</strong>:</p>
            <ol style="line-height: 1.8;">
              <li>Revisa tu ficha de Google Business Profile</li>
              <li>Comprueba que tienes 5+ reseñas y foto de portada</li>
              <li>Añade horarios actualizados y categoría correcta</li>
              <li>Sube 3 fotos reales de tu negocio</li>
              <li>Publica tu primer post semanal</li>
            </ol>
            <p style="margin-top: 24px;"><a href="https://app.leadscout.es/signup" style="background: #4F46E5; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">Crear cuenta gratis</a></p>
            <p style="color: #6B7280; font-size: 12px; margin-top: 24px;">Si no has solicitado este email, ignóralo. No te escribiremos de nuevo sin tu permiso.</p>
          </div>
        `,
      });
    } catch (err) {
      console.error("[subscribe] Welcome email error:", err);
    }
  }

  return NextResponse.json({
    ok: true,
    email,
    source,
    next: "Te hemos enviado un email con tu mini-auditor.",
  });
}

export async function GET() {
  return NextResponse.json({ ok: true, hint: "POST a este endpoint." });
}
