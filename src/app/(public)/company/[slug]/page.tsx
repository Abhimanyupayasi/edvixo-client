import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Workflow,
  CircleHelp,
} from "lucide-react";

import company from "@/data/company.json";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import {
  getBreadcrumbSchema,
  getFAQSchema,
} from "@/lib/seo/schemas";

type CompanySlug = keyof typeof company;

export function generateStaticParams() {
  return Object.keys(company).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = company[slug as CompanySlug];

  if (!item) {
    return {
      title: "Company Page Not Found - Edvixo",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
  title: `${item.title} - Edvixo`,
  description: item.heroDescription,
  alternates: {
    canonical: `${SITE_URL}/company/${slug}`,
  },
};
}

export default async function CompanyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = company[slug as CompanySlug];

  if (!item) {
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
          name: "Company",
          url: `${SITE_URL}/company`,
        },
        {
          name: item.title,
          url: `${SITE_URL}/company/${slug}`,
        },
      ])}
    />

    <JsonLd data={getFAQSchema(item.faqs)} />

    <main className="min-h-screen bg-background text-on-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface-container-low py-20 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Link
            href="/company"
            className="inline-flex items-center gap-2 text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All Company
          </Link>

          <div className="mx-auto mt-14 max-w-5xl text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {item.title}
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              {item.heroTitle}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-on-surface-variant md:text-lg">
              {item.heroDescription}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-on-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {item.finalCta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/company"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-outline-variant bg-surface px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Explore Company
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                WHO WE HELP
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Built for Businesses That Want to Grow
              </h2>

              <p className="mt-5 leading-8 text-on-surface-variant">
                We focus on practical digital solutions that support real
                business requirements, customer experiences, and long-term
                growth.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {item.whoItsFor.map((person) => (
                <div
                  key={person}
                  className="group rounded-2xl border border-outline-variant bg-surface-container-low p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-on-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <p className="font-semibold">{person}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-surface-container-low py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                COMMON CHALLENGES
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Problems We Help Solve
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-on-surface-variant">
                The right technology should remove friction, improve
                efficiency, and make your business easier to operate.
              </p>
            </div>

            <div className="space-y-4">
              {item.problems.map((problem) => (
                <div
                  key={problem}
                  className="group flex items-start gap-4 rounded-2xl border border-outline-variant bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <p className="text-sm leading-7 text-on-surface-variant">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              WHAT WE OFFER
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Practical Solutions
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {item.solutions.map((solution) => (
              <div
                key={solution}
                className="group rounded-3xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
                  <Target className="h-5 w-5" />
                </div>

                <h3 className="font-bold leading-6">{solution}</h3>

                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  Designed around your business requirements and focused on
                  practical results.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-surface-container-low py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              CAPABILITIES
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              What We Can Deliver
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {item.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 rounded-2xl border border-outline-variant bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <span className="text-sm leading-7 text-on-surface-variant">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                BENEFITS
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Why This Approach Works
              </h2>

              <p className="mt-5 leading-8 text-on-surface-variant">
                We focus on building technology that is useful today while
                remaining flexible enough to support future growth.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {item.benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="mb-4 text-3xl font-black text-primary">
                    0{index + 1}
                  </div>

                  <p className="font-semibold leading-7">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-container-low py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              OUR PROCESS
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              From Idea to Launch
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {item.process.map((step, index) => (
              <div
                key={step}
                className="relative rounded-3xl border border-outline-variant bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-black text-on-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <Workflow className="mb-4 h-5 w-5 text-primary" />

                <p className="text-sm font-semibold leading-7">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {item.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
                  <span>{faq.question}</span>

                  <CircleHelp className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-on-surface-variant">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-black text-white md:text-5xl">
            {item.finalCta}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Let&apos;s discuss your requirements and build a digital solution
            that fits your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}