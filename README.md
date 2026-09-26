# LeadScout Web

Landing pública + dashboard de [LeadScout](https://leadscout.es) — SaaS para agencias de marketing digital en España.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 3
- lucide-react (iconos)
- Resend (emails transaccionales, opcional en dev)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Variables de entorno

Copia `.env.example` a `.env.local` y rellena lo que necesites. **Sin variables, la app funciona**; los emails solo se loguean en consola.

```bash
RESEND_API_KEY=         # opcional: para emails reales
RESEND_AUDIENCE_ID=     # opcional: añade el contacto a una audiencia
RESEND_FROM=            # opcional: remitente verificado, ej: "LeadScout <hola@leadscout.es>"
```

## Estructura

```
app/
├── (públicas)
│   ├── page.tsx              ← landing principal
│   ├── status/page.tsx
│   └── legal/
│       ├── layout.tsx
│       ├── terminos/page.tsx
│       ├── privacidad/page.tsx
│       └── cookies/page.tsx
├── api/subscribe/route.ts    ← captura emails
├── sitemap.ts                ← sitemap.xml automático
├── robots.ts                 ← robots.txt automático
├── layout.tsx                ← Inter + JetBrains Mono, metadata, OG
├── globals.css               ← tokens + utilidades
components/
├── brand/logo.tsx            ← SVG inline
├── layout/{header,footer}.tsx
├── sections/{hero,how-it-works,features,pricing,faq,cta-final,email-capture}.tsx
├── seo/json-ld.tsx           ← Schema.org
└── ui/{button,badge}.tsx
```

## Despliegue

```bash
vercel --prod
```

Dominio: `leadscout.es` (a configurar en Vercel dashboard tras comprar el dominio).
