import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import industries from "@/data/industries.json";

type IndustrySlug = keyof typeof industries;

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const industry = industries[slug as IndustrySlug];

  if (!industry) {
    return {
      title: "Industry Not Found - Edvixo",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${industry.title} Solutions - Edvixo`,
    description: industry.heroDescription,
  };
}

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
    <main className="bg-background text-on-background">

      {/* HERO */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All Industries
          </Link>

          <div className="mx-auto mt-12 max-w-4xl text-center">

            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              {industry.title}
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {industry.heroTitle}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              {industry.heroDescription}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-shape-full bg-primary px-7 py-3 text-sm font-semibold text-on-primary hover:opacity-90"
            >
              {industry.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              WHO WE HELP
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Businesses in {industry.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {industry.whoItsFor.map((item) => (
              <span
                key={item}
                className="rounded-shape-full bg-secondary-container px-5 py-2 text-sm font-medium text-on-secondary-container"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                COMMON CHALLENGES
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Problems Businesses Face
              </h2>
            </div>

            <div className="space-y-4">
              {industry.problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 rounded-shape-md border border-outline-variant bg-surface p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {problem}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              WHAT WE BUILD
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Solutions for {industry.title}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {industry.solutions.map((solution) => (
              <div
                key={solution}
                className="flex items-start gap-3 rounded-shape-md border border-outline-variant bg-surface p-6"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <span className="font-medium">
                  {solution}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              FEATURES
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              What We Can Deliver
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {industry.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-shape-md border border-outline-variant bg-surface p-6"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <span className="text-sm leading-relaxed text-on-surface-variant">
                  {feature}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {industry.cta}
          </h2>

          <p className="mt-4 text-primary-container">
            Let&apos;s discuss how Edvixo can build a digital solution
            specifically for your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-shape-full bg-white px-7 py-3 text-sm font-semibold text-primary hover:opacity-90"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </section>

    </main>
  );
}