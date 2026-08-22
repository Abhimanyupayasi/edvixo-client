import type { Metadata } from "next";
import Link from "next/link";
import ServicesSection from "@/components/services/ServicesSection";
export const metadata: Metadata = {
  title: "Services - Edvixo Digital Solutions",
  description:
    "Explore Edvixo digital services including business websites, online stores, booking systems, local SEO, website redesign, and business dashboards.",
};

export default function ServicesPage() {
  return (
    <main className="bg-background text-on-background">

      {/* HERO */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            WHAT WE DO
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Digital Services Built for
            <span className="block text-primary">
              Business Growth
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
            From websites and online stores to booking systems, local SEO,
            redesigns, and business dashboards — we build practical digital
            solutions that help businesses grow.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="rounded-shape-full bg-primary px-7 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/portfolio"
              className="rounded-shape-full border border-outline-variant px-7 py-3 text-sm font-semibold text-on-background transition-colors hover:bg-surface"
            >
              View Our Work
            </Link>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* WHY CHOOSE US */}
      <section className="bg-surface-container-low py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              WHY EDVIXO
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              More Than Just a Website
            </h2>

            <p className="mt-4 leading-relaxed text-on-surface-variant">
              We focus on building digital systems that solve real business
              problems instead of simply creating something that looks good.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

            <div className="rounded-shape-md border border-outline-variant bg-surface p-7">
              <h3 className="text-xl font-bold">
                Business Focused
              </h3>

              <p className="mt-3 leading-relaxed text-on-surface-variant">
                Every feature is designed around your business goals,
                customers, and conversion needs.
              </p>
            </div>

            <div className="rounded-shape-md border border-outline-variant bg-surface p-7">
              <h3 className="text-xl font-bold">
                Modern Technology
              </h3>

              <p className="mt-3 leading-relaxed text-on-surface-variant">
                We use modern development practices to create fast,
                responsive, and maintainable digital products.
              </p>
            </div>

            <div className="rounded-shape-md border border-outline-variant bg-surface p-7">
              <h3 className="text-xl font-bold">
                Long-Term Support
              </h3>

              <p className="mt-3 leading-relaxed text-on-surface-variant">
                We can continue supporting, improving, and maintaining your
                digital product as your business grows.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Have a Project in Mind?
          </h2>

          <p className="mt-4 leading-relaxed text-primary-container">
            Tell us about your business and we&apos;ll help you choose the
            right digital solution.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-shape-full bg-white px-8 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Start a Conversation
          </Link>

        </div>
      </section>

    </main>
  );
}