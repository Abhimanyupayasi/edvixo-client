import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

import services from "@/data/services.json";
import solutions from "@/data/solutions.json";
import industries from "@/data/industries.json";
import company from "@/data/company.json";
import portfolio from "@/data/portfolio.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
    },
    {
      url: `${SITE_URL}/about`,
    },
    {
      url: `${SITE_URL}/services`,
    },
    {
      url: `${SITE_URL}/solutions`,
    },
    {
      url: `${SITE_URL}/industries`,
    },
    {
      url: `${SITE_URL}/company`,
    },
    {
      url: `${SITE_URL}/portfolio`,
    },
    {
      url: `${SITE_URL}/contact`,
    },
    {
      url: `${SITE_URL}/docs`,
    },
    {
      url: `${SITE_URL}/privacy`,
    },
    {
      url: `${SITE_URL}/terms`,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = Object.keys(services).map(
    (slug) => ({
      url: `${SITE_URL}/services/${slug}`,
    }),
  );

  const solutionPages: MetadataRoute.Sitemap = Object.keys(solutions).map(
    (slug) => ({
      url: `${SITE_URL}/solutions/${slug}`,
    }),
  );

  const industryPages: MetadataRoute.Sitemap = Object.keys(industries).map(
    (slug) => ({
      url: `${SITE_URL}/industries/${slug}`,
    }),
  );

  const companyPages: MetadataRoute.Sitemap = Object.keys(company).map(
    (slug) => ({
      url: `${SITE_URL}/company/${slug}`,
    }),
  );

  const portfolioPages: MetadataRoute.Sitemap = Object.keys(portfolio).map(
    (slug) => ({
      url: `${SITE_URL}/portfolio/${slug}`,
    }),
  );

  return [
    ...staticPages,
    ...servicePages,
    ...solutionPages,
    ...industryPages,
    ...companyPages,
    ...portfolioPages,
  ];
}