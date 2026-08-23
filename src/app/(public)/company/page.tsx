import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Users,
  Sparkles,
  BriefcaseBusiness,
  MessageSquareQuote,
} from "lucide-react";

import company from "@/data/company.json";

const icons = {
  about: Building2,
  team: Users,
  "why-edvixo": Sparkles,
  "case-studies": BriefcaseBusiness,
  "client-reviews": MessageSquareQuote,
} as const;

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface-container-low py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            ABOUT EDVIXO
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
            Technology Built Around{" "}
            <span className="text-primary">Your Business</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-on-surface-variant md:text-lg">
            From digital products and development to business technology and
            long-term support, Edvixo helps businesses build better digital
            experiences and scalable technology.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-on-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-outline-variant bg-surface px-7 py-3.5 text-sm font-bold text-on-background transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* COMPANY CARDS */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              COMPANY
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Get to Know Edvixo
            </h2>

            <p className="mt-5 text-base leading-8 text-on-surface-variant md:text-lg">
              Explore our company, team, approach, projects, and client
              experiences.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(company).map(([slug, item]) => {
              const Icon = icons[slug as keyof typeof icons];

              return (
                <Link
                  key={slug}
                  href={`/company/${item.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-low p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:bg-surface-container-high hover:shadow-2xl"
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

                  <div className="relative">
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-sm font-bold text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        Explore →
                      </span>
                    </div>

                    <div className="mb-4 h-1.5 w-12 rounded-full bg-primary transition-all duration-500 group-hover:w-20" />

                    <h3 className="text-xl font-bold uppercase tracking-wide">
                      {item.title}
                    </h3>

                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-on-surface-variant">
                      {item.cardDescription}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-bold text-primary">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            LET&apos;S BUILD TOGETHER
          </p>

          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Have a Digital Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Tell us about your business, your goals, and what you want to
            build. We&apos;ll help you find the right digital approach.
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
  );
}