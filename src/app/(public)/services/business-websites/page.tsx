import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Smartphone,
  Search,
  MessageSquare,
  Monitor,
  Star,
  DollarSign,
  EyeOff,
  ShieldOff,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getFAQSchema } from "@/lib/seo/schemas";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Business Website Design Services",
  description:
    "Custom, mobile-friendly business websites for restaurants, clinics, coaching institutes, and retailers. Fixed scope, fast delivery, and a free quote within 24 hours.",
  alternates: { canonical: `${SITE_URL}/services/business-websites` },
  openGraph: {
    url: `${SITE_URL}/services/business-websites`,
    title: "Business Website Design Services - Sapnendra Jaiswal",
    description:
      "Custom websites for businesses worldwide. Mobile-friendly, fast, and built to convert visitors into customers.",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    question: "How long will it take to launch my website?",
    answer:
      "A standard business website is ready for your review within 10 days and goes live within 14 days after your final approval.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Provide your logo, basic text about your services, and high-quality photos if you have them. If not, I can help you with stock images and professional copywriting for an extra fee.",
  },
  {
    question: "What about domain and hosting?",
    answer:
      "I can recommend reliable, affordable hosting suited to your budget. Domain registration and hosting setup are handled end-to-end - you don't need any technical knowledge.",
  },
  {
    question: "Who handles maintenance?",
    answer:
      "Every project includes 30 days of free post-launch support. After that, optional monthly maintenance packages are available covering content updates, security, and backups.",
  },
];

const PROBLEMS = [
  {
    Icon: DollarSign,
    iconBg: "bg-error-container",
    iconColor: "text-error",
    title: "Commission Heavy",
    body: "Paying 15–30% commissions to third-party delivery platforms and directory listings cuts deep into your profits every single month.",
  },
  {
    Icon: EyeOff,
    iconBg: "bg-tertiary-container",
    iconColor: "text-tertiary",
    title: "Invisible on Google",
    body: "When customers search for services in your city, they find your competitors because you don't have a digital address.",
  },
  {
    Icon: ShieldOff,
    iconBg: "bg-secondary-container",
    iconColor: "text-secondary",
    title: "No Brand Control",
    body: "Relying on social media means you're at the mercy of algorithms. Your website is your own digital real estate.",
  },
];

const FEATURES = [
  {
    icon: Smartphone,
    title: "Fast on Mobile",
    body: "Optimised for modern mobile networks, built for customers on mobile.",
  },
  {
    icon: Search,
    title: "Shows on Google",
    body: "SEO optimisation so customers can find you online.",
  },
  {
    icon: MessageSquare,
    title: "24/7 Enquiries",
    body: "Your digital salesperson working while you sleep.",
  },
  {
    icon: Monitor,
    title: "Every Device",
    body: "Looks stunning on Phones, Androids, and laptops.",
  },
];

