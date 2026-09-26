import Link from "next/link";
import { Logo } from "@/components/brand/logo";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-gray-600 leading-relaxed">
              Encuentra clientes locales para tu agencia de marketing digital.
              Outreach multicanal en español, scoring IA y datos 100% compliance
              RGPD.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Producto</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terminos"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Términos
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacidad"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hola@leadscout.es"
                  className="text-gray-600 hover:text-gray-900"
                >
                  hola@leadscout.es
                </a>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Status
                </Link>
              </li>
              <li>
                <a
                  href="https://twitter.com/leadscout_es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/leadscout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row sm:justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} LeadScout. Todos los derechos reservados.
          </p>
          <p>
            Hecho con <span aria-hidden>♥</span> en España · RGPD compliant ·
            Datos de Google Places API oficial
          </p>
        </div>
      </div>
    </footer>
  );
}
