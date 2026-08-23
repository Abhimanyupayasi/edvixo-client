"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Palette,
  Smartphone,
  ShoppingCart,
  Wrench,
} from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
};

type ServiceCategoryPageProps = {
  category: string;
  title: string;
  description: string;
  icon: "web" | "app" | "ecom" | "design" | "misc";
  services: ServiceItem[];
};

const iconMap = {
  web: Code2,
  app: Smartphone,
  ecom: ShoppingCart,
  design: Palette,
  misc: Wrench,
};

export function ServiceCategoryPage({
  category,
  title,
  description,
  icon,
  services,
}: ServiceCategoryPageProps) {
  const Icon = iconMap[icon];

  return (
    <main className="min-h-screen bg-[#061726] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden">

        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#ff8b2c]/10
            blur-[120px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-4
            py-20
            sm:px-6
            sm:py-24
            lg:px-8
            lg:py-32
          "
        >

          {/* Breadcrumb */}

          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/services"
              className="transition-colors hover:text-white"
            >
              Services
            </Link>

            <span>/</span>

            <span className="text-[#ff8b2c]">
              {category}
            </span>
          </div>

          {/* Icon */}

          <div
            className="
              mb-7
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-[#ff8b2c]/30
              bg-[#ff8b2c]/10
              shadow-[0_0_40px_rgba(255,139,44,0.12)]
            "
          >
            <Icon className="h-8 w-8 text-[#ff8b2c]" />
          </div>

          {/* Small heading */}

          <p
            className="
              mb-4
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#ff8b2c]
            "
          >
            {category}
          </p>

          {/* Main heading */}

          <h1
            className="
              max-w-4xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {title}
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-3xl
              text-base
              leading-7
              text-slate-300
              sm:text-lg
              sm:leading-8
              lg:text-xl
            "
          >
            {description}
          </p>

          {/* CTA */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#ff8b2c]
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-[0_12px_30px_rgba(255,139,44,0.25)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#ff9b41]
              "
            >
              Get Free Consultation

              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/portfolio"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-7
                py-3.5
                text-sm
                font-bold
                text-slate-200
                transition-all
                duration-300
                hover:bg-white/[0.08]
                hover:text-white
              "
            >
              View Our Work
            </Link>

          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="border-t border-white/5 bg-[#071a2d]">

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-16
            sm:px-6
            sm:py-20
            lg:px-8
            lg:py-24
          "
        >

          {/* Section heading */}

          <div className="max-w-2xl">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#ff8b2c]
              "
            >
              What We Offer
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                tracking-tight
                sm:text-4xl
              "
            >
              Explore {category} Services
            </h2>

            <p className="mt-4 text-slate-400">
              Choose the service that matches your business requirement.
            </p>

          </div>

          {/* Service cards */}

          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#091e32]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#ff8b2c]/40
                  hover:bg-[#0b243b]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  sm:p-7
                "
              >

                {/* Number */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    text-xs
                    font-bold
                    text-slate-600
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Orange line */}

                <div
                  className="
                    mb-6
                    h-1
                    w-10
                    rounded-full
                    bg-[#ff8b2c]
                    transition-all
                    duration-300
                    group-hover:w-16
                  "
                />

                <h3
                  className="
                    pr-10
                    text-lg
                    font-bold
                    text-white
                    transition-colors
                    group-hover:text-[#ff8b2c]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-400
                  "
                >
                  {service.description}
                </p>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#ff8b2c]
                  "
                >
                  Explore Service

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          WHY EDVIXO
      ========================================================= */}

      <section className="bg-[#061726]">

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-16
            sm:px-6
            sm:py-20
            lg:px-8
            lg:py-24
          "
        >

          <div
            className="
              grid
              gap-10
              lg:grid-cols-2
              lg:items-center
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#ff8b2c]
                "
              >
                Why Edvixo
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-tight
                  sm:text-4xl
                "
              >
                Built around your business goals
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  leading-7
                  text-slate-400
                "
              >
                We focus on practical digital solutions that are
                designed to look professional, perform reliably,
                and help businesses grow.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {[
                "Responsive across devices",
                "Modern technology",
                "Performance focused",
                "Conversion focused",
                "SEO friendly structure",
                "Ongoing technical support",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                  "
                >
                  <CheckCircle2
                    className="
                      h-5
                      w-5
                      shrink-0
                      text-[#ff8b2c]
                    "
                  />

                  <span className="text-sm text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="bg-[#071a2d]">

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-16
            sm:px-6
            lg:px-8
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[#ff8b2c]/20
              bg-gradient-to-br
              from-[#10283d]
              to-[#071a2d]
              px-6
              py-12
              text-center
              sm:px-10
              sm:py-16
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-40
                w-72
                -translate-x-1/2
                rounded-full
                bg-[#ff8b2c]/10
                blur-[80px]
              "
            />

            <div className="relative">

              <p className="text-sm font-semibold text-[#ff8b2c]">
                Ready to get started?
              </p>

              <h2
                className="
                  mx-auto
                  mt-3
                  max-w-3xl
                  text-3xl
                  font-black
                  sm:text-4xl
                "
              >
                Let&apos;s build something that moves your business forward.
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-6
                  text-slate-400
                  sm:text-base
                "
              >
                Tell us what you need and our team will help
                you choose the right solution.
              </p>

              <Link
                href="/contact"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#ff8b2c]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(255,139,44,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#ff9b41]
                "
              >
                Start a Project

                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}