export default function BusinessWebsitesPage() {
  const faqSchema = getFAQSchema(FAQS);

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-surface-container-low py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-on-surface-variant mb-8 flex items-center gap-1.5 text-sm"
          >
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
            <span className="text-on-background font-medium">Business Website</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* ── Left: Copy ── */}
            <div>
              {/* Service chip */}
              <div className="rounded-shape-full bg-primary text-on-primary mb-6 inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold">
                <Globe className="h-4 w-4" />
                Business Website
              </div>

              <h1 className="text-on-background mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                A Website Your Business <span className="block">Can Be Proud Of</span>
              </h1>

              <p className="text-on-surface-variant mb-6 text-base leading-relaxed">
                Helping small businesses and agencies build high-performance MERN
                websites that turn Google searches into lifelong customers.
              </p>

              {/* Trust chips */}
              <div className="mb-8 flex flex-wrap gap-3">
                {["Custom Quote in 24 Hours", "10–14 Days · Ready to Launch"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-shape-full border-outline-variant bg-surface text-on-background border px-4 py-2 text-sm font-medium"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-shape-full bg-primary text-on-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-shape-full border-outline-variant bg-surface text-on-background hover:bg-surface-container inline-flex items-center gap-2 border px-6 py-3 text-sm font-semibold transition-colors"
                >
                  See Example Websites →
                </Link>
              </div>
            </div>

            {/* ── Right: Browser mockup ── */}
            <div className="relative hidden justify-center lg:flex">
              <div className="bg-surface rounded-shape-md border-outline-variant w-full max-w-md overflow-hidden border shadow-lg">
                {/* Browser chrome bar */}
                <div className="bg-surface-container-high border-outline-variant flex items-center gap-2 border-b px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="bg-surface text-on-surface-variant ml-2 flex-1 rounded px-3 py-1 text-xs">
                    yourbusiness.com
                  </div>
                </div>
                {/* Fake website preview */}
                <div className="bg-surface-container-lowest space-y-3 p-4">
                  {/* Navbar placeholder */}
                  <div className="flex items-center justify-between px-2 py-2">
                    <div className="bg-surface-container-high h-4 w-24 rounded" />
                    <div className="bg-primary rounded-shape-full h-7 w-24" />
                  </div>
                  {/* Hero section placeholder */}
                  <div className="bg-surface-container rounded-shape-md space-y-2 p-4">
                    <div className="bg-surface-container-high h-5 w-3/4 rounded" />
                    <div className="bg-surface-container-high h-4 w-1/2 rounded" />
                    <div className="bg-surface-container-high mt-1 h-3 w-full rounded" />
                    <div className="bg-surface-container-high h-3 w-5/6 rounded" />
                    <div className="mt-3 flex gap-2">
                      <div className="bg-primary rounded-shape-full h-8 w-28" />
                      <div className="bg-surface-container-highest rounded-shape-full h-8 w-24" />
                    </div>
                  </div>
                  {/* Cards row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="bg-surface-container rounded-shape-md h-16"
                      />
                    ))}
                  </div>
                  {/* Footer strip */}
                  <div className="bg-primary rounded-shape-md h-6 opacity-30" />
                </div>
              </div>
              {/* Live badge */}
              <div className="rounded-shape-full bg-primary text-on-primary absolute -top-10 right-2 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold shadow-lg">
                <span className="bg-on-primary h-2 w-2 animate-pulse rounded-full" />
                Live in 12 days
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Why Most Business Owners Delay...
            </h2>
            <p className="text-on-surface-variant mt-3 text-sm">
              And how it&apos;s costing you more than a website cost.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROBLEMS.map((item) => {
              const ProblemIcon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="bg-surface-container-low rounded-shape-md border-outline-variant border p-6 md:p-8"
                >
                  <div
                    className={`rounded-shape-md h-10 w-10 ${item.iconBg} mb-4 flex shrink-0 items-center justify-center`}
                  >
                    <ProblemIcon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-on-background mb-2 text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT I BUILD ─────────────────────────────────────────────────── */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
            {/* Left sticky content */}
            <div className="lg:sticky lg:top-24 lg:col-span-2">
              <p className="text-primary mb-3 text-xs font-bold tracking-widest uppercase">
                WHAT YOU GET
              </p>
              <h2 className="text-on-background mb-5 text-2xl font-bold md:text-3xl">
                Everything a Business Website Should Do
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Zero Ongoing Commissions - take all enquiries directly on your WhatsApp.",
                  "Automated Lead Capture - never miss a prospect with 24/7 contact forms.",
                  "Modern MERN Tech - lightning-fast loading using React and Node.js.",
                  "SEO Optimised - rank for keywords that actually bring in revenue.",
                ].map((point) => (
                  <div
                    key={point}
                    className="border-primary flex items-start gap-3 border-l-2 pl-4"
                  >
                    <p className="text-on-background text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Feature cards */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-3">
              {FEATURES.map((card) => (
                <div
                  key={card.title}
                  className="bg-surface rounded-shape-md border-outline-variant border p-6 shadow-sm"
                >
                  <div className="rounded-shape-md bg-primary-container mb-4 flex h-10 w-10 items-center justify-center">
                    <card.icon className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-on-background mb-2 text-sm font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-3 text-center">
            <h2 className="text-on-primary text-2xl font-bold md:text-3xl">
              How We Build Your Website
            </h2>
            <p className="text-on-primary/80 mt-2 text-sm">
              A streamlined process designed for busy business owners.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:gap-4">
            {[
              {
                n: "1",
                title: "Free Call",
                body: "We discuss your goals and requirements.",
              },
              {
                n: "2",
                title: "Design Approval",
                body: "Review the design before a single line of code.",
              },
              {
                n: "3",
                title: "Development",
                body: "I build every page using modern MERN stack.",
              },
              {
                n: "4",
                title: "Review",
                body: "You test on your device. We refine until perfect.",
              },
              {
                n: "5",
                title: "Launch",
                body: "Live within 14 days. Ongoing support included.",
              },
            ].map((step, i, arr) => (
              <div key={step.n} className="flex min-w-0 flex-1 items-start">
                <div className="flex flex-1 flex-col items-center">
                  <div className="text-on-primary border-on-primary/30 bg-on-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 text-base font-bold">
                    {step.n}
                  </div>
                  <h3 className="text-on-primary mb-1 text-center text-sm font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-on-primary/80 px-2 text-center text-xs leading-relaxed">
                    {step.body}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <div className="bg-on-primary/25 mx-1 mt-6 hidden h-px w-6 shrink-0 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-3 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Everything Included. <span className="text-primary">No Add-Ons.</span>
            </h2>
            <p className="text-on-surface-variant mt-2 text-sm">
              One price for a complete, professional business setup.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                label: "Custom Premium Design",
                note: "No generic templates. Your brand's colors and style.",
              },
              {
                label: "Mobile Responsive",
                note: "Perfect layout for all smartphones and tablets.",
              },
              {
                label: "Google Map Setup",
                note: "Embedded map so people find your physical store.",
              },
              {
                label: "SSL Certificate",
                note: "Secure HTTPS padlock for trust and security.",
              },
              {
                label: "Contact Forms",
                note: "Professional forms that send leads to your email.",
              },
              {
                label: "High-Res Stock Photos",
                note: "Professional images that match your industry.",
              },
              {
                label: "WhatsApp Integration",
                note: "Floating button for direct customer chats.",
              },
              {
                label: "On-Page SEO Setup",
                note: "Configuring keywords for Google ranking.",
              },
              {
                label: "Post-Launch Support",
                note: "30 days of support to ensure smooth operations.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-shape-md bg-surface-container-low border-outline-variant flex items-start gap-3 border p-6"
              >
                <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="text-on-background text-sm font-semibold">{item.label}</p>
                  {item.note && (
                    <p className="text-on-surface-variant mt-0.5 text-xs leading-relaxed">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS / SOCIAL PROOF ───────────────────────────────────────── */}
      <section className="bg-primary-container py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          {/* Stats row */}
          <div className="mb-14 grid grid-cols-3 gap-6 space-y-6">
            {[
              { stat: "3×", label: "Average enquiry increase" },
              { stat: "10 days", label: "Fastest launch record" },
              { stat: "4.9 Stars", label: "Client satisfaction rating" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-primary mb-2 text-4xl font-black md:text-5xl">
                  {item.stat}
                </p>
                <p className="text-on-primary-container text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial card */}
          <div className="bg-surface rounded-shape-md mx-auto max-w-2xl p-8 shadow-sm space-y-6">
            <div className="mb-4 flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="fill-tertiary text-tertiary h-4 w-4" />
              ))}
            </div>
            <p className="text-on-background mb-6 text-sm leading-relaxed italic md:text-base">
              &ldquo;Sapnendra transformed our local manufacturing business. We used to
              get zero calls from the internet, now we get at least 4–5 high-quality leads
              every week. The WhatsApp button alone changed how we do business!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-primary-container flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <span className="text-primary text-sm font-bold">RK</span>
              </div>
              <div>
                <p className="text-on-background text-sm font-semibold">Rajesh Kumar</p>
                <p className="text-on-surface-variant text-xs">
                  Owner, RK Techno &amp; Exports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="bg-surface rounded-shape-md border-primary/20 relative mx-auto max-w-xl overflow-hidden border p-10 text-center shadow-sm md:p-12">
            <div className="w-14 h-14 rounded-shape-xl bg-primary-container flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-7 h-7 text-primary" />
            </div>

            <h2 className="text-headline-small font-bold text-on-background mb-3">
              Let&apos;s Talk About Your Project
            </h2>

            <p className="text-on-surface-variant leading-relaxed mb-8 text-sm max-w-sm mx-auto">
              Every project is different. Share what you need and I&apos;ll send you a
              clear, detailed quote within 24 hours - no commitment,
              no pressure.
            </p>

            <div className="bg-surface-container-low rounded-shape-xl p-5 text-left mb-8 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                Your Free Consultation Includes
              </p>
              {[
                "A clear breakdown of what I'd build for your business",
                "Honest timeline and scope - no surprises later",
                "A fixed-price quote tailored to your exact requirements",
                "No obligation to proceed",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-on-background">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="block w-full py-4 rounded-shape-full bg-primary text-on-primary font-bold text-center text-sm hover:opacity-90 transition-opacity mb-3"
            >
              Get a Free Custom Quote →
            </Link>

            <a
              href="https://wa.me/919685238884"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-shape-full border border-outline-variant text-on-surface-variant font-semibold text-center text-sm hover:bg-surface-container-low transition-colors"
            >
              Or message on WhatsApp
            </a>

            <p className="text-xs text-on-surface-variant mt-4">
              Response within 24 hours · No spam · Unsubscribe any time
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="text-on-surface-variant mt-2 text-sm">
              Everything you need to know before we start.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group bg-surface-container-low rounded-shape-md border-outline-variant overflow-hidden border"
              >
                <summary className="text-on-background hover:bg-surface-container flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold transition-colors md:text-base">
                  {faq.question}
                  <ChevronRight className="text-on-surface-variant h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-90" />
                </summary>
                <div className="text-on-surface-variant px-5 pb-5 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-on-primary mb-4 text-3xl font-bold md:text-4xl">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-on-primary/80 mb-8 text-base md:text-lg">
            Free 15-minute consultation. No pitch. Just honest advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-shape-full text-primary bg-surface inline-flex items-center gap-2 px-8 py-4 font-bold transition-opacity hover:opacity-90"
            >
              Get a Free Website Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/919685238884"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-shape-full text-on-primary border-surface/60 hover:bg-surface/10 inline-flex items-center gap-2 border-2 px-8 py-4 font-bold transition-colors"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

