import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import industries from "@/data/industries.json";

const icons = {
  healthcare: HeartPulse,
  education: GraduationCap,
  saas: Sparkles,
  retail: ShoppingBag,
  "real-estate": Building2,
  hospitality: Hotel,
} as const;

export default function IndustriesSection() {
  return (
    <section className="bg-surface-container-low py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            INDUSTRIES WE SERVE
          </p>

          <h2 className="text-3xl font-bold leading-tight text-on-background md:text-4xl">
            Digital Solutions Built for
            <span className="text-primary"> Your Industry</span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
            Every industry has different customers, challenges, and business
            goals. We build digital experiences around the specific needs of
            your business.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {Object.entries(industries).map(([slug, industry]) => {
            const Icon =
              icons[slug as keyof typeof icons] ?? Building2;

            return (
              <article
                key={slug}
                className="group flex h-full flex-col rounded-shape-md border border-outline-variant bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-7"
              >

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container">
                  <Icon className="h-7 w-7 text-on-primary-container" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-on-background">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-relaxed text-on-surface-variant">
                  {industry.heroDescription}
                </p>

                {/* Who it's for */}
                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                    Best for
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {industry.whoItsFor.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-shape-full bg-secondary-container px-3 py-1 text-xs font-medium text-on-secondary-container"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-7">
                  <Link
                    href={`/industries/${slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-shape-md bg-primary-container px-5 py-3 text-sm font-semibold text-on-primary-container transition-colors duration-200 hover:bg-primary hover:text-on-primary"
                  >
                    Explore Industry

                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View All Industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}