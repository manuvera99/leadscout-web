import Script from "next/script";

const SITE_URL = "https://leadscout.es";

export function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LeadScout",
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    description:
      "SaaS para agencias de marketing digital en España: scraping de Google Maps, scoring IA y outreach multicanal en español.",
    sameAs: [
      "https://twitter.com/leadscout_es",
      "https://www.linkedin.com/company/leadscout",
    ],
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LeadScout",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "Encuentra clientes locales para tu agencia de marketing. Outreach multicanal en español.",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "EUR",
        description: "25 leads/mes, 100 mensajes outreach",
      },
      {
        "@type": "Offer",
        name: "Starter",
        price: "79",
        priceCurrency: "EUR",
        description: "500 leads/mes, 1.000 mensajes, multicanal",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "149",
        priceCurrency: "EUR",
        description: "2.500 leads/mes, 10.000 mensajes, API",
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es LeadScout?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SaaS para agencias de marketing en España que automatiza prospección local: scraping de Google Maps, scoring IA y outreach multicanal en español.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo de legal es el scraping de Google Maps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LeadScout usa Google Places API oficial. Cumplimos RGPD con base jurídica de interés legítimo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan Free (0€), Starter (79€/mes), Pro (149€/mes). Setup opcional de 199€.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-org"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <Script
        id="ld-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
