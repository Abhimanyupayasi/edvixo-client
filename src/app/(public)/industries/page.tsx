import type { Metadata } from "next";
import Link from "next/link";
import IndustriesSection from "@/components/industries/IndustriesSection";

export const metadata: Metadata = {
  title: "Industries - Edvixo Digital Solutions",
  description:
    "Explore digital solutions built for healthcare, education, SaaS, retail, real estate, and hospitality businesses.",
};

export default function IndustriesPage() {
  return (
    <main className="bg-background text-on-background">

      {/* HERO */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Industries
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Digital Solutions Built for
            <span className="block text-primary">
              Your Industry
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
            From healthcare and education to retail, SaaS, real estate, and
            hospitality, we build digital experiences around the unique needs
            of your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-shape-full bg-primary px-7 py-3 text-sm font-semibold text-on-primary hover:opacity-90"
          >
            Discuss Your Business
          </Link>

        </div>
      </section>

      <IndustriesSection />

    </main>
  );
}