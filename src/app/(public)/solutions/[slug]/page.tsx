import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Layers3,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import solutions from "@/data/solutions.json";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import {
  getBreadcrumbSchema,
  getFAQSchema,
} from "@/lib/seo/schemas";

type SolutionSlug = keyof typeof solutions;

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({
    slug,
  }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const solution = solutions[slug as SolutionSlug];

  if (!solution) {
    return {
      title: "Solution Not Found - Edvixo",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

 return {
  title: `${solution.title} Solutions - Edvixo`,
  description: solution.heroDescription,
  alternates: {
    canonical: `${SITE_URL}/solutions/${slug}`,
  },
};
}

/* =========================================================
   PAGE
========================================================= */

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const solution = solutions[slug as SolutionSlug];
if (!solution) {
  notFound();
}

return (
  <>
    <JsonLd
      data={getBreadcrumbSchema([
        {
          name: "Home",
          url: SITE_URL,
        },
        {
          name: "Solutions",
          url: `${SITE_URL}/solutions`,
        },
        {
          name: solution.title,
          url: `${SITE_URL}/solutions/${slug}`,
        },
      ])}
    />

    <JsonLd data={getFAQSchema(solution.faqs)} />

    <main className="min-h-screen overflow-hidden bg-background text-on-background">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-surface-container-low py-20 md:py-28 lg:py-32">

        {/* Ambient background glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-primary/10
            blur-[130px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-primary/10
            blur-[150px]
          "
        />

        {/* Grid effect */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          {/* Back button */}

          <Link
            href="/solutions"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-outline-variant
              bg-surface/70
              px-4
              py-2
              text-sm
              font-medium
              text-on-surface-variant
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-x-1
              hover:border-primary/50
              hover:text-primary
            "
          >
            <ArrowLeft
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            All Solutions
          </Link>

          {/* Hero content */}

          <div className="mx-auto mt-14 max-w-5xl text-center">

            {/* Label */}

            <div
              className="
                mx-auto
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-primary/30
                bg-primary/10
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-primary
                shadow-[0_0_30px_rgba(255,139,44,0.08)]
              "
            >
              <Sparkles className="h-4 w-4" />

              {solution.title}
            </div>

            {/* Main heading */}

            <h1
              className="
                text-4xl
                font-black
                leading-[1.02]
                tracking-[-0.04em]
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              {solution.heroTitle}
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-7
                max-w-3xl
                text-base
                leading-8
                text-on-surface-variant
                md:text-lg
                lg:text-xl
              "
            >
              {solution.heroDescription}
            </p>

            {/* CTA buttons */}

            <div className="mt-9 flex flex-wrap justify-center gap-3">

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-on-primary
                  shadow-[0_10px_35px_rgba(255,139,44,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_45px_rgba(255,139,44,0.30)]
                "
              >
                {solution.finalCta}

                <ArrowRight
                  className="
                    h-4
                    w-4
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
                  gap-2
                  rounded-full
                  border
                  border-outline-variant
                  bg-surface/60
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:bg-surface-container
                "
              >
                View Our Work
              </Link>

            </div>
          </div>

          {/* Hero stats */}

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">

            {[
              {
                icon: Target,
                title: "Business Focused",
                text: "Built around real goals",
              },
              {
                icon: Layers3,
                title: "Scalable",
                text: "Designed to grow with you",
              },
              {
                icon: Rocket,
                title: "Practical",
                text: "Focused on useful outcomes",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-outline-variant
                    bg-surface/60
                    p-5
                    text-left
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/30
                    hover:bg-surface
                  "
                >
                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-primary/10
                      "
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-xs text-on-surface-variant">
                        {item.text}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          WHO WE HELP
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Heading */}

            <div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                WHO WE HELP
              </p>

              <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                Built for Businesses
                <span className="block text-primary">
                  Like Yours
                </span>
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-on-surface-variant">
                Our {solution.title.toLowerCase()} solutions are designed
                around the needs of teams that want practical technology
                without unnecessary complexity.
              </p>

            </div>

            {/* Cards */}

            <div className="grid gap-3 sm:grid-cols-2">

              {solution.whoItsFor.map((item, index) => (
                <div
                  key={item}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-outline-variant
                    bg-surface
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-primary/40
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  "
                >

                  <span className="absolute right-5 top-5 text-xs font-bold text-on-surface-variant/25">
                    0{index + 1}
                  </span>

                  <div
                    className="
                      mb-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/10
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="font-bold">
                    {item}
                  </h3>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PROBLEMS
      ===================================================== */}

      <section className="bg-surface-container-low py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left */}

            <div className="lg:sticky lg:top-24 lg:self-start">

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                COMMON CHALLENGES
              </p>

              <h2 className="max-w-xl text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                Problems Shouldn&apos;t
                <span className="block text-primary">
                  Slow You Down
                </span>
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-on-surface-variant">
                We help businesses replace inefficient processes and
                technology limitations with practical digital solutions.
              </p>

            </div>

            {/* Right */}

            <div className="space-y-4">

              {solution.problems.map((problem, index) => (
                <div
                  key={problem}
                  className="
                    group
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-outline-variant
                    bg-surface
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/40
                    hover:shadow-xl
                    md:p-6
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/10
                      text-sm
                      font-black
                      text-primary
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="pt-2 text-sm leading-6 text-on-surface-variant md:text-base">
                    {problem}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SOLUTIONS WE PROVIDE
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              WHAT WE BUILD
            </p>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
              Solutions for {solution.title}
            </h2>

            <p className="mt-4 leading-7 text-on-surface-variant">
              Practical solutions designed around your business
              requirements and long-term goals.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {solution.solutions.map((item, index) => (
              <div
                key={item}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-outline-variant
                  bg-surface
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-primary/40
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                "
              >

                {/* Background glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-primary/10
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative flex items-start justify-between">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary-container
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <Layers3 className="h-6 w-6 text-primary" />
                  </div>

                  <span className="text-xs font-black tracking-[0.2em] text-on-surface-variant/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <h3 className="relative mt-6 text-xl font-bold">
                  {item}
                </h3>

                <div className="relative mt-5 h-1 w-8 rounded-full bg-primary transition-all duration-500 group-hover:w-16" />

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="bg-surface-container-low py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <div className="mb-12 text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              FEATURES
            </p>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
              What We Can Deliver
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {solution.features.map((feature) => (
              <div
                key={feature}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-outline-variant
                  bg-surface
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/40
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>

                <p className="text-sm leading-6 text-on-surface-variant">
                  {feature}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                BUSINESS IMPACT
              </p>

              <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                Technology That Creates
                <span className="block text-primary">
                  Real Value
                </span>
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-on-surface-variant">
                The goal is not simply to add technology. The goal is to
                create measurable improvements in how your business operates
                and grows.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {solution.benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="
                    group
                    rounded-2xl
                    border
                    border-outline-variant
                    bg-surface-container-low
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-primary/40
                    hover:bg-surface
                    hover:shadow-xl
                  "
                >

                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-black text-on-primary">
                    {index + 1}
                  </div>

                  <p className="text-sm font-semibold leading-6">
                    {benefit}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="bg-surface-container-low py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              OUR PROCESS
            </p>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
              From Idea to
              <span className="text-primary"> Execution</span>
            </h2>

          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

            {solution.process.map((step, index) => (
              <div
                key={step}
                className="
                  group
                  relative
                  rounded-2xl
                  border
                  border-outline-variant
                  bg-surface
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/40
                  hover:shadow-xl
                "
              >

                <div className="mb-6 flex items-center justify-between">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary
                      text-sm
                      font-black
                      text-on-primary
                      shadow-lg
                    "
                  >
                    {index + 1}
                  </div>

                  <Workflow className="h-5 w-5 text-primary/30 transition-colors duration-300 group-hover:text-primary" />

                </div>

                <p className="text-sm font-semibold leading-6">
                  {step}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">

          <div className="mb-12 text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-4">

            {solution.faqs.map((faq) => (
              <details
                key={faq.question}
                className="
                  group
                  rounded-2xl
                  border
                  border-outline-variant
                  bg-surface
                  p-6
                  transition-all
                  duration-300
                  open:border-primary/40
                  open:bg-surface-container-low
                  open:shadow-xl
                "
              >

                <summary
                  className="
                    cursor-pointer
                    list-none
                    pr-8
                    text-base
                    font-bold
                    marker:hidden
                  "
                >
                  {faq.question}
                </summary>

                <p className="mt-4 max-w-3xl leading-7 text-on-surface-variant">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-primary py-20 md:py-28">

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/10
            blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <ShieldCheck className="mx-auto h-10 w-10 text-white/80" />

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
            {solution.finalCta}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-primary-container">
            Let&apos;s discuss your requirements and create a practical
            digital solution designed around your business.
          </p>

          <Link
            href="/contact"
            className="
              group
              mt-9
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-8
              py-4
              text-sm
              font-bold
              text-primary
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            Get Free Consultation

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>
      </section>

    </main>
    </>
  );
}