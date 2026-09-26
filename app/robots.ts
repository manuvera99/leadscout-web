import type { MetadataRoute } from "next";

const SITE_URL = "https://leadscout.es";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/status"],
        disallow: ["/api/", "/dashboard/", "/login", "/signup"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
