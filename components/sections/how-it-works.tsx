import {
  Search,
  Brain,
  Send,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Escanea Maps",
    description:
      "Indica nicho y ciudad. LeadScout extrae en segundos todas las fichas de Google Maps con teléfono, web, reseñas y horarios.",
    detail: 'Ej: "dentistas en Alicante capital" → 187 fichas en 22 segundos',
  },
  {
    number: "02",
    icon: Brain,
    title: "Analiza con IA",
    description:
      "Cada negocio recibe un score 0-100 según la calidad de su web, ficha de Google, reseñas y señales de crecimiento. La IA identifica el gap exacto que puedes vender.",
    detail: "Gap: 'Sin web' + 'Sin reseñas' = lead prioritario para tu agencia",
  },
  {
    number: "03",
    icon: Send,
    title: "Envía outreach multicanal",
    description:
      "Genera mensajes personalizados en español para WhatsApp, Email y LinkedIn. Cada uno menciona el gap concreto del negocio. Envía y haz seguimiento desde un único panel.",
    detail: "3 mensajes por lead · 14 días de cadencia · 3-5x más replies",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-gray-100 bg-gray-50/40 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Cómo funciona
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            De &ldquo;necesito clientes&rdquo; a &ldquo;cerré un contrato&rdquo; en 3 pasos.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sin aprender herramientas. Sin contratar SDRs. Sin Excel.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-soft transition-shadow hover:shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-brand-600">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                    <Icon className="h-5 w-5 text-brand-600" aria-hidden />
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>

                <div className="mt-6 rounded-lg bg-gray-50 border border-gray-100 px-3 py-2 font-mono text-xs text-gray-600">
                  {step.detail}
                </div>

                {i < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-gray-300 md:block"
                    aria-hidden
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
