import { EmailCapture } from "./email-capture";

export function CTAFinal() {
  return (
    <section
      id="signup"
      className="border-t border-gray-100 bg-gradient-to-b from-white to-brand-50/30 py-20 md:py-28"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Tu próxima semana con 10 clientes locales empieza hoy.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            25 leads gratis al mes. Sin tarjeta. Empieza en 30 segundos.
          </p>

          <div className="mt-8 flex justify-center">
            <EmailCapture source="footer-cta" cta="Empezar gratis" />
          </div>

          <p className="mt-6 text-xs text-gray-500">
            ¿Prefieres una demo 1:1?{" "}
            <a
              href="mailto:hola@leadscout.es?subject=Demo%20LeadScout"
              className="text-brand-600 hover:underline"
            >
              Escríbenos
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
