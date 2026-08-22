import type { Metadata } from "next";

import portfolio from "@/data/portfolio.json";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import {
  getPortfolioListSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Portfolio - Edvixo Digital Solutions",
  description:
    "Explore Edvixo portfolio and case studies across healthcare, hospitality, education, local business, and digital solutions.",
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
};

function PortfolioHero() {
  const projects = Object.values(portfolio);

  const industries = Array.from(
    new Set(
      projects.flatMap(
        (project) => project.industries ?? []
      )
    )
  );

  return (
    <section className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
          Our Portfolio
        </p>

        <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-on-background md:text-5xl">
          Websites Built for{" "}
          <span className="text-primary">
            Real Businesses
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-body-large leading-relaxed text-on-surface-variant">
          Explore our selected projects and see how thoughtful
          digital experiences help businesses build trust,
          generate enquiries, and grow online.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-12">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">
              {projects.length}+
            </p>

            <p className="mt-1 text-sm text-on-surface-variant">
              Projects
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-primary">
              {industries.length}
            </p>

            <p className="mt-1 text-sm text-on-surface-variant">
              Industries
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-primary">
              100%
            </p>

            <p className="mt-1 text-sm text-on-surface-variant">
              Client Focus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioCTA() {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight text-white">
          Ready to Build Your Next Project?
        </h2>

        <p className="mt-4 leading-relaxed text-primary-container">
          Let&apos;s create a professional digital experience
          that helps your business attract more customers and
          grow with confidence.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-shape-full bg-white px-8 py-4 font-semibold text-primary transition-colors hover:bg-primary-container"
          >
            Book Free Call
          </a>

          <a
            href="https://wa.me/919685238884"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-shape-full bg-tertiary-container px-8 py-4 font-semibold text-on-tertiary-container transition-opacity hover:opacity-90"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  const portfolioItems = Object.values(portfolio);

  return (
    <main>
      {/* SEO Schema */}
      <JsonLd
        data={getPortfolioListSchema(
          portfolioItems.map((item) => ({
            title: item.title,
            slug: item.slug,
            excerpt: item.tagline,
            coverImage: item.coverImage,
          }))
        )}
      />

      <JsonLd
        data={getBreadcrumbSchema([
          {
            name: "Home",
            url: SITE_URL,
          },
          {
            name: "Portfolio",
            url: `${SITE_URL}/portfolio`,
          },
        ])}
      />

      {/* Hero */}
      <PortfolioHero />

      {/* Projects */}
      <PortfolioSection items={portfolioItems} />

      {/* CTA */}
      <PortfolioCTA />
    </main>
  );
}