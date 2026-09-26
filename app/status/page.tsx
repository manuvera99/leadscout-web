import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Estado del servicio",
  description: "Estado actual de LeadScout y sus componentes.",
};

export default function StatusPage() {
  const services = [
    { name: "Web pública", status: "operational" },
    { name: "API y scrapes", status: "operational" },
    { name: "Dashboard", status: "operational" },
    { name: "Email transaccional", status: "operational" },
    { name: "WhatsApp Business API", status: "operational" },
  ];

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Estado del servicio
          </h1>
          <p className="mt-2 text-gray-600">
            Componentes en tiempo real. Actualizado cada 5 minutos.
          </p>

          <div className="mt-8 space-y-3">
            {services.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3"
              >
                <span className="font-medium text-gray-900">{s.name}</span>
                <span className="flex items-center gap-2 text-sm">
                  {s.status === "operational" ? (
                    <>
                      <CheckCircle2
                        className="h-4 w-4 text-emerald-600"
                        aria-hidden
                      />
                      <span className="text-emerald-700">Operativo</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle
                        className="h-4 w-4 text-amber-600"
                        aria-hidden
                      />
                      <span className="text-amber-700">Con problemas</span>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Histórico de incidentes disponible bajo petición a{" "}
            <a
              href="mailto:hola@leadscout.es"
              className="text-brand-600 hover:underline"
            >
              hola@leadscout.es
            </a>
            . Migración a statuspage.io planificada para el lanzamiento
            comercial.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
