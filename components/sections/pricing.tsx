import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "0",
    period: "/siempre",
    description: "Para probar sin compromiso.",
    cta: "Empezar gratis",
    ctaVariant: "secondary" as const,
    features: [
      "25 leads / mes",
      "100 mensajes outreach",
      "Scoring básico",
      "Email soporte",
    ],
    highlight: false,
  },
  {
    name: "Starter",
    price: "79",
    period: "/mes",
    description: "Para freelancers y agencias pequeñas.",
    cta: "Empezar 14 días gratis",
    ctaVariant: "primary" as const,
    features: [
      "500 leads / mes",
      "1.000 mensajes outreach",
      "WhatsApp + Email + LinkedIn",
      "Secuencias automatizadas",
      "Soporte en español < 24h",
      "Setup con onboarding 1:1 — 199€",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "149",
    period: "/mes",
    description: "Para agencias en escala.",
    cta: "Hablar con ventas",
    ctaVariant: "secondary" as const,
    features: [
      "2.500 leads / mes",
      "10.000 mensajes outreach",
      "3 scrapes simultáneos",
      "CRM Kanban + notas",
      "API + webhooks",
      "Onboarding 1:1 incluido",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-gray-100 bg-gray-50/40 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Pricing transparente
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Empieza gratis. Escala cuando pagues clientes con LeadScout.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sin sorpresas, sin costes ocultos. Anual: -16,7%.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={[
                "relative rounded-2xl border bg-white p-8 transition-shadow",
                tier.highlight
                  ? "border-brand-600 shadow-glow ring-2 ring-brand-600/10"
                  : "border-gray-200 shadow-soft hover:shadow-glow",
              ].join(" ")}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-soft">
                    <Star className="h-3 w-3 fill-current" aria-hidden />
                    Más popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price}€
                </span>
                <span className="text-sm text-gray-500">{tier.period}</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check
                      className="h-4 w-4 mt-0.5 shrink-0 text-emerald-600"
                      aria-hidden
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="#signup">
                  <Button
                    variant={tier.ctaVariant}
                    className="w-full"
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          IVA no incluido. Setup único de 199€ opcional para onboarding 1:1 en
          Starter y Pro.
        </p>
      </div>
    </section>
  );
}
