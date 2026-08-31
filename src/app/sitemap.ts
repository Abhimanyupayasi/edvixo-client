import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

import services from "@/data/services.json";
import solutions from "@/data/solutions.json";
import industries from "@/data/industries.json";
import company from "@/data/company.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /*
   * =========================================================
   * STATIC PAGES
   * =========================================================
   */

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/solutions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/industries`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/company`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /*
   * =========================================================
   * SERVICE PAGES
   *
   * Automatically creates:
   * /services/[slug]
   * =========================================================
   */

  const servicePages: MetadataRoute.Sitemap = Object.keys(
    services,
  ).map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  /*
   * =========================================================
   * SOLUTION PAGES
   *
   * Automatically creates:
   * /solutions/[slug]
   * =========================================================
   */

  const solutionPages: MetadataRoute.Sitemap = Object.keys(
    solutions,
  ).map((slug) => ({
    url: `${SITE_URL}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  /*
   * =========================================================
   * INDUSTRY PAGES
   *
   * Automatically creates:
   * /industries/[slug]
   * =========================================================
   */

  const industryPages: MetadataRoute.Sitemap = Object.keys(
    industries,
  ).map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  /*
   * =========================================================
   * COMPANY PAGES
   *
   * Automatically creates:
   * /company/[slug]
   * =========================================================
   */

  const companyPages: MetadataRoute.Sitemap = Object.keys(
    company,
  ).map((slug) => ({
    url: `${SITE_URL}/company/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  /*
   * =========================================================
   * BLOG
   * =========================================================
   */

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog/small-service-business-local-search`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${SITE_URL}/blog/website-should-speak-to-customer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${SITE_URL}/blog/three-mistakes-small-business-websites`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  /*
   * =========================================================
   * PORTFOLIO
   * =========================================================
   */

  const portfolioPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/portfolio/dental-clinic-growth-website`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/portfolio/restaurant-ordering-experience`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/portfolio/admissions-website-redesign`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  /*
   * =========================================================
   * FINAL SITEMAP
   * =========================================================
   */

  return [
    ...staticPages,
    ...servicePages,
    ...solutionPages,
    ...industryPages,
    ...companyPages,
    ...blogPages,
    ...portfolioPages,
  ];
}