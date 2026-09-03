import type { Metadata } from "next";
import Link from "next/link";

import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";

import {
  getBreadcrumbSchema,
} from "@/lib/seo/schemas";

import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  Layers3,
  Sparkles,
  CheckCircle2,
  Rocket,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Edvixo delivers digital solutions for healthcare, education, retail, real estate and businesses across industries.",
  alternates: {
    canonical: `${SITE_URL}/industries`,
  },
};

const industries = [
  {
    title: "Healthcare",
    slug: "healthcare",
    description:
      "Digital solutions that help healthcare organizations deliver better experiences and operate more efficiently.",
    icon: HeartPulse,
    number: "01",
    tags: ["Healthcare Platforms", "Web Solutions", "Digital Experiences"],
  },
  {
    title: "Education",
    slug: "education",
    description:
      "Modern digital platforms that connect students, educators and education businesses.",
    icon: GraduationCap,
    number: "02",
    tags: ["Education Platforms", "Learning Systems", "Web Applications"],
  },
  {
    title: "Retail",
    slug: "retail",
    description:
      "Digital experiences designed to help retail businesses attract customers and grow online.",
    icon: TrendingUp,
    number: "03",
    tags: ["E-Commerce", "Retail Platforms", "Customer Experience"],
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description:
      "Modern websites and digital platforms that help property businesses showcase and manage their services.",
    icon: Home,
    number: "04",
    tags: ["Property Platforms", "Listing Websites", "Lead Generation"],
  },
  {
    title: "Other Industries",
    slug: "other",
    description:
      "Flexible technology solutions for businesses with unique digital requirements.",
    icon: Layers3,
    number: "05",
    tags: ["Custom Software", "Automation", "Digital Solutions"],
  },
];

const benefits = [
  {
    title: "Industry-focused thinking",
    description:
      "We understand that every industry has different users, workflows and business requirements.",
  },
  {
    title: "Practical technology",
    description:
      "Our solutions focus on solving real business problems instead of adding unnecessary complexity.",
  },
  {
    title: "Scalable solutions",
    description:
      "We build digital products that can grow as your business, users and requirements grow.",
  },
  {
    title: "Business-first approach",
    description:
      "Technology decisions are aligned with your business goals, customers and long-term growth.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          {
            name: "Home",
            url: SITE_URL,
          },
          {
            name: "Industries",
            url: `${SITE_URL}/industries`,
          },
        ])}
      />

      <main className="min-h-screen overflow-hidden bg-[#061827] text-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
        {/* Background glow */}

        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ff8b2c]/10 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#ff8b2c]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}

            <div>
              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#ff8b2c]/30
                  bg-[#ff8b2c]/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-[#ffad70]
                "
              >
                <Sparkles className="h-4 w-4" />

                Industries We Serve
              </div>

              <h1
                className="
                  text-4xl
                  font-black
                  leading-[1.04]
                  tracking-tight
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Digital Solutions
                <span className="block text-[#ff8b2c]">
                  Built for Your Industry.
                </span>
              </h1>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-8
                  text-slate-300
                  md:text-lg
                "
              >
                Edvixo creates practical digital products and technology
                solutions tailored to the unique needs of different
                industries.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#ff8b2c]
                    px-7
                    py-4
                    font-bold
                    text-white
                    shadow-[0_14px_40px_rgba(255,139,44,0.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#ff9b4b]
                  "
                >
                  Discuss Your Industry

                  <ArrowRight
                    className="
                      h-5
                      w-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-7
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#ff8b2c]/50
                    hover:bg-white/[0.08]
                  "
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div className="relative mx-auto w-full max-w-xl">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-[#0b2135]
                  p-6
                  shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                  md:p-8
                "
              >
                {/* Decorative glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#ff8b2c]/15 blur-[70px]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                        Industries
                      </p>

                      <h2 className="mt-2 text-2xl font-black">
                        One Partner.
                        <span className="block text-[#ff8b2c]">
                          Multiple Industries.
                        </span>
                      </h2>
                    </div>

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#ff8b2c]/10
                        text-[#ff8b2c]
                      "
                    >
                      <Building2 className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Industry visual grid */}

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {industries.slice(0, 4).map((industry, index) => {
                      const Icon = industry.icon;

                      return (
                        <div
                          key={industry.title}
                          className="
                            group
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.035]
                            p-4
                            transition-all
                            duration-500
                            hover:-translate-y-1
                            hover:border-[#ff8b2c]/40
                            hover:bg-[#ff8b2c]/5
                          "
                        >
                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-[#ff8b2c]/10
                              text-[#ff8b2c]
                              transition-all
                              duration-500
                              group-hover:scale-110
                              group-hover:bg-[#ff8b2c]
                              group-hover:text-white
                            "
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          <p className="mt-3 text-sm font-bold">
                            {industry.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom card */}

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-[#ff8b2c]/20
                      bg-[#ff8b2c]/5
                      p-4
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#ff8b2c]/10
                          text-[#ff8b2c]
                        "
                      >
                        <Layers3 className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-bold">
                          Other Industries
                        </p>

                        <p className="text-xs text-slate-500">
                          Custom digital solutions
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="h-5 w-5 text-[#ff8b2c]" />
                  </div>
                </div>
              </div>

              {/* Floating orange element */}

              <div
                className="
                  absolute
                  -bottom-5
                  -left-5
                  hidden
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ff8b2c]/40
                  bg-[#061827]
                  shadow-[0_10px_40px_rgba(255,139,44,0.18)]
                  sm:flex
                "
              >
                <div className="h-3 w-3 rounded-full bg-[#ff8b2c] shadow-[0_0_20px_rgba(255,139,44,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#ff8b2c]
              "
            >
              Where We Create Impact
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Technology designed around your industry.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Every business has different challenges. We combine technology,
              design and business thinking to create solutions that fit the
              way your industry works.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-white/10
                    bg-[#0b2135]
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#ff8b2c]/50
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-40
                      w-40
                      rounded-full
                      bg-[#ff8b2c]/10
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-[#ff8b2c]/25
                    "
                  />

                  {/* Number */}

                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      text-xs
                      font-bold
                      tracking-[0.2em]
                      text-slate-600
                      transition-colors
                      duration-300
                      group-hover:text-[#ff8b2c]/60
                    "
                  >
                    {industry.number}
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#ff8b2c]/10
                      text-[#ff8b2c]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                      group-hover:bg-[#ff8b2c]
                      group-hover:text-white
                    "
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      relative
                      mt-7
                      text-2xl
                      font-black
                      transition-colors
                      duration-300
                      group-hover:text-[#ff9d52]
                    "
                  >
                    {industry.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      relative
                      mt-4
                      min-h-[84px]
                      leading-7
                      text-slate-400
                    "
                  >
                    {industry.description}
                  </p>

                  {/* Tags */}

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.035]
                          px-3
                          py-1.5
                          text-[11px]
                          font-medium
                          text-slate-400
                          transition-colors
                          duration-300
                          group-hover:border-[#ff8b2c]/20
                          group-hover:text-slate-300
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explore */}

                  <div
                    className="
                      relative
                      mt-7
                      flex
                      items-center
                      gap-2
                      font-bold
                      text-[#ff8b2c]
                    "
                  >
                    Explore Industry

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-2
                      "
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY EDVIXO
      ===================================================== */}

      <section
        className="
          border-y
          border-white/10
          bg-[#081d30]
          px-5
          py-20
          md:px-8
          md:py-24
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* LEFT */}

            <div>
              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#ff8b2c]
                "
              >
                Why Edvixo
              </p>

              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Technology that understands your business.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                We don't believe in one-size-fits-all digital products.
                Our approach starts with understanding your business,
                customers and industry before selecting the right technology.
              </p>

              <Link
                href="/about"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  font-bold
                  text-[#ff8b2c]
                "
              >
                Why choose Edvixo

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                />
              </Link>
            </div>

            {/* RIGHT */}

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    transition-all
                    duration-400
                    hover:-translate-y-1
                    hover:border-[#ff8b2c]/40
                    hover:bg-[#ff8b2c]/5
                  "
                >
                  <div className="flex items-start justify-between">
                    <CheckCircle2
                      className="
                        h-5
                        w-5
                        text-[#ff8b2c]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span className="text-xs font-bold text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 py-24 md:px-8">
        <div
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[2rem]
            border
            border-[#ff8b2c]/20
            bg-gradient-to-br
            from-[#102b43]
            via-[#0b2135]
            to-[#061827]
            p-8
            text-center
            md:p-16
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-60
              w-96
              -translate-x-1/2
              rounded-full
              bg-[#ff8b2c]/10
              blur-[100px]
            "
          />

          <div className="relative">
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#ff8b2c]/10
                text-[#ff8b2c]
              "
            >
              <Rocket className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-black md:text-5xl">
              Let's build something for your industry.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Whether you're in healthcare, education, retail, real estate
              or another industry, Edvixo can help turn your business needs
              into a practical digital solution.
            </p>

            <Link
              href="/contact"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#ff8b2c]
                px-8
                py-4
                font-bold
                text-white
                shadow-[0_14px_40px_rgba(255,139,44,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ff9b4b]
              "
            >
              Get Free Consultation

              <ArrowRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
