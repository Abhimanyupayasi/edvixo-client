import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  CalendarDays,
  CheckCircle2,
  Globe,
  MapPin,
  ShoppingCart,
  Zap,
} from "lucide-react";

import services from "@/data/services.json";

const icons = {
  "business-websites": Globe,
  "online-stores": ShoppingCart,
  "booking-systems": CalendarDays,
  "local-seo": MapPin,
  "website-redesign": Zap,
  dashboards: BarChart2,
} as const;

export default function ServicesSection() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            WHAT WE BUILD
          </p>

          <h2 className="text-3xl font-bold leading-tight text-on-background md:text-4xl">
            Digital Solutions Built for
            <span className="text-primary"> Business Growth</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-on-surface-variant">
            From professional websites and online stores to booking systems,
            local SEO, redesigns, and business dashboards, we build digital
            solutions around your business needs.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {Object.entries(services).map(([slug, service]) => {
            const Icon =
              icons[slug as keyof typeof icons] ?? Globe;

            return (
              <article
                key={slug}
                className="group flex h-full flex-col rounded-shape-md border border-outline-variant bg-surface-container-lowest p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
              >

                {/* ICON */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container">
                  <Icon className="h-7 w-7 text-on-primary-container" />
                </div>

                {/* SERVICE LABEL */}
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  {service.serviceLabel || "DIGITAL SERVICE"}
                </p>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-on-background">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 leading-relaxed text-on-surface-variant">
                  {service.heroDescription || service.heroTitle}
                </p>

                {/* TRUST CHIPS */}
                {service.trustChips &&
                  service.trustChips.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.trustChips.slice(0, 3).map((chip) => (
                        <span
                          key={chip}
                          className="rounded-shape-full border border-outline-variant bg-surface px-3 py-1 text-xs font-medium text-on-surface-variant"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}

                {/* WHAT YOU GET */}
                {service.whatYouGet?.points &&
                  service.whatYouGet.points.length > 0 && (
                    <div className="mt-6">

                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                        {service.whatYouGet.label || "WHAT YOU GET"}
                      </p>

                      <ul className="space-y-2">
                        {service.whatYouGet.points
                          .slice(0, 4)
                          .map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-sm text-on-surface-variant"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                              <span>{point}</span>
                            </li>
                          ))}
                      </ul>

                    </div>
                  )}

                {/* CTA */}
                <div className="mt-auto pt-7">
                  <Link
                    href={`/services/${slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-shape-md bg-primary-container px-5 py-3 text-sm font-semibold text-on-primary-container transition-colors hover:bg-primary hover:text-on-primary"
                  >
                    Learn More

                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}