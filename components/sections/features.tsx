import {
  ScanSearch,
  Brain,
  MessageCircle,
  Mail,
  Linkedin,
  ShieldCheck,
  Database,
  Users,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ScanSearch,
    title: "Scrape Maps en segundos",
    description:
      "Conecta Google Places API oficial. 187 fichas de dentistas en Alicante en 22 segundos. Sin rate limits, sin baneos.",
  },
  {
    icon: Brain,
    title: "Scoring IA 0-100",
    description:
      "Cada negocio se puntúa por web rota, ficha incompleta, reseñas bajas y señales de crecimiento. Filtra por score y vende solo a los prioritarios.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp integrado",
    description:
      "Genera y envía mensajes WhatsApp directamente. Plantillas pre-aprobadas por Meta. Tracking de delivery, lectura y respuesta.",
  },
  {
    icon: Mail,
    title: "Email personalizado",
    description:
      "Secuencias multi-step con detección de apertura y respuesta. Stop automático cuando el lead contesta.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn outreach",
    description:
      "Mensajes de conexión y notas personalizadas. Encuentra el perfil del decisor con búsqueda por empresa.",
  },
  {
    icon: Database,
    title: "Datos 100% compliance",
    description:
      "Google Places API oficial + RGPD art. 6.1.f (interés legítimo) + opción de baja en cada mensaje. Auditoría legal incluida.",
  },
  {
    icon: Users,
    title: "Multi-tenant por equipo",
    description:
      "Cada agencia ve solo SUS leads. Roles owner/editor/viewer. Invita a tu equipo con un click. Sin compartir contraseñas.",
  },
  {
    icon: ShieldCheck,
    title: "CRM ligero incluido",
    description:
      "Vista Kanban y tabla de leads. Notas, log de actividades y recordatorios. Sin HubSpot extra.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Todo lo que necesitas
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Un solo SaaS. Sin pagar 5 herramientas separadas.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Apollo cuesta $49/mes. Lemlist otros $87. LocalProspects $29.
            BrightLocal $39. <strong>LeadScout los reemplaza a todos por 79€.</strong>
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-soft"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 group-hover:bg-brand-100 transition-colors">
                  <Icon
                    className="h-5 w-5 text-brand-600"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-600">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden />
          Sin tarjeta para empezar · Cancela cuando quieras · Soporte en español
        </div>
      </div>
    </section>
  );
}
