import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Smartphone,
  BarChart2,
  Layout,
  FileText,
  ShieldCheck,
  Settings,
  Database,
  MousePointerClick,
  Search,
  Gauge,
  EyeOff,
  Monitor,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getFAQSchema } from "@/lib/seo/schemas";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Website Redesign Services",
  description:
    "Modern website redesign with faster loading, mobile-first design, and better conversions. Free before/after assessment included.",
  alternates: { canonical: `${SITE_URL}/services/website-redesign` },
  openGraph: {
    url: `${SITE_URL}/services/website-redesign`,
    title: "Website Redesign Services - Sapnendra Jaiswal",
    description:
      "Your outdated website is losing customers every day. Modern redesign: faster, mobile-first, and built to convert.",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    question: "Will I lose my Google rankings after a redesign?",
    answer:
      "Actually, the opposite! While poor redesigns can hurt SEO, my process includes technical SEO migration. By improving site speed, mobile-responsiveness, and user experience, most clients see an increase in rankings within 2–4 weeks after launch.",
  },
  {
    question: "How long does the entire process take?",
    answer:
      "Most redesigns are completed within 3–4 weeks. Simple sites can be done in as little as 10 days. I'll give you a precise timeline estimate on our free discovery call once I review your current site.",
  },
  {
    question: "Who will handle the content migration?",
    answer:
      "I handle the heavy lifting. I will migrate your existing text and images to the new design, optimising them for web performance as I go. If you need new copywriting to boost sales, I can assist with that as an additional service.",
  },
  {
    question: "What if I already have a host and domain?",
    answer:
      "No problem at all. I can deploy your redesigned site to your existing host and domain. If after reviewing your setup I think you'd benefit from a faster host, I'll make a recommendation - but there's never any pressure to change.",
  },
];

const INCLUSIONS_GRID = [
  { icon: Layout, label: "Responsive Redesign" },
  { icon: Zap, label: "Speed Audit" },
  { icon: FileText, label: "Content Migration" },
  { icon: Smartphone, label: "WhatsApp Integration" },
  { icon: MousePointerClick, label: "Optimised CTAs" },
  { icon: Search, label: "On-Page SEO" },
  { icon: ShieldCheck, label: "SSL Setup" },
  { icon: CheckCircle2, label: "30-Day Support" },
  { icon: ShieldCheck, label: "Security Hardening" },
  { icon: Settings, label: "Form Setup" },
  { icon: BarChart2, label: "Analytics Setup" },
  { icon: Database, label: "Daily Backups" },
];

export default function WebsiteRedesignPage() {
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
            <span className="text-on-background font-medium">Website Redesign</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* ── Left: Copy ── */}
            <div>
              {/* Service chip */}
              <div className="rounded-shape-full bg-primary-container text-on-primary-container mb-6 inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold">
                <Zap className="h-4 w-4" />
                Website Redesign
              </div>

              <h1 className="text-on-background mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                Your Website Shouldn&apos;t Look Like It Was Built in 2015
              </h1>

              <p className="text-on-surface-variant mb-8 text-base leading-relaxed">
                An outdated website loses you customers every day. A redesign doesn&apos;t
                just look better - it loads faster, ranks higher, and converts more
                visitors.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-shape-full bg-primary text-on-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-shape-full border-outline-variant bg-surface text-on-background hover:bg-surface-container inline-flex items-center gap-2 border px-6 py-3 text-sm font-semibold transition-colors"
                >
                  View Portfolio →
                </Link>
              </div>
            </div>

            {/* ── Right: Before / After split mockup ── */}
            <div className="hidden justify-center lg:flex">
              <div className="w-full max-w-sm">
                {/* Browser chrome */}
                <div className="rounded-t-shape-xl bg-surface-container border-outline-variant border border-b-0 px-4 pt-3 pb-2">
                  <div className="mb-2 flex items-center gap-1.5">
                    <div className="bg-error/60 h-2 w-2 rounded-full" />
                    <div className="bg-tertiary/60 h-2 w-2 rounded-full" />
                    <div className="bg-primary/60 h-2 w-2 rounded-full" />
                  </div>
                  <div className="bg-surface-container-high h-5 w-full rounded" />
                </div>

                {/* Split panel */}
                <div className="rounded-b-shape-xl border-outline-variant flex overflow-hidden border">
                  {/* BEFORE */}
                  <div className="bg-error-container/30 border-outline-variant flex-1 border-r p-3">
                    <div className="bg-error text-on-error mb-2 inline-block rounded px-1.5 py-0.5 text-xs font-bold">
                      BEFORE
                    </div>
                    {/* Fake outdated layout */}
                    <div className="space-y-1.5">
                      <div className="bg-on-surface-variant/20 h-4 w-full rounded" />
                      <div className="bg-on-surface-variant/10 h-12 w-full rounded" />
                      <div className="bg-on-surface-variant/15 h-3 w-3/4 rounded" />
                      <div className="bg-on-surface-variant/10 h-3 w-2/3 rounded" />
                      <div className="bg-on-surface-variant/20 mt-2 h-6 w-full rounded" />
                    </div>
                    <p className="text-on-surface-variant mt-2 text-center text-xs font-medium">
                      Clunky &amp; Slow
                    </p>
                  </div>

                  {/* VS divider */}
                  <div className="bg-surface-container z-10 -mx-4 flex w-8 items-center justify-center">
                    <div className="bg-on-background text-surface flex h-7 w-7 items-center justify-center rounded-full text-xs font-black shadow">
                      VS
                    </div>
                  </div>

                  {/* AFTER */}
                  <div className="bg-primary-container/30 border-outline-variant flex-1 border-l p-3">
                    <div className="bg-primary text-on-primary mb-2 inline-block rounded px-1.5 py-0.5 text-xs font-bold">
                      AFTER
                    </div>
                    {/* Fake modern layout */}
                    <div className="space-y-1.5">
                      <div className="bg-primary/30 h-4 w-full rounded" />
                      <div className="bg-primary/10 h-12 w-full rounded" />
                      <div className="bg-primary/20 h-3 w-3/4 rounded" />
                      <div className="bg-primary/15 h-3 w-2/3 rounded" />
                      <div className="bg-primary/30 mt-2 h-6 w-full rounded" />
                    </div>
                    <p className="text-primary mt-2 text-center text-xs font-semibold">
                      Modern &amp; Fast
                    </p>
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
              Why an Outdated Website is Killing Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                Icon: Gauge,
                iconBg: "bg-error-container",
                iconColor: "text-error",
                title: "Slow site loses 53% of mobile visitors",
                body: "If your page takes more than 3 seconds to load, half your potential customers are gone before they even see your name.",
              },
              {
                Icon: EyeOff,
                iconBg: "bg-secondary-container",
                iconColor: "text-secondary",
                title: "Visitors judge quality by site quality",
                body: "Your website is your digital storefront. An unprofessional site makes your premium business look cheap and untrustworthy.",
              },
              {
                Icon: Monitor,
                iconBg: "bg-tertiary-container",
                iconColor: "text-tertiary",
                title: "Built for desktop in 2015...",
                body: "But visitors are on mobile in 2026. Pinched zooming and tiny buttons are driving your mobile leads to your competitors.",
              },
            ].map((item) => {
              const ProblemIcon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="rounded-shape-md border-outline-variant bg-surface-container-low border p-6 md:p-8"
                >
                  <div className={`w-10 h-10 rounded-shape-md ${item.iconBg} flex items-center justify-center mb-4 shrink-0`}>
                    <ProblemIcon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-on-background mb-2 text-sm font-semibold">
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

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-start">
            {/* Left */}
            <div className="lg:sticky lg:top-20 lg:col-span-2">
              <h2 className="text-on-background mb-4 text-2xl font-bold md:text-3xl">
                Everything a Redesign Should Do
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                I don&apos;t just change colours. I re-engineer your entire digital
                presence for the 2025 landscape.
              </p>
            </div>

            {/* Right: 2×2 feature grid */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-3">
              {[
                {
                  icon: Layout,
                  title: "Visual Redesign",
                  body: "Modern, high-conversion layouts that reflect your brand's authority and appeal to today's online consumers.",
                },
                {
                  icon: Zap,
                  title: "Speed Optimisation",
                  body: "Sub-2 second load times with Core Web Vitals optimisation. Your site will feel lightning-fast on every device.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-First Layout",
                  body: "Designed specifically for the mobile user. Thumb-friendly navigation and responsive elements that work flawlessly.",
                },
                {
                  icon: BarChart2,
                  title: "Performance Reports",
                  body: "Transparent data. I provide detailed reports showing the before vs after improvements in speed and SEO score.",
                },
              ].map((card) => {
                const FeatureIcon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-shape-md border-outline-variant bg-surface border p-6 shadow-sm"
                  >
                    <div className="rounded-shape-md bg-primary-container mb-4 flex h-10 w-10 items-center justify-center">
                      <FeatureIcon className="text-primary h-5 w-5" />
                    </div>
                    <h3 className="text-on-background mb-2 text-sm font-semibold">
                      {card.title}
                    </h3>
                    <p className="text-on-surface-variant text-xs leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-primary text-2xl font-bold md:text-3xl">
              The 5-Step Redesign Process
            </h2>
          </div>

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:gap-4">
            {[
              {
                n: "1",
                title: "Free Call",
                body: "Understand your goals and audit your existing site.",
              },
              {
                n: "2",
                title: "Design Approval",
                body: "Review and approve the full design before we build.",
              },
              {
                n: "3",
                title: "Development",
                body: "Cutting-edge code, performance tuned and mobile-first.",
              },
              {
                n: "4",
                title: "Your Review",
                body: "You test every page. We iterate until it's perfect.",
              },
              {
                n: "5",
                title: "Launch",
                body: "Go live and train you on content updates.",
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
          <div className="mb-3 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              What&apos;s Included in Every Package
            </h2>
          </div>
          <p className="text-on-surface-variant mb-10 text-center text-sm">
            Everything you need for a modern, high-performing business site.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {INCLUSIONS_GRID.map((item) => {
              const GridIcon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-shape-md border-outline-variant bg-surface-container-low flex flex-col items-center gap-2 border p-4 text-center"
                >
                  <div className="rounded-shape-sm bg-primary-container flex h-9 w-9 items-center justify-center">
                    <GridIcon className="text-primary h-4 w-4" />
                  </div>
                  <p className="text-on-background text-xs leading-tight font-semibold">
                    {item.label}
                  </p>
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
              { stat: "2.4×", label: "SPEED IMPROVEMENT" },
              { stat: "60%", label: "LOWER BOUNCE RATE" },
              { stat: "30 Days", label: "AVG. COMPLETION" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-primary mb-1 text-4xl font-black md:text-5xl">
                  {item.stat}
                </p>
                <p className="text-on-primary-container mt-2 text-xs font-bold tracking-widest uppercase">
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
          <div className="rounded-shape-md border-outline-variant bg-surface mx-auto max-w-md border p-10 text-center shadow-sm">
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
                className="group rounded-shape-md border-outline-variant bg-surface-container-low overflow-hidden border"
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
            Ready to Get Your Business Online &amp; Optimized?
          </h2>
          <p className="text-on-primary/80 mb-8 text-base">
            Don&apos;t let a 10-year-old website push away today&apos;s customers.
            Let&apos;s build something you&apos;re proud of.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-shape-full text-primary inline-flex items-center gap-2 bg-surface px-8 py-4 font-bold transition-opacity hover:opacity-90"
            >
              Get a Free Consultation
            </Link>
            <a
              href="https://wa.me/919685238884"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-shape-full text-on-primary inline-flex items-center gap-2 border-2 border-on-primary/40 px-8 py-4 font-bold transition-colors hover:bg-on-primary/10"
            >
              WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

