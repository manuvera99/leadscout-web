import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] py-16">
        <div className="container max-w-3xl">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Legal</span>
          </nav>
          <article className="prose prose-gray max-w-none prose-headings:font-semibold prose-h1:text-3xl prose-h1:tracking-tight">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
