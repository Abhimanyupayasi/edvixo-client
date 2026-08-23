import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import services from "@/data/services.json";

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services[slug as ServiceSlug];

  if (!service) {
    return {
      title: "Service Not Found - Edvixo",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${service.title} Services - Edvixo`,
    description: service.heroDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#061827] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#ff8b2c]/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-[#ff8b2c]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

            All Services
          </Link>

          <div className="mx-auto mt-14 max-w-5xl text-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff8b2c]/30 bg-[#ff8b2c]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              <span className="h-2 w-2 rounded-full bg-[#ff8b2c] shadow-[0_0_12px_#ff8b2c]" />

              {service.serviceLabel}
            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {service.heroTitle}
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              {service.heroDescription}
            </p>

            {/* Trust chips */}

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {service.trustChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-xl"
                >
                  ✓ {chip}
                </span>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#ff8b2c] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_35px_rgba(255,139,44,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(255,139,44,0.4)]"
              >
                {service.heroCta}

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href={service.secondaryCtaLink}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-[#ff8b2c]/40 hover:bg-[#ff8b2c]/10"
              >
                {service.secondaryCta}
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO IT'S FOR
      ========================================================= */}

      <section className="relative py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              WHO WE HELP
            </p>

            <h2 className="text-3xl font-black md:text-5xl">
              Built for businesses like yours
            </h2>

            <p className="mt-4 text-slate-400">
              Flexible digital solutions designed around different business
              models, goals and customer experiences.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {service.card.whoItsFor.map((item, index) => (

              <div
                key={item}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/40 hover:bg-[#ff8b2c]/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >

                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff8b2c]/10 text-sm font-black text-[#ff8b2c] transition group-hover:bg-[#ff8b2c] group-hover:text-white">
                  0{index + 1}
                </div>

                <h3 className="font-bold">
                  {item}
                </h3>

                <div className="mt-4 h-px w-10 bg-[#ff8b2c] transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          PROBLEMS
      ========================================================= */}

      <section className="relative overflow-hidden border-y border-white/10 bg-[#081d2d] py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
                COMMON CHALLENGES
              </p>

              <h2 className="text-3xl font-black md:text-5xl">
                Problems we help you solve
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Your digital presence should remove friction, not create more
                problems. We focus on practical solutions that improve the
                customer and business experience.
              </p>

            </div>

            <div className="grid gap-4">

              {service.problems.map((problem, index) => (

                <div
                  key={problem.title}
                  className="group rounded-2xl border border-white/10 bg-[#0b2235] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#ff8b2c]/40 hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)]"
                >

                  <div className="flex gap-5">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-sm font-black text-red-400">
                      0{index + 1}
                    </div>

                    <div>

                      <h3 className="text-lg font-bold">
                        {problem.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-400">
                        {problem.body}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          WHAT YOU GET
      ========================================================= */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
                {service.whatYouGet.label}
              </p>

              <h2 className="text-3xl font-black md:text-5xl">
                {service.whatYouGet.title}
              </h2>

              <div className="mt-8 space-y-5">

                {service.whatYouGet.points.map((point) => (

                  <div
                    key={point}
                    className="flex gap-4"
                  >

                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ff8b2c]" />

                    <p className="leading-7 text-slate-300">
                      {point}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Visual card */}

            <div className="relative">

              <div className="absolute -inset-6 rounded-[2rem] bg-[#ff8b2c]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#102d45] to-[#071827] p-7 shadow-2xl md:p-10">

                <div className="mb-8 flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Edvixo
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      Digital Growth
                    </h3>
                  </div>

                  <div className="h-12 w-12 rounded-2xl bg-[#ff8b2c]/10 p-3">
                    <div className="h-full w-full rounded-xl bg-[#ff8b2c]" />
                  </div>

                </div>

                <div className="space-y-4">

                  {service.features.slice(0, 4).map((feature, index) => (

                    <div
                      key={feature.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#ff8b2c]/30"
                    >

                      <div className="flex items-center justify-between">

                        <span className="font-semibold">
                          {feature.title}
                        </span>

                        <span className="text-xs text-[#ff8b2c]">
                          0{index + 1}
                        </span>

                      </div>

                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#ff8b2c]"
                          style={{
                            width: `${65 + index * 8}%`,
                          }}
                        />
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="border-y border-white/10 bg-[#081d2d] py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              CAPABILITIES
            </p>

            <h2 className="text-3xl font-black md:text-5xl">
              Everything designed around your goals
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {service.features.map((feature, index) => (

              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b2235] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >

                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#ff8b2c]/5 blur-2xl transition group-hover:bg-[#ff8b2c]/15" />

                <div className="relative">

                  <span className="text-xs font-black text-[#ff8b2c]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {feature.body}
                  </p>

                  <div className="mt-6 h-px w-10 bg-[#ff8b2c] transition-all duration-500 group-hover:w-20" />

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="mb-14 max-w-2xl">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              OUR PROCESS
            </p>

            <h2 className="text-3xl font-black md:text-5xl">
              From idea to launch
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-5">

            {service.process.map((step) => (

              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/40 hover:bg-[#ff8b2c]/[0.04]"
              >

                <div className="text-4xl font-black text-[#ff8b2c]/30 transition group-hover:text-[#ff8b2c]/70">
                  {step.number}
                </div>

                <h3 className="mt-5 font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.body}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          INCLUSIONS
      ========================================================= */}

      <section className="border-y border-white/10 bg-[#081d2d] py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="mb-12 text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              INCLUDED
            </p>

            <h2 className="text-3xl font-black md:text-5xl">
              What comes with your project
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {service.inclusions.map((item) => (

              <div
                key={item.label}
                className="group rounded-2xl border border-white/10 bg-[#0b2235] p-6 transition duration-300 hover:border-[#ff8b2c]/40 hover:bg-[#ff8b2c]/[0.04]"
              >

                <div className="flex gap-4">

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#ff8b2c]" />

                  <div>

                    <h3 className="font-bold">
                      {item.label}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.note}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          RESULTS
      ========================================================= */}

      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-5xl px-5 md:px-8">

          <div className="grid gap-5 sm:grid-cols-3">

            {service.results.stats.map((stat) => (

              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/40"
              >

                <div className="text-4xl font-black text-[#ff8b2c] md:text-5xl">
                  {stat.stat}
                </div>

                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="border-y border-white/10 bg-[#081d2d] py-20 md:py-28">

        <div className="mx-auto max-w-4xl px-5 md:px-8">

          <div className="mb-12 text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              FAQ
            </p>

            <h2 className="text-3xl font-black md:text-5xl">
              Frequently asked questions
            </h2>

          </div>

          <div className="space-y-4">

            {service.faqs.map((faq) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-[#0b2235] p-6 transition hover:border-[#ff8b2c]/40"
              >

                <summary className="cursor-pointer list-none pr-8 font-bold">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-slate-400">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#ff8b2c] py-20 md:py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.15),transparent_30%)]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">

          <h2 className="text-3xl font-black text-white md:text-5xl">
            {service.finalCta.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/80">
            {service.finalCta.description}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black text-[#071827] transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {service.finalCta.primary}

              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={service.consultation.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
            >
              {service.finalCta.whatsapp}
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}