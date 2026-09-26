import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso de LeadScout.",
};

export default function TerminosPage() {
  return (
    <>
      <h1>Términos y condiciones</h1>
      <p className="text-sm text-gray-500">
        Última actualización: septiembre 2026
      </p>

      <h2>1. Identificación del titular</h2>
      <p>
        LeadScout es un servicio prestado por [datos del titular a completar
        antes de lanzamiento comercial]. Para cualquier comunicación, escribe a{" "}
        <a href="mailto:hola@leadscout.es">hola@leadscout.es</a>.
      </p>

      <h2>2. Objeto</h2>
      <p>
        Estos términos regulan el uso del SaaS LeadScout, una herramienta de
        prospección comercial orientada a agencias de marketing digital y
        freelancers en España.
      </p>

      <h2>3. Aceptación</h2>
      <p>
        El uso del servicio implica la aceptación íntegra de estos términos.
        Si no estás de acuerdo, no uses el servicio.
      </p>

      <h2>4. Plan Free, planes de pago y facturación</h2>
      <p>
        LeadScout ofrece un plan Free con uso limitado sin coste. Los planes
        de pago (Starter, Pro, Enterprise) se facturan mensualmente o
        anualmente con tarjeta a través de Stripe. La suscripción se renueva
        automáticamente salvo que el usuario cancele antes del fin del ciclo.
        Puedes cancelar en cualquier momento desde tu dashboard; el servicio
        seguirá disponible hasta el final del periodo ya abonado.
      </p>

      <h2>5. Uso permitido</h2>
      <p>
        Está prohibido usar LeadScout para enviar spam, contenido ilegal,
        acosador, fraudulento o que infrinja derechos de terceros. Los datos
        obtenidos a través de LeadScout solo pueden usarse para contactar al
        negocio identificado con una oferta comercial relevante (B2B),
        conforme al RGPD (art. 6.1.f, interés legítimo). Cada mensaje
        enviado debe incluir opción clara de baja.
      </p>

      <h2>6. Limitación de responsabilidad</h2>
      <p>
        LeadScout no garantiza resultados comerciales concretos. La
        responsabilidad total del prestador frente al usuario se limita al
        importe abonado por el usuario en los 12 meses anteriores al
        incidente.
      </p>

      <h2>7. Modificaciones</h2>
      <p>
        Podemos modificar estos términos con un preaviso de 30 días. Si no
        aceptas los nuevos términos, puedes cancelar tu suscripción.
      </p>

      <h2>8. Ley aplicable y jurisdicción</h2>
      <p>
        Estos términos se rigen por la legislación española. Para cualquier
        controversia, las partes se someten a los Juzgados de [ciudad del
        prestador].
      </p>

      <p className="text-sm text-gray-500 mt-8">
        <em>
          Documento provisional generado al inicio del proyecto. Será revisado
          por asesoría jurídica antes del lanzamiento comercial.
        </em>
      </p>
    </>
  );
}
