import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  MapPin,
  Star,
  FileText,
  BarChart2,
  Zap,
  Globe,
  Layers,
  ClipboardList,
  Users,
  Code2,
  EyeOff,
  Smartphone,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getFAQSchema } from "@/lib/seo/schemas";
import { SITE_URL } from "@/app/layout";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "SEO Services for Service Businesses",
  description:
    "Get your business found on Google. Local SEO services with measurable results. Free consultation - no commitment required.",
  alternates: { canonical: `${SITE_URL}/services/local-seo` },
  openGraph: {
    url: `${SITE_URL}/services/local-seo`,
    title: "SEO Services - Sapnendra Jaiswal",
    description:
      "Get found on Google when customers search for you. Search optimisation and listing setup for businesses worldwide.",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    question: "How long before I see results on Google?",
    answer:
      "Local SEO is a marathon, not a sprint. While some optimisations take effect in a few days, most clients see a significant boost in rankings and traffic within 45 to 60 days of the project completion.",
  },
  {
    question: "Do I need a new website for Local SEO?",
    answer:
      "Not necessarily. If your existing website is functional and mobile-friendly, I can optimise it in place. I'll let you know honestly during our free call if a new site would significantly improve your results.",
  },
  {
    question: "What is Google Business Profile?",
    answer:
      "It is the listing that appears on Google Maps and Search. Optimising it ensures your business hours, reviews, and location are accurate and prominently displayed when customers search for you.",
  },
  {
    question: "Can you guarantee page 1 ranking?",
    answer:
      "No ethical SEO professional can guarantee a specific ranking - Google controls that. What I guarantee is best-practice optimisation, transparent monthly reporting, and consistent improvement over time.",
  },
];

const PATH_TO_PAGE1 = [
  {
    icon: MapPin,
    title: "Google Business Profile",
    body: "Complete setup and strategic optimisation.",
  },
  {
    icon: FileText,
    title: "Location Pages",
    body: "City & Area targeting for local dominance.",
  },
  {
    icon: Search,
    title: "Keyword Research",
    body: "Targeting what your locals actually search.",
  },
  {
    icon: BarChart2,
    title: "Monthly Reports",
    body: "Clear reporting of rankings and growth.",
  },
  {
    icon: Star,
    title: "Review Strategy",
    body: "Systematic and reputation-managed automatically.",
  },
  {
    icon: Layers,
    title: "NAP Consistency",
    body: "Unified Name, Address, Phone across every web.",
  },
];

const INCLUSIONS_GRID = [
  {
    icon: MapPin,
    label: "Google Business Profile",
    body: "Optimising your listing for the local map pack.",
  },
  {
    icon: Globe,
    label: "Location Targeting",
    body: "Rank for high-intent keywords in specific cities.",
  },
  {
    icon: Zap,
    label: "Speed Optimisation",
    body: "Lightning-fast mobile performance across sites.",
  },
  {
    icon: Search,
    label: "Google Search Console",
    body: "Full setup and first-month performance monitoring.",
  },
  {
    icon: ClipboardList,
    label: "Sitemap Submission",
    body: "Helping Google index your pages instantly.",
  },
  {
    icon: Star,
    label: "Review Strategy",
    body: "A workflow to gather more 5-star reviews.",
  },
  {
    icon: BarChart2,
    label: "Monthly Reports",
    body: "Data about insights sent to your inbox.",
  },
  {
    icon: Users,
    label: "Competitor Analysis",
    body: "See what your rivals are doing and beat them.",
  },
  {
    icon: Code2,
    label: "Schema Markup",
    body: "Structured data to get rich search snippets.",
  },
];

export default function LocalSeoPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(FAQS)} />

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
            <span className="text-on-background font-medium">Local SEO</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* ── Left: Copy ── */}
            <div>
              {/* Service chip */}
              <div className="rounded-shape-full bg-primary-container text-on-primary-container mb-6 inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold">
                <Search className="h-4 w-4" />
                Local SEO
              </div>

              <h1 className="text-on-background mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                Get Found on Google When Customers Search for You
              </h1>

              <p className="text-on-surface-variant mb-8 text-base leading-relaxed">
                When someone in your city searches for what you do, you should be in the
                top 3 results. Most businesses aren&apos;t - but it&apos;s fixable.
              </p>

              <Link
                href="/contact"
                className="rounded-shape-full bg-primary text-on-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* ── Right: Phone/Maps mockup ── */}
            <div className="hidden justify-center lg:flex">
              {/* Phone frame */}
              <div className="relative w-64">
                <div className="bg-on-background rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-surface overflow-hidden rounded-4xl">
                    {/* Status bar */}
                    <div className="bg-surface-container flex h-8 items-center justify-between px-4">
                      <span className="text-on-surface-variant text-xs font-medium">
                        9:41
                      </span>
                      <div className="flex gap-1">
                        <div className="bg-on-surface-variant/40 h-1.5 w-3 rounded-sm" />
                        <div className="bg-on-surface-variant/40 h-1.5 w-3 rounded-sm" />
                      </div>
                    </div>

                    {/* Google-style search bar */}
                    <div className="bg-surface border-outline-variant border-b px-3 py-2">
                      <div className="bg-surface-container flex items-center gap-2 rounded-full px-3 py-1.5">
                        <Search className="text-primary h-3.5 w-3.5" />
                        <span className="text-on-surface-variant text-xs">
                          dentist near me
                        </span>
                      </div>
                    </div>

                    {/* Map area */}
                    <div className="bg-primary-container/30 relative h-36 overflow-hidden">
                      {/* Grid lines simulating a map */}
                      <div className="absolute inset-0 opacity-20">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="border-primary/30 absolute w-full border-t"
                            style={{ top: `${i * 33}%` }}
                          />
                        ))}
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="border-primary/30 absolute h-full border-l"
                            style={{ left: `${i * 25}%` }}
                          />
                        ))}
                      </div>
                      {/* Roads */}
                      <div className="bg-surface/60 absolute top-1/2 right-0 left-0 h-1" />
                      <div className="bg-surface/60 absolute top-0 bottom-0 left-1/3 w-1" />
                      {/* Location pin */}
                      <div className="absolute top-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
                        <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full shadow-md">
                          <MapPin className="text-on-primary h-3.5 w-3.5" />
                        </div>
                        <div className="bg-primary h-1.5 w-1 rounded-b-full" />
                      </div>
                    </div>

                    {/* Local pack listing */}
                    <div className="space-y-1.5 px-3 py-2">
                      {[
                        {
                          name: "Your Business",
                          rating: "4.9",
                          reviews: "38",
                          highlight: true,
                        },
                        {
                          name: "Competitor A",
                          rating: "4.2",
                          reviews: "12",
                          highlight: false,
                        },
                        {
                          name: "Competitor B",
                          rating: "3.8",
                          reviews: "7",
                          highlight: false,
                        },
                      ].map((biz) => (
                        <div
                          key={biz.name}
                          className={`rounded-shape-md flex items-center justify-between px-2.5 py-2 ${
                            biz.highlight
                              ? "bg-primary-container border-primary/30 border"
                              : "bg-surface-container"
                          }`}
                        >
                          <div>
                            <p
                              className={`text-xs font-bold ${biz.highlight ? "text-primary" : "text-on-background"}`}
                            >
                              {biz.name}
                            </p>
                            <div className="mt-0.5 flex items-center gap-1">
                              <Star
                                className={`h-2.5 w-2.5 ${biz.highlight ? "fill-primary text-primary" : "fill-tertiary text-tertiary"}`}
                              />
                              <span className="text-on-surface-variant text-xs">
                                {biz.rating} · {biz.reviews} reviews
                              </span>
                            </div>
                          </div>
                          {biz.highlight && (
                            <span className="bg-primary text-on-primary rounded px-1.5 py-0.5 text-xs font-semibold">
                              #1
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Why Most Businesses Stay Invisible on Google
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                Icon: EyeOff,
                iconBg: "bg-error-container",
                iconColor: "text-error",
                body: "75% of customers research online before visiting. If you\u2019re not on page 1, you\u2019re invisible to most of them.",
              },
              {
                Icon: MapPin,
                iconBg: "bg-secondary-container",
                iconColor: "text-secondary",
                body: "Your Google Business Profile is incomplete or unclaimed \u2014 competitors appear in your place on Maps.",
              },
              {
                Icon: Smartphone,
                iconBg: "bg-tertiary-container",
                iconColor: "text-tertiary",
                body: "Your website loads slowly on mobile \u2014 Google ranks fast sites higher, pushing you further down.",
              },
            ].map((item, i) => {
              const ProblemIcon = item.Icon;
              return (
                <div
                  key={i}
                  className="bg-surface-container-low rounded-shape-md border-outline-variant border p-6 md:p-8"
                >
                  <div className={`w-10 h-10 rounded-shape-md ${item.iconBg} flex items-center justify-center mb-4 shrink-0`}>
                    <ProblemIcon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <p className="text-on-background text-sm leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PATH TO PAGE 1 ───────────────────────────────────────────────── */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              The Path to Page 1
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {PATH_TO_PAGE1.map((item) => {
              const PathIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-shape-md bg-surface border-outline-variant flex items-start gap-3 border p-5"
                >
                  <div className="rounded-shape-sm bg-primary-container mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center">
                    <PathIcon className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-on-background text-sm font-semibold">{item.title}</p>
                    <p className="text-on-surface-variant mt-0.5 text-xs leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-primary text-2xl font-bold md:text-3xl">
              Our Process
            </h2>
          </div>

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:gap-4">
            {[
              {
                n: "1",
                title: "Free Call",
                body: "Understand your business and current Google presence.",
              },
              {
                n: "2",
                title: "Design Approval",
                body: "Planning an SEO strategy tailored to your location.",
              },
              {
                n: "3",
                title: "Development",
                body: "Implement local SEO and create content for ranking.",
              },
              {
                n: "4",
                title: "Your Review",
                body: "Showing you exactly what's been done and the impact.",
              },
              {
                n: "5",
                title: "Launch",
                body: "Go live and tracking results to you week by week.",
              },
            ].map((step, i, arr) => (
              <div key={step.n} className="flex min-w-0 flex-1 items-start">
                <div className="flex flex-1 flex-col items-center">
                  <div className="text-on-primary mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-on-primary/30 bg-on-primary/10 text-base font-bold">
                    {step.n}
                  </div>
                  <h3 className="text-on-primary mb-1 text-center text-sm font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-on-primary/60 px-2 text-center text-xs leading-relaxed">
                    {step.body}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <div className="mx-1 mt-6 hidden h-px w-6 shrink-0 bg-on-primary/25 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              What&apos;s Included
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {INCLUSIONS_GRID.map((item) => {
              const InclusionIcon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-shape-md bg-surface-container-low border-outline-variant flex items-start gap-3 border p-5"
                >
                  <div className="rounded-shape-sm bg-primary-container mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center">
                    <InclusionIcon className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-on-background text-sm font-semibold">{item.label}</p>
                    <p className="text-on-surface-variant mt-0.5 text-xs leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="bg-primary-container py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { stat: "Page 1", label: "AVG POSITION AFTER 60 DAYS" },
              { stat: "3×", label: "MORE GOOGLE PROFILE VIEWS" },
              { stat: "40%", label: "INCREASE IN DIRECTION REQUESTS" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-primary mb-1 text-4xl font-black md:text-5xl">
                  {item.stat}
                </p>
                <p className="text-on-background mt-2 text-xs font-bold tracking-widest uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Straightforward Pricing
            </h2>
          </div>

          <div className="bg-surface rounded-shape-md border-outline-variant mx-auto max-w-sm border p-10 text-center shadow-sm">
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
          <p className="text-on-primary/80 mb-8 text-base">
            Let&apos;s discuss how we can put your business in front of the local
            customers who are looking for you right now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-shape-full text-primary inline-flex items-center gap-2 bg-surface px-8 py-4 font-bold transition-opacity hover:opacity-90"
            >
              Get a Free Website Consultation
            </Link>
            <a
              href="https://wa.me/919685238884"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-shape-full text-on-primary inline-flex items-center gap-2 border-2 border-on-primary/40 px-8 py-4 font-bold transition-colors hover:bg-on-primary/10"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
