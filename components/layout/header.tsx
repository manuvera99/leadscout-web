import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" aria-label="LeadScout inicio">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Principal">
          <Link
            href="#como-funciona"
            className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md transition-colors"
          >
            Cómo funciona
          </Link>
          <Link
            href="#features"
            className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md transition-colors"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden sm:inline-flex px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md"
          >
            Iniciar sesión
          </Link>
          <Link href="#signup">
            <Button size="sm">Empezar gratis</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
