import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo LeadScout recoge, usa y protege tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <>
      <h1>Política de privacidad</h1>
      <p className="text-sm text-gray-500">
        Última actualización: septiembre 2026
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        [Datos del titular a completar]. Contacto:{" "}
        <a href="mailto:hola@leadscout.es">hola@leadscout.es</a>.
      </p>

      <h2>2. Qué datos recogemos</h2>
      <ul>
        <li>
          <strong>Datos de cuenta</strong>: email, nombre (opcional),
          organización, plan contratado.
        </li>
        <li>
          <strong>Datos de uso</strong>: scrpapes realizados, leads
          consultados, mensajes enviados, IP de acceso.
        </li>
        <li>
          <strong>Datos de facturación</strong>: gestionados por Stripe
          (nunca almacenamos número de tarjeta).
        </li>
        <li>
          <strong>Datos scrapeados de terceros</strong>: solo datos
          públicamente accesibles vía Google Places API oficial (nombre de
          empresa, dirección, teléfono genérico, web).
        </li>
      </ul>

      <h2>3. Finalidad</h2>
      <ul>
        <li>Prestar el servicio contratado.</li>
        <li>Facturación y soporte.</li>
        <li>
          Mejorar el producto con analítica agregada y anonimizada (nunca
          datos individuales).
        </li>
        <li>
          Comunicaciones transaccionales (recibo, alertas de seguridad).
        </li>
      </ul>

      <h2>4. Base jurídica</h2>
      <ul>
        <li>
          <strong>Ejecución del contrato</strong> para los datos de cuenta y
          facturación.
        </li>
        <li>
          <strong>Interés legítimo (RGPD art. 6.1.f)</strong> para datos
          scrapeados de empresas, usado únicamente para prospección B2B con
          opción de baja en cada mensaje.
        </li>
        <li>
          <strong>Consentimiento</strong> para emails marketing (newsletter).
        </li>
      </ul>

      <h2>5. Destinatarios</h2>
      <p>
        Proveedores de infraestructura: Vercel (hosting), Supabase (DB),
        Clerk (auth), Stripe (pagos), Resend (email), Google Places API
        (datos). Todos con DPA conforme RGPD.
      </p>

      <h2>6. Transferencias internacionales</h2>
      <p>
        Algunos proveedores pueden tratar datos fuera del EEE (ej. Vercel US).
        En esos casos, se utilizan garantías adecuadas (cláusulas contractuales
        tipo de la Comisión Europea, decisión de adecuación, etc.).
      </p>

      <h2>7. Conservación</h2>
      <p>
        Mientras la cuenta esté activa. Tras cancelación, los datos se
        eliminan en un plazo máximo de 90 días, salvo obligaciones legales
        (facturas: 5 años).
      </p>

      <h2>8. Derechos</h2>
      <p>
        Tienes derecho a acceder, rectificar, suprimir, limitar el
        tratamiento, oponerte y solicitar portabilidad de tus datos.
        Escríbenos a <a href="mailto:hola@leadscout.es">hola@leadscout.es</a>{" "}
        para ejercerlos. También puedes reclamar ante la AEPD.
      </p>

      <h2>9. Medidas de seguridad</h2>
      <p>
        Cifrado en tránsito (TLS 1.3), cifrado en reposo, Row Level Security
        en base de datos, autenticación con 2FA opcional, logs de acceso
        auditados.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        <em>
          Documento provisional. Revisión jurídica antes del lanzamiento
          comercial.
        </em>
      </p>
    </>
  );
}
