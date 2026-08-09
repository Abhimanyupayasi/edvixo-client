import type { MetadataRoute } from "next";
import { SITE_URL } from "./layout";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/admin",
          "/admin/",
          "/portal",
          "/portal/",
          "/api/",
          "/login",
          "/_next/",
          "/static/",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        disallow: ["/admin/", "/portal/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
