import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
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
    title: `${service.title} - Edvixo`,
    description:
      service.heroDescription ||
      service.heroTitle ||
      service.title,
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
    <main className="bg-background text-on-background">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          {/* BACK */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>

          <div className="mt-12 max-w-4xl">

            {/* LABEL */}
            <div className="mb-6 inline-flex rounded-shape-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary">
              {service.serviceLabel || service.title}
            </div>

            {/* TITLE */}
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {service.heroTitle || service.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              {service.heroDescription || service.title}
            </p>

            {/* TRUST CHIPS */}
            {service.trustChips &&
              service.trustChips.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {service.trustChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-shape-full border border-outline-variant bg-surface px-4 py-2 text-sm font-medium text-on-surface-variant"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 rounded-shape-full bg-primary px-7 py-3 font-semibold text-on-primary transition-opacity hover:opacity-90"
              >
                {service.heroCta || service.cta || "Get Started"}
                <ArrowRight className="h-4 w-4" />
              </Link>

              {service.secondaryCta &&
                service.secondaryCtaLink && (
                  <Link
                    href={service.secondaryCtaLink}
                    className="inline-flex items-center gap-2 rounded-shape-full border border-outline-variant bg-surface px-7 py-3 font-semibold text-on-surface transition-colors hover:bg-surface-container"
                  >
                    {service.secondaryCta}
                  </Link>
                )}

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          PROBLEMS
      ========================================================= */}
      {service.problems &&
        service.problems.length > 0 && (
          <section className="py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

              <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  THE PROBLEM
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  Problems Your Business May Be Facing
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">

                {service.problems.map((problem) => (
                  <div
                    key={problem.title}
                    className="rounded-shape-md border border-outline-variant bg-surface-container-low p-6"
                  >
                    <h3 className="text-xl font-bold">
                      {problem.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-on-surface-variant">
                      {problem.body}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </section>
        )}


      {/* =========================================================
          WHAT YOU GET
      ========================================================= */}
      {service.whatYouGet &&
        service.whatYouGet.points &&
        service.whatYouGet.points.length > 0 && (
          <section className="bg-surface-container-low py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

              <div className="mb-12 max-w-3xl">

                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  {service.whatYouGet.label || "WHAT YOU GET"}
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  {service.whatYouGet.title ||
                    "Everything You Need"}
                </h2>

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                {service.whatYouGet.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-shape-md border border-outline-variant bg-surface p-6"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm leading-relaxed text-on-surface-variant">
                      {point}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          </section>
        )}


      {/* =========================================================
          FEATURES
      ========================================================= */}
      {service.features &&
        service.features.length > 0 && (
          <section className="py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

              <div className="mb-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  FEATURES
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  What We Build
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">

                {service.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-shape-md border border-outline-variant bg-surface-container-lowest p-6"
                  >

                    <h3 className="text-xl font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-on-surface-variant">
                      {feature.body}
                    </p>

                  </div>
                ))}

              </div>

            </div>
          </section>
        )}


      {/* =========================================================
          PROCESS
      ========================================================= */}
      {service.process &&
        service.process.length > 0 && (
          <section className="bg-surface-container-low py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

              <div className="mb-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  OUR PROCESS
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  How We Work
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-5">

                {service.process.map((step, index) => (
                  <div
                    key={`${step.number}-${step.title}`}
                    className="relative rounded-shape-md border border-outline-variant bg-surface p-6"
                  >

                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">
                      {step.number || index + 1}
                    </div>

                    <h3 className="font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                      {step.body}
                    </p>

                  </div>
                ))}

              </div>

            </div>
          </section>
        )}


      {/* =========================================================
          INCLUSIONS
      ========================================================= */}
      {service.inclusions &&
        service.inclusions.length > 0 && (
          <section className="py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

              <div className="mb-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  INCLUDED
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  What&apos;s Included
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">

                {service.inclusions.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-shape-md border border-outline-variant bg-surface-container-low p-6"
                  >

                    <div className="flex items-start gap-3">

                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                      <div>
                        <h3 className="font-semibold">
                          {item.label}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                          {item.note}
                        </p>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          </section>
        )}


      {/* =========================================================
          RESULTS
      ========================================================= */}
      {service.results?.stats &&
        service.results.stats.length > 0 && (
          <section className="bg-surface-container-low py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

              <div className="mb-12 text-center">

                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  RESULTS
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  Results That Matter
                </h2>

              </div>

              <div className="grid gap-6 md:grid-cols-3">

                {service.results.stats.map((result) => (
                  <div
                    key={result.label}
                    className="rounded-shape-md border border-outline-variant bg-surface p-8 text-center"
                  >

                    <p className="text-4xl font-bold text-primary">
                      {result.stat}
                    </p>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                      {result.label}
                    </p>

                  </div>
                ))}

              </div>


            </div>
          </section>
        )}


      {/* =========================================================
          FAQ
      ========================================================= */}
      {service.faqs &&
        service.faqs.length > 0 && (
          <section className="py-20">
            <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">

              <div className="mb-12 text-center">

                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  FAQ
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  Frequently Asked Questions
                </h2>

              </div>

              <div className="space-y-4">

                {service.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-shape-md border border-outline-variant bg-surface-container-low p-5"
                  >

                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                      <span>{faq.question}</span>

                      <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
                    </summary>

                    <p className="mt-4 pr-8 text-sm leading-relaxed text-on-surface-variant">
                      {faq.answer}
                    </p>

                  </details>
                ))}

              </div>

            </div>
          </section>
        )}


      {/* =========================================================
          CONSULTATION
      ========================================================= */}
      {service.consultation && (
        <section className="bg-surface-container-low py-20">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              FREE CONSULTATION
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              {service.consultation.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-on-surface-variant">
              {service.consultation.description}
            </p>

            {service.consultation.included &&
              service.consultation.included.length > 0 && (
                <div className="mx-auto mt-8 max-w-2xl text-left">

                  <p className="mb-4 text-center font-semibold">
                    {service.consultation.includedTitle}
                  </p>

                  <div className="space-y-3">

                    {service.consultation.included.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                        <span className="text-sm text-on-surface-variant">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>
              )}

            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="mt-8 inline-flex items-center gap-2 rounded-shape-full bg-primary px-7 py-3 font-semibold text-on-primary hover:opacity-90"
            >
              {service.consultation.cta}

              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        </section>
      )}


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      {service.finalCta && (
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {service.finalCta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/80">
              {service.finalCta.description}
            </p>

            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="mt-8 inline-flex items-center gap-2 rounded-shape-full bg-white px-8 py-4 font-semibold text-primary transition-colors hover:bg-primary-container"
            >
              {service.finalCta.primary}

              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        </section>
      )}

    </main>
  );
}