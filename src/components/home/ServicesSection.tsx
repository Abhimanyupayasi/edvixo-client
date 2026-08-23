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

import serviceCards from "@/data/serviceCards.json";

/* =========================================================
   MAIN SERVICES SHOWN ON /services

   IMPORTANT:
   These are the six existing cards.

   Their content comes from:
   src/data/serviceCards.json

   Their destination routes point to the five main
   service categories.
========================================================= */

const serviceOrder = [
  "business-website",
  "online-store",
  "online-booking-system",
  "local-seo-google-presence",
  "website-redesign-speed-fix",
  "business-dashboard",
] as const;

/* =========================================================
   ICONS
========================================================= */

const icons = {
  "business-website": Globe,
  "online-store": ShoppingCart,
  "online-booking-system": CalendarDays,
  "local-seo-google-presence": MapPin,
  "website-redesign-speed-fix": Zap,
  "business-dashboard": BarChart2,
} as const;

/* =========================================================
   COMPONENT
========================================================= */

export function ServicesSection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            WHAT WE BUILD
          </p>

          <h2 className="mb-4 max-w-lg text-3xl font-bold leading-tight text-on-background md:text-headline-large">
            Digital Solutions Built for Growth
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-on-surface-variant md:text-body-large">
            Every business has unique needs. We design and build tailored
            digital systems that help teams move faster, convert better, and
            scale with confidence.
          </p>
        </div>

        {/* =====================================================
            SIX MAIN SERVICE CARDS
        ===================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {serviceOrder.map((slug) => {
            const service = serviceCards[slug];

            /*
             * Safety check.
             * If a card is missing from serviceCards.json,
             * don't break the complete page.
             */

            if (!service) {
              return null;
            }

            const Icon = icons[slug];

            return (
              <article
                key={slug}
                className="
                  group
                  relative
                  flex
                  flex-col
                  gap-6
                  overflow-hidden
                  rounded-2xl
                  border
                  border-outline-variant
                  bg-surface-container-lowest
                  p-5
                  shadow-sm

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-2
                  hover:border-primary/50
                  hover:shadow-xl

                  md:p-6
                  lg:p-8
                "
              >

                {/* =================================================
                    SUBTLE HOVER GLOW
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-primary/10
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    ICON + TITLE
                ================================================= */}

                <div className="relative flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-primary-container

                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <Icon
                      className="
                        h-7
                        w-7
                        text-on-primary-container
                      "
                    />
                  </div>

                  <h3
                    className="
                      pt-2
                      text-headline-small
                      font-semibold
                      leading-tight
                      text-on-background
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    relative
                    text-body-medium
                    leading-relaxed
                    text-on-surface-variant
                  "
                >
                  {service.description}
                </p>

                {/* =================================================
                    WHO IT'S FOR
                ================================================= */}

                <div className="relative">

                  <p
                    className="
                      mb-2
                      text-label-medium
                      text-on-surface-variant
                    "
                  >
                    Who it&apos;s for:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.whoItsFor.map((who) => (
                      <span
                        key={who}
                        className="
                          inline-flex
                          rounded-full
                          bg-secondary-container
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-on-secondary-container
                        "
                      >
                        {who}
                      </span>
                    ))}
                  </div>

                </div>

                {/* =================================================
                    WHAT YOU GET
                ================================================= */}

                <ul className="relative space-y-2">

                  {service.whatYouGet.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-2
                      "
                    >
                      <CheckCircle2
                        className="
                          mt-0.5
                          h-4
                          w-4
                          shrink-0
                          text-primary
                        "
                      />

                      <span
                        className="
                          text-body-medium
                          leading-relaxed
                          text-on-surface-variant
                        "
                      >
                        {item}
                      </span>
                    </li>
                  ))}

                </ul>

                {/* =================================================
                    PRICING / RESPONSE
                ================================================= */}

                <div
                  className="
                    relative
                    mt-auto
                    flex
                    items-center
                    justify-between
                    gap-3
                    rounded-xl
                    bg-surface-container
                    px-4
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-medium
                      text-on-surface-variant
                    "
                  >
                    {service.startingFrom}
                  </span>

                  <span
                    className="
                      text-right
                      text-xs
                      text-on-surface-variant
                    "
                  >
                    {service.responseTime}
                  </span>
                </div>

                {/* =================================================
                    LEARN MORE

                    IMPORTANT:
                    Route comes from serviceCards.json.
                    This does NOT create the old six URLs.
                ================================================= */}

                <Link
                  href={service.route}
                  title={`${service.title} - Services by Edvixo`}
                  className="
                    relative
                    block
                    w-full
                    rounded-xl
                    bg-primary-container
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    text-on-primary-container

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-primary
                    hover:text-on-primary
                    hover:shadow-lg

                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary
                    focus:ring-offset-2
                  "
                >
                  Learn More →
                </Link>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}