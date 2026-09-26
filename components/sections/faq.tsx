"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Qué es LeadScout exactamente?",
    a: "Es un SaaS para agencias de marketing digital y freelancers en España. Encuentra negocios locales en Google Maps, los analiza con IA para detectar gaps en su web, y genera outreach multicanal en español (WhatsApp + Email + LinkedIn) listo para enviar.",
  },
  {
    q: "¿Cómo de legal es el scraping de Google Maps?",
    a: "LeadScout no scrapea. Usamos Google Places API oficial, que es el canal autorizado por Google. Cumplimos RGPD con base jurídica de interés legítimo (art. 6.1.f) para datos de empresa, y opción de baja en cada mensaje. Auditoría legal completa disponible.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Hay plan Free (0€/mes, 25 leads, 100 mensajes) para probar. Starter son 79€/mes con 500 leads y 1.000 mensajes. Pro son 149€/mes para agencias en escala. Hay un setup único opcional de 199€ con onboarding 1:1.",
  },
  {
    q: "¿Qué incluye el setup de 199€?",
    a: "Una sesión de 1 hora por vídeo donde configuramos tu primer nicho, ciudad y cadencia. Te dejamos 5 plantillas de secuencias listas. Sales con el primer scrape hecho y los primeros 25 mensajes enviados.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. Sin permanencia. Cancelas desde tu dashboard y dejas de pagar al final del ciclo facturado. Tus datos te los quedas en CSV.",
  },
  {
    q: "¿Tiene integraciones con HubSpot, Pipedrive, etc.?",
    a: "Sí. Integraciones nativas vía Zapier y Make con HubSpot, Pipedrive, Notion, Airtable, Google Sheets y Slack. API REST propia + webhooks para integraciones custom.",
  },
  {
    q: "¿Funciona solo en España?",
    a: "Funciona en cualquier país con cobertura de Google Places API (200+ países). Hoy el outreach generado está en español; en roadmap está en/en/fr a 6 meses.",
  },
  {
    q: "¿Y el soporte?",
    a: "Email en español con respuesta en menos de 24h en días laborables. Clientes Pro tienen canal Slack compartido. Documentación y videos de uso incluidos.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Lo que necesitas saber antes de empezar.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-gray-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-gray-400 transition-transform",
                      isOpen && "rotate-180 text-brand-600",
                    )}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
