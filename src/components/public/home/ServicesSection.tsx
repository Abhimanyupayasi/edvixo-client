import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  CalendarDays,
  MapPin,
  Zap,
  BarChart2,
  CheckCircle2,
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

export function ServicesSection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-2">
            WHAT WE BUILD
          </p>

          <h2 className="text-3xl md:text-headline-large text-on-background mb-4 max-w-lg leading-tight font-bold">
            Digital Solutions Built for Growth
          </h2>

          <p className="text-base md:text-body-large text-on-surface-variant max-w-lg leading-relaxed">
            Every business has unique needs. We design and build tailored digital
            systems that help teams move faster, convert better, and scale with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {Object.entries(services).map(([slug, service]) => {
            const Icon = icons[slug as keyof typeof icons];

            return (
              <article
                key={slug}
                className="bg-surface-container-lowest rounded-shape-md shadow-sm p-5 md:p-6 lg:p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-outline-variant"
              >

                {/* Icon + Title */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-on-primary-container" />
                  </div>

                  <h3 className="text-headline-small font-semibold text-on-background pt-2">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-body-medium text-on-surface-variant leading-relaxed">
                  {service.card.description}
                </p>

                {/* Who it's for */}
                <div>
                  <p className="text-label-medium text-on-surface-variant mb-2">
                    Who it&apos;s for:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.card.whoItsFor.map((who) => (
                      <span
                        key={who}
                        className="inline-flex px-3 py-1 rounded-shape-full bg-secondary-container text-on-secondary-container text-xs font-medium"
                      >
                        {who}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What you get */}
                <ul className="space-y-2">
                  {service.card.whatYouGet.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />

                      <span className="text-body-medium text-on-surface-variant">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-center justify-between bg-surface-container rounded-shape-md px-4 py-3 mt-auto">
                  <span className="text-xs text-on-surface-variant">
                    {service.card.startingFrom}
                  </span>

                  <span className="text-xs text-on-surface-variant">
                    Response in 24 hours
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={`/services/${slug}`}
                  title={`${service.title} - Web development services by Sapnendra Jaiswal`}
                >
                  <button
                    className="w-full py-3 rounded-shape-md bg-primary-container text-on-primary-container font-semibold text-sm text-center hover:bg-primary hover:text-on-primary transition-colors duration-200 cursor-pointer"
                  >
                    Learn More &rarr;
                  </button>
                </Link>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}