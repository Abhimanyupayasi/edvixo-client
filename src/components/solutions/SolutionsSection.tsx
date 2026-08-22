import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  Settings,
  Workflow,
} from "lucide-react";

import solutions from "@/data/solutions.json";

const icons = {
  "hire-dedicated-developers": BriefcaseBusiness,
  "startup-product-development": Code2,
  "business-automation": Bot,
  "cloud-devops-solutions": Cloud,
  "maintenance-support": Settings,
  "digital-transformation": Workflow,
} as const;

export default function SolutionsSection() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Our Solutions
          </p>

          <h2 className="text-3xl font-bold leading-tight text-on-background md:text-4xl">
            Technology Solutions for
            <span className="text-primary"> Growing Businesses</span>
          </h2>

          <p className="mt-4 leading-relaxed text-on-surface-variant">
            Practical digital solutions designed to help businesses build,
            automate, scale, and improve their technology.
          </p>

        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {Object.entries(solutions).map(([slug, solution]) => {

            const Icon =
              icons[slug as keyof typeof icons] ?? Code2;

            return (
              <article
                key={slug}
                className="group flex h-full flex-col rounded-shape-md border border-outline-variant bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
              >

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container">
                  <Icon className="h-7 w-7 text-on-primary-container" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-on-background">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-relaxed text-on-surface-variant">
                  {solution.heroDescription}
                </p>

                {/* Features */}
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

                {/* Button */}
                <div className="mt-auto pt-7">

                  <Link
                    href={`/solutions/${slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-shape-md bg-primary-container px-5 py-3 text-sm font-semibold text-on-primary-container transition-colors hover:bg-primary hover:text-on-primary"
                  >
                    Explore Solution

                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View All Solutions
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </div>
    </section>
  );
}