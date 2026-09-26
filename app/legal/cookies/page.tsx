import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Qué cookies usa LeadScout y para qué.",
};

export default function CookiesPage() {
  return (
    <>
      <h1>Política de cookies</h1>
      <p className="text-sm text-gray-500">
        Última actualización: septiembre 2026
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños ficheros que un sitio web almacena en tu
        navegador para recordar información entre visitas.
      </p>

      <h2>2. Cookies que usamos</h2>
      <ul>
        <li>
          <strong>Estrictamente necesarias</strong>: sesión de autenticación
          (Clerk). No se pueden desactivar.
        </li>
        <li>
          <strong>Analíticas</strong>: Vercel Analytics (agregado,
          anonimizado, sin cookies de terceros). Opcional.
        </li>
        <li>
          <strong>Marketing</strong>: actualmente ninguna. Si añadimos pixels
          de Meta, Google Ads o LinkedIn, aparecerán aquí y pedirán
          consentimiento previo.
        </li>
      </ul>

      <h2>3. Gestión de cookies</h2>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar cookies. Las
        cookies estrictamente necesarias no se pueden desactivar sin
        impedir el funcionamiento del servicio.
      </p>

      <h2>4. Cambios</h2>
      <p>
        Cualquier cambio en esta política se publicará en esta página con
        fecha de actualización.
      </p>
    </>
  );
}
