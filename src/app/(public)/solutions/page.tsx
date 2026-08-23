import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Settings,
  Sparkles,
  Workflow,
} from "lucide-react";

import solutions from "@/data/solutions.json";

export const metadata: Metadata = {
  title: "Solutions - Edvixo Digital Solutions",
  description:
    "Explore Edvixo digital solutions including dedicated developers, startup product development, business automation, cloud and DevOps, maintenance, and digital transformation.",
};

const icons = {
  "hire-dedicated-developers": BriefcaseBusiness,
  "startup-product-development": Code2,
  "business-automation": Bot,
  "cloud-devops-solutions": Cloud,
  "maintenance-support": Settings,
  "digital-transformation": Workflow,
} as const;

const accentColors = [
  {
    icon: "text-[#ff8b2c]",
    glow: "bg-[#ff8b2c]/10",
    border: "hover:border-[#ff8b2c]/40",
    shadow: "hover:shadow-[0_20px_60px_rgba(255,139,44,0.12)]",
    line: "bg-[#ff8b2c]",
  },
  {
    icon: "text-cyan-400",
    glow: "bg-cyan-400/10",
    border: "hover:border-cyan-400/40",
    shadow: "hover:shadow-[0_20px_60px_rgba(34,211,238,0.10)]",
    line: "bg-cyan-400",
  },
  {
    icon: "text-violet-400",
    glow: "bg-violet-400/10",
    border: "hover:border-violet-400/40",
    shadow: "hover:shadow-[0_20px_60px_rgba(167,139,250,0.10)]",
    line: "bg-violet-400",
  },
  {
    icon: "text-emerald-400",
    glow: "bg-emerald-400/10",
    border: "hover:border-emerald-400/40",
    shadow: "hover:shadow-[0_20px_60px_rgba(52,211,153,0.10)]",
    line: "bg-emerald-400",
  },
  {
    icon: "text-pink-400",
    glow: "bg-pink-400/10",
    border: "hover:border-pink-400/40",
    shadow: "hover:shadow-[0_20px_60px_rgba(244,114,182,0.10)]",
    line: "bg-pink-400",
  },
  {
    icon: "text-amber-400",
    glow: "bg-amber-400/10",
    border: "hover:border-amber-400/40",
    shadow: "hover:shadow-[0_20px_60px_rgba(251,191,36,0.10)]",
    line: "bg-amber-400",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-on-background">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-surface-container-low py-20 md:py-28">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[110px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[700px] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-shape-full border border-outline-variant bg-secondary-container px-4 py-2 text-sm font-semibold text-on-secondary-container shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />

              <span>Digital Solutions</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Solutions Built Around
              <span className="block text-primary">
                Your Business
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">
              From dedicated development teams and startup products to
              automation, cloud infrastructure, and digital transformation,
              we build practical technology solutions for growing businesses.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-shape-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary shadow-md transition-all duration-300 hover:-translate-y-1 hover:opacity-95 hover:shadow-xl"
              >
                Discuss Your Project

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-shape-full border border-outline-variant bg-surface px-6 py-3.5 text-sm font-semibold text-on-background transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container hover:shadow-md"
              >
                View Our Work

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              What We Offer
            </p>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Digital Solutions for Real Business Needs
            </h2>

            <p className="mt-4 leading-7 text-on-surface-variant">
              Choose a solution based on your current business challenge.
              Each solution can be customised according to your requirements.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(solutions).map(
              ([slug, solution], index) => {
                const Icon =
                  icons[slug as keyof typeof icons] ?? Code2;

                const accent =
                  accentColors[index % accentColors.length];

                return (
                  <Link
                    key={slug}
                    href={`/solutions/${slug}`}
                    className={`
                      group relative flex min-h-[390px]
                      flex-col overflow-hidden
                      rounded-3xl
                      border border-outline-variant
                      bg-surface
                      p-6
                      transition-all duration-500
                      hover:-translate-y-2
                      ${accent.border}
                      ${accent.shadow}
                      md:p-7
                    `}
                  >
                    {/* Top glow */}
                    <div
                      className={`
                        pointer-events-none
                        absolute -right-16 -top-16
                        h-40 w-40
                        rounded-full
                        ${accent.glow}
                        opacity-0
                        blur-3xl
                        transition-all duration-500
                        group-hover:scale-150
                        group-hover:opacity-100
                      `}
                    />

                    {/* Number */}
                    <div className="absolute right-6 top-6 text-xs font-bold tracking-[0.2em] text-on-surface-variant/40">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}
                    <div
                      className={`
                        relative
                        mb-6
                        flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        bg-surface-container
                        transition-all duration-500
                        group-hover:rotate-6
                        group-hover:scale-110
                        ${accent.icon}
                      `}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Accent line */}
                    <div
                      className={`
                        relative
                        mb-5
                        h-1
                        w-10
                        rounded-full
                        ${accent.line}
                        transition-all duration-500
                        group-hover:w-20
                      `}
                    />

                    {/* Title */}
                    <h3 className="relative text-xl font-black tracking-tight">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="relative mt-3 leading-7 text-on-surface-variant">
                      {solution.heroDescription}
                    </p>

                    {/* Who it's for */}
                    <div className="relative mt-5">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Who It&apos;s For
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {solution.whoItsFor
                          .slice(0, 3)
                          .map((item) => (
                            <span
                              key={item}
                              className="rounded-shape-full bg-secondary-container px-2.5 py-1 text-[11px] font-medium text-on-secondary-container transition-colors duration-300 group-hover:bg-secondary-container/80"
                            >
                              {item}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="relative mt-5">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                        Includes
                      </p>

                      <ul className="space-y-1.5">
                        {solution.features
                          .slice(0, 3)
                          .map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-xs text-on-surface-variant"
                            >
                              <CheckCircle2
                                className={`
                                  mt-0.5
                                  h-3.5 w-3.5
                                  shrink-0
                                  ${accent.icon}
                                `}
                              />

                              <span>{feature}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="relative mt-auto pt-7">
                      <div
                        className={`
                          inline-flex
                          items-center gap-2
                          text-sm font-bold
                          ${accent.icon}
                        `}
                      >
                        Explore Solution

                        <ArrowRight
                          className="
                            h-4 w-4
                            transition-transform
                            duration-300
                            group-hover:translate-x-2
                          "
                        />
                      </div>
                    </div>
                  </Link>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-primary py-20 md:py-24">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Sparkles className="mx-auto h-8 w-8 text-white/80" />

          <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
            Not Sure Which Solution You Need?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-primary-container">
            Tell us about your business challenge and we can help identify
            the right digital approach.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-shape-full bg-white px-7 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Get a Free Consultation

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}