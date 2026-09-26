import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leadscout.es"),
  title: {
    default: "LeadScout — Encuentra clientes locales para tu agencia de marketing",
    template: "%s · LeadScout",
  },
  description:
    "500 leads locales cualificados en 30 segundos. Outreach multicanal en español listo para enviar. La herramienta que usan las agencias de marketing en España para captar clientes locales sin web.",
  keywords: [
    "leads locales España",
    "scraping Google Maps",
    "agencia marketing",
    "prospección B2B",
    "outreach multicanal",
    "WhatsApp cold outreach",
    "LeadScout",
  ],
  authors: [{ name: "LeadScout" }],
  creator: "LeadScout",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://leadscout.es",
    siteName: "LeadScout",
    title: "LeadScout — Encuentra clientes locales para tu agencia de marketing",
    description:
      "500 leads locales cualificados en 30 segundos. Outreach multicanal en español.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadScout — Encuentra clientes locales",
    description:
      "500 leads locales cualificados en 30 segundos. Outreach multicanal en español.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-ES" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
