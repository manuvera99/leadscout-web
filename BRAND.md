# LeadScout — Brand Kit

> Documento de marca vivo. Cualquier cambio en paleta, tipografía o tono se refleja aquí.

## Naming
- **Producto**: LeadScout
- **Tagline principal**: "Encuentra clientes locales para tu agencia de marketing."
- **Tagline alternativa**: "500 leads locales cualificados en 30 segundos. Outreach multicanal en español listo para enviar."
- **Tag visual (repetido)**: "Encuentra. Analiza. Cierra." (3 verbos = 3 agentes)

## Personalidad
- **Tono**: directo, sin marketing-speak. Frases cortas. Verbos en imperativo.
- **Voz**: como un buen comercial hablando con un amigo. Nada de "vanguardia" ni "desbloquear valor sin precedentes".
- **Audiencia**: agencias de marketing digital y freelancers en España. Técnicos pero sin tiempo.

## Paleta

### Primary
- `brand-600` `#4F46E5` — botones principales, links
- `brand-700` `#4338CA` — hover
- `brand-50`  `#EEF2FF` — fondos suaves

### Accent
- `sky-500` `#0EA5E9` — highlights, badges
- `emerald-600` `#059669` — checks de éxito
- `amber-500`  `#F59E0B` — warnings

### Neutrales
- `gray-900` `#111827` — texto principal
- `gray-600` `#6B7280` — texto secundario
- `gray-100` `#F3F4F6` — fondos suaves
- `gray-50`  `#F9FAFB` — secciones alternas
- `white`    `#FFFFFF` — fondo principal

## Tipografía
- **Sans (display + body)**: Inter, pesos 400/500/600/700. Vía `next/font/google` con `display: swap`.
- **Mono (código, números)**: JetBrains Mono.

## Logo

SVG inline en `components/brand/logo.tsx`. Tres variantes:
- `color` — brand-600 + sky-500 (default, sobre fondo blanco)
- `white` — todo blanco (sobre fondo oscuro, emails)
- `mono`  — gris-900 (impresión, fax)

Composición:
- Pin de Maps estilizado con un check dentro
- Punto accent en la esquina superior derecha

## Iconografía
- Lucide React (`lucide-react`), estilo outline, peso 2.

## Espaciado y radios
- Radio por defecto: `rounded-lg` (8px) en botones, `rounded-xl` (12px) en cards, `rounded-2xl` (16px) en contenedores grandes.
- Container max-width: 1200px.
- Padding vertical de sección: `py-20` (80px) → `md:py-28` (112px).

## Sombras
- `shadow-soft`: sombra ligera para cards (`0 1px 2px / 0 4px 12px` en rgba(15,23,42,0.04-0.06))
- `shadow-glow`: sombra con tinte brand-600 al hover (`0 8px 30px rgba(79, 70, 229, 0.18)`)

## Ejemplos de copy bueno vs malo

**Bueno** ✅
- "Escanea Alicante en 30 segundos y obtén 200 fichas con teléfono, web y reseñas."
- "Tu próxima semana con 10 clientes locales empieza hoy."
- "Setup con onboarding 1:1 — 199€."

**Malo** ❌
- "Nuestra plataforma vanguardista permite a profesionales del marketing desbloquear valor sin precedentes."
- "Solución holística para la transformación digital de tu negocio."
- "ROI exponencial mediante IA de última generación."

## Voz en emails transaccionales
- Asunto corto, sin clickbait.
- Cuerpo con saludo personalizado si es viable (placeholder genérico por ahora).
- CTA principal siempre claro y único.
- Footer con opción de baja explícita (cumple RGPD).
