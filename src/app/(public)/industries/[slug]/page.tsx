import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Target,
  Zap,
  ShieldCheck,
  Layers3,
} from "lucide-react";

import industries from "@/data/industries.json";

type IndustrySlug = keyof typeof industries;

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({
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

  const industry = industries[slug as IndustrySlug];

  if (!industry) {
    return {
      title: "Industry Not Found | Edvixo",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${industry.title} Solutions | Edvixo`,
    description: industry.heroDescription,
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const industry = industries[slug as IndustrySlug];

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#061827] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden">

        {/* Background gradient */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,139,44,0.10),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(34,211,238,0.08),transparent_30%),linear-gradient(180deg,#061827_0%,#071b2d_100%)]" />

        {/* Large orange glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#ff8b2c]/10
            blur-[140px]
            animate-[pulse_7s_ease-in-out_infinite]
          "
        />

        {/* Cyan glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-400/10
            blur-[130px]
            animate-[pulse_9s_ease-in-out_infinite]
          "
        />

        {/* Decorative grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        <div className="relative mx-auto max-w-[1600px] px-5 pb-24 pt-14 md:px-8 md:pb-32 md:pt-20 lg:px-12 xl:px-16">

          {/* Back link */}

          <Link
            href="/industries"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-xs
              font-semibold
              text-slate-400
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-x-1
              hover:border-[#ff8b2c]/30
              hover:bg-white/[0.06]
              hover:text-white
            "
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Industries
          </Link>

          {/* Hero */}

          <div className="mx-auto mt-14 max-w-5xl text-center">

            {/* Badge */}

            <div
              className="
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#ff8b2c]/25
                bg-[#ff8b2c]/10
                px-4
                py-2
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#ff9f5c]
                shadow-[0_0_35px_rgba(255,139,44,0.08)]
                backdrop-blur-md
              "
            >
              <Sparkles className="h-3.5 w-3.5" />

              {industry.title}
            </div>

            {/* Heading */}

            <h1
              className="
                mt-7
                text-4xl
                font-black
                leading-[1.04]
                tracking-[-0.035em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[82px]
              "
            >
              {industry.heroTitle}
            </h1>

            {/* Orange accent */}

            <div
              className="
                mx-auto
                mt-7
                h-1
                w-20
                rounded-full
                bg-gradient-to-r
                from-[#ff8b2c]
                via-[#ff9d52]
                to-cyan-400
                shadow-[0_0_25px_rgba(255,139,44,0.35)]
              "
            />

            {/* Description */}

            <p
              className="
                mx-auto
                mt-7
                max-w-3xl
                text-sm
                leading-7
                text-slate-400
                sm:text-base
                md:text-lg
                md:leading-8
              "
            >
              {industry.heroDescription}
            </p>

            {/* CTA buttons */}

            <div
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
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
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_40px_rgba(255,139,44,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff9b4b]
                  hover:shadow-[0_20px_50px_rgba(255,139,44,0.35)]
                "
              >
                {industry.cta}

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
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-200
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/5
                "
              >
                Explore Our Work
              </Link>
            </div>

          </div>

          {/* Hero floating stats */}

          <div
            className="
              mx-auto
              mt-16
              grid
              max-w-4xl
              grid-cols-2
              gap-3
              sm:grid-cols-4
            "
          >

            {[
              {
                number: "01",
                label: "Strategy",
              },
              {
                number: "02",
                label: "Design",
              },
              {
                number: "03",
                label: "Development",
              },
              {
                number: "04",
                label: "Growth",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  px-4
                  py-4
                  text-center
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#ff8b2c]/30
                  hover:bg-white/[0.05]
                "
              >
                <p className="text-xs font-black text-[#ff8b2c]">
                  {item.number}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE HELP
      ===================================================== */}

      <section className="relative px-5 py-20 md:px-8 md:py-24 lg:px-12 xl:px-16">

        <div className="mx-auto max-w-[1500px]">

          {/* Heading */}

          <div className="mb-10 max-w-2xl">

            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#ff8b2c]">
              <Building2 className="h-4 w-4" />
              Who We Help
            </div>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                tracking-tight
                md:text-5xl
              "
            >
              Built for businesses
              <span className="text-[#ff8b2c]"> like yours.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
              Our digital solutions adapt to the needs of different
              businesses, teams and growth stages.
            </p>

          </div>

          {/* Cards */}

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5
            "
          >
            {industry.whoItsFor.map((item, index) => (
              <div
                key={item}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-[#0d263d]
                  to-[#091d30]
                  p-5
                  shadow-[0_10px_35px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#ff8b2c]/40
                  hover:shadow-[0_20px_45px_rgba(0,0,0,0.28)]
                "
              >

                {/* Top glow */}

                <div
                  className="
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-[#ff8b2c]/10
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:bg-[#ff8b2c]/25
                  "
                />

                {/* Number */}

                <div
                  className="
                    relative
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#ff8b2c]/20
                    bg-[#ff8b2c]/10
                    text-xs
                    font-black
                    text-[#ff8b2c]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-[#ff8b2c]
                    group-hover:text-white
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="relative mt-5 text-sm font-bold text-white">
                  {item}
                </h3>

                <div className="mt-4 h-px w-8 bg-[#ff8b2c]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[#ff8b2c]" />

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Digital experiences designed around real business needs.
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CHALLENGES
      ===================================================== */}

      <section className="relative border-y border-white/10 bg-[#081d30] px-5 py-20 md:px-8 md:py-24 lg:px-12 xl:px-16">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            {/* Left */}

            <div className="lg:sticky lg:top-28 lg:self-start">

              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-400/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-red-300">
                <Target className="h-3.5 w-3.5" />
                Common Challenges
              </div>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-black
                  leading-tight
                  md:text-5xl
                "
              >
                We understand
                <span className="block text-[#ff8b2c]">
                  the problem.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-slate-400
                "
              >
                Before building a solution, we understand where your
                business is losing time, visibility, customers or growth.
              </p>

            </div>

            {/* Right */}

            <div className="grid gap-3 sm:grid-cols-2">

              {industry.problems.map((problem, index) => (
                <div
                  key={problem}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#0b2135]
                    p-5
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    hover:border-red-400/25
                    hover:bg-[#0d253b]
                    hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)]
                  "
                >

                  {/* Animated bottom line */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-gradient-to-r
                      from-red-400
                      to-[#ff8b2c]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  <div className="flex items-start gap-4">

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-red-400/10
                        text-xs
                        font-black
                        text-red-300
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:bg-[#ff8b2c]
                        group-hover:text-white
                      "
                    >
                      {index + 1}
                    </span>

                    <p className="text-sm leading-6 text-slate-300">
                      {problem}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="relative px-5 py-20 md:px-8 md:py-24 lg:px-12 xl:px-16">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#ff8b2c]">
                <Zap className="h-4 w-4" />
                What We Build
              </div>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-black
                  tracking-tight
                  md:text-5xl
                "
              >
                Solutions that
                <span className="text-[#ff8b2c]"> move business forward.</span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Practical digital solutions designed to solve real
              business challenges and create measurable value.
            </p>

          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {industry.solutions.map((solution, index) => (
              <div
                key={solution}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-[#0d263d]
                  via-[#0b2135]
                  to-[#081b2c]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#ff8b2c]/45
                  hover:shadow-[0_25px_55px_rgba(0,0,0,0.3)]
                "
              >

                {/* Gradient hover glow */}

                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#ff8b2c]/5
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:bg-[#ff8b2c]/20
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-gradient-to-r
                    from-[#ff8b2c]
                    to-cyan-400
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Icon */}

                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
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
                  <Layers3 className="h-5 w-5" />
                </div>

                {/* Number */}

                <span
                  className="
                    absolute
                    right-5
                    top-5
                    text-[10px]
                    font-black
                    tracking-[0.15em]
                    text-slate-600
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                    relative
                    mt-6
                    text-base
                    font-bold
                    leading-6
                    text-white
                  "
                >
                  {solution}
                </h3>

                <p
                  className="
                    relative
                    mt-3
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  Designed to create a smoother, faster and more
                  scalable digital experience.
                </p>

                <div
                  className="
                    relative
                    mt-5
                    flex
                    items-center
                    gap-1.5
                    text-xs
                    font-bold
                    text-[#ff8b2c]
                  "
                >
                  Explore solution

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1.5
                    "
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="relative border-y border-white/10 bg-[#081d30] px-5 py-20 md:px-8 md:py-24 lg:px-12 xl:px-16">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-10 max-w-2xl">

            <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-cyan-400">
              <ShieldCheck className="h-4 w-4" />
              Our Capabilities
            </div>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                md:text-5xl
              "
            >
              Built with the details
              <span className="text-cyan-400"> that matter.</span>
            </h2>

          </div>

          <div
            className="
              grid
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
          "
          >
            {industry.features.map((feature, index) => (
              <div
                key={feature}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  px-5
                  py-4
                  transition-all
                  duration-400
                  hover:-translate-y-1
                  hover:border-cyan-400/25
                  hover:bg-cyan-400/[0.04]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                "
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-400/10
                    bg-cyan-400/5
                    text-cyan-400
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-cyan-400
                    group-hover:text-[#061827]
                  "
                >
                  <CheckCircle2 className="h-4 w-4" />
                </div>

                <div className="min-w-0">

                  <span className="text-[9px] font-black tracking-[0.15em] text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-0.5 text-sm font-semibold leading-5 text-slate-300">
                    {feature}
                  </p>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 py-20 md:px-8 md:py-28 lg:px-12">

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
            from-[#102d46]
            via-[#0b2135]
            to-[#071827]
            px-6
            py-14
            text-center
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            md:px-12
            md:py-20
          "
        >

          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-100px]
              h-[280px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-[#ff8b2c]/10
              blur-[100px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-100px]
              right-[-50px]
              h-[250px]
              w-[250px]
              rounded-full
              bg-cyan-400/5
              blur-[90px]
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
                border
                border-[#ff8b2c]/20
                bg-[#ff8b2c]/10
                text-[#ff8b2c]
                shadow-[0_0_35px_rgba(255,139,44,0.08)]
              "
            >
              <Sparkles className="h-6 w-6" />
            </div>

            <p className="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-[#ff8b2c]">
              Ready to build?
            </p>

            <h2
              className="
                mx-auto
                mt-3
                max-w-3xl
                text-3xl
                font-black
                tracking-tight
                md:text-5xl
              "
            >
              {industry.cta}
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-slate-400
                md:text-base
              "
            >
              Let&apos;s discuss your goals and build a digital
              solution that fits your business, customers and
              future growth.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="
                  group
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
                  shadow-[0_15px_40px_rgba(255,139,44,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff9b4b]
                  hover:shadow-[0_20px_50px_rgba(255,139,44,0.35)]
                "
              >
                Start a Conversation

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
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-cyan-400/25
                  hover:bg-cyan-400/5
                  hover:text-white
                "
              >
                View Portfolio
              </Link>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}