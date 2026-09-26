import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "./email-capture";
import { Sparkles, ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Fondo decorativo sutil */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-bg opacity-50"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-100/40 via-sky-500/10 to-transparent blur-3xl"
      />

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>
            <Sparkles className="h-3 w-3" aria-hidden />
            En beta cerrada · 50 agencias early-adopter
          </Badge>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Encuentra clientes locales para tu{" "}
            <span className="gradient-text">agencia de marketing</span>.
          </h1>

          <p className="mt-6 text-balance text-lg text-gray-600 leading-relaxed md:text-xl">
            500 leads cualificados en 30 segundos. Outreach multicanal en
            español listo para enviar. Sin API keys, sin scraping manual.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <EmailCapture source="hero" />
            <p className="text-xs text-gray-500">
              25 leads gratis al mes · sin tarjeta · RGPD compliant
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckIcon /> Sin instalación
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon /> Setup con onboarding 1:1
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon /> Cancela cuando quieras
            </span>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <Link href="#demo">
              <Button variant="secondary" size="md">
                <Play className="h-4 w-4" aria-hidden />
                Ver demo de 60s
              </Button>
            </Link>
            <Link href="#pricing">
              <Button variant="ghost" size="md">
                Ver pricing
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero screenshot mockup */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative rounded-2xl border border-gray-200 bg-white shadow-glow overflow-hidden">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 font-mono text-xs text-gray-500">
                app.leadscout.es /leads
              </span>
            </div>
            <div className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50/50">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { name: "Clínica Dental Bona", city: "Alicante", score: 92, gap: "Sin web" },
                  { name: "Panadería Horno Viejo", city: "San Vicente", score: 84, gap: "Web rota" },
                  { name: "Asesoría López", city: "Elche", score: 78, gap: "Sin reseñas" },
                  { name: "Restaurante Casa Mar", city: "Alicante", score: 71, gap: "GBP incompleto" },
                  { name: "Taller Ruiz", city: "San Juan", score: 68, gap: "Sin web" },
                  { name: "Peluquería Estilo", city: "Centro", score: 64, gap: "Web lenta" },
                ].map((lead, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-100 bg-white p-4 shadow-soft text-left"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {lead.name}
                        </p>
                        <p className="text-xs text-gray-500">{lead.city}</p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5">
                        <span className="text-xs font-semibold text-emerald-700">
                          {lead.score}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      <span className="font-medium">Gap:</span> {lead.gap}
                    </p>
                    <div className="mt-3 flex gap-1.5">
                      <span className="rounded bg-brand-50 px-1.5 py-0.5 text-[10px] font-medium text-brand-700">
                        WhatsApp
                      </span>
                      <span className="rounded bg-sky-50 px-1.5 py-0.5 text-[10px] font-medium text-sky-700">
                        Email
                      </span>
                      <span className="rounded bg-purple-50 px-1.5 py-0.5 text-[10px] font-medium text-purple-700">
                        LinkedIn
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-emerald-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.086l6.79-6.795a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
