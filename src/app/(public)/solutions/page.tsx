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

export default function SolutionsPage() {
  return (
    <main className="bg-background text-on-background">

      {/* HERO */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-shape-full bg-secondary-container px-4 py-2 text-sm font-semibold text-on-secondary-container">
              <Sparkles className="h-4 w-4" />
              Digital Solutions
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Solutions Built Around
              <span className="block text-primary">
                Your Business
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
              From dedicated development teams and startup products to
              automation, cloud infrastructure, and digital transformation,
              we build practical technology solutions for growing businesses.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-shape-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-shape-full border border-outline-variant bg-surface px-6 py-3 text-sm font-semibold text-on-background transition-colors hover:bg-surface-container"
              >
                View Our Work
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              WHAT WE OFFER
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Digital Solutions for Real Business Needs
            </h2>

            <p className="mt-4 leading-relaxed text-on-surface-variant">
              Choose a solution based on your current business challenge.
              Each solution can be customised according to your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {Object.entries(solutions).map(([slug, solution]) => {
              const Icon =
                icons[slug as keyof typeof icons] ?? Code2;

              return (
                <article
                  key={slug}
                  className="group flex h-full flex-col rounded-shape-md border border-outline-variant bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
                >

                  {/* ICON */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container">
                    <Icon className="h-7 w-7 text-on-primary-container" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold">
                    {solution.title}
                  </h3>

                  {/* HERO DESCRIPTION */}
                  <p className="mt-3 leading-relaxed text-on-surface-variant">
                    {solution.heroDescription}
                  </p>

                  {/* WHO IT'S FOR */}
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Who It&apos;s For
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {solution.whoItsFor.map((item) => (
                        <span
                          key={item}
                          className="rounded-shape-full bg-secondary-container px-3 py-1 text-xs font-medium text-on-secondary-container"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Includes
                    </p>

                    <ul className="space-y-2">
                      {solution.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-on-surface-variant"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-8">
                    <Link
                      href={`/solutions/${slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-shape-md bg-primary-container px-5 py-3 text-sm font-semibold text-on-primary-container transition-colors hover:bg-primary hover:text-on-primary"
                    >
                      Explore Solution
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Not Sure Which Solution You Need?
          </h2>

          <p className="mt-4 leading-relaxed text-primary-container">
            Tell us about your business challenge and we can help identify
            the right digital approach.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-shape-full bg-white px-7 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Get a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </section>

    </main>
  );
}