import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart2,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Bell,
  Package,
  Users,
  X,
  ChevronRight,
  Star,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getFAQSchema } from "@/lib/seo/schemas";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Custom Business Dashboard Development",
  description:
    "Custom business dashboards that track sales, bookings, stock, and staff in one live screen. Free demo and quote for your setup.",
  alternates: { canonical: `${SITE_URL}/services/dashboards` },
  openGraph: {
    url: `${SITE_URL}/services/dashboards`,
    title: "Custom Business Dashboard Development - Sapnendra Jaiswal",
    description:
      "Stop managing your business on spreadsheets. Get a live dashboard built for your specific operations.",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    question: "Does my business need to use special software for this to work?",
    answer:
      "No. The dashboard connects to whatever you already use - a POS machine, an order management app, or even a simple Google Sheet you fill in daily. I design the integration around your current workflow, not the other way around.",
  },
  {
    question: "Can the dashboard connect to food delivery platforms or my POS machine?",
    answer:
      "Many popular platforms have data exports or APIs that allow connection. During the discovery call, we map out exactly what data you have and the best way to bring it into your dashboard. If a direct connection is not possible, a simple daily data entry form takes under 2 minutes.",
  },
  {
    question: "What if my business data is currently in Excel sheets?",
    answer:
      "Excel is a perfect starting point. I can import your existing data into the dashboard so you see historical trends from day one - not just data going forward. Your old records do not go to waste.",
  },
  {
    question: "Can my staff and manager use the dashboard too?",
    answer:
      "Yes. The dashboard supports multiple access levels. You as the owner see everything. A manager can see their section only. Staff can enter data without seeing financial figures. Access is controlled entirely by you.",
  },
];

const INCLUSIONS = [
  { label: "Custom dashboard design", note: "Built for your business" },
  { label: "Mobile-friendly layout", note: "Check from your phone" },
  { label: "Live data connection", note: "Always up to date" },
  { label: "WhatsApp daily summary", note: "No login required" },
  { label: "Revenue & sales charts", note: "Visual, not spreadsheets" },
  { label: "Staff performance view", note: "Track your team" },
  { label: "Stock/inventory alerts", note: "Never run out" },
  { label: "30-day support", note: "Post-launch help" },
  { label: "Training session", note: "For you and your team" },
];

const FEATURES = [
  {
    icon: "TrendingUp",
    title: "Live Revenue Tracking",
    body: "See today's sales vs yesterday and last week. Know if you are on track before the day ends - without opening a single spreadsheet.",
  },
  {
    icon: "Bell",
    title: "Daily WhatsApp Summary",
    body: "Every morning, your key numbers land in WhatsApp. No login, no app to open - just the numbers you need to start the day right.",
  },
  {
    icon: "Package",
    title: "Stock & Inventory Alerts",
    body: "Get notified when stock drops below your set threshold. Never run out of your top-selling items because nobody was watching the numbers.",
  },
  {
    icon: "Users",
    title: "Staff & Shift Reports",
    body: "See which staff handled the most orders and flag unusual patterns early. Small issues become visible before they become expensive problems.",
  },
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Discovery Call",
    body: "We map every number you currently track manually and identify what matters most.",
  },
  {
    n: "02",
    title: "Data Mapping",
    body: "I identify where your data lives today and the cleanest way to connect it.",
  },
  {
    n: "03",
    title: "Dashboard Design",
    body: "You review a prototype on your actual data before development starts.",
  },
  {
    n: "04",
    title: "Build & Test",
    body: "Fully built and tested with real data from your own business.",
  },
  {
    n: "05",
    title: "Handover",
    body: "Training session included. You own the dashboard completely - no ongoing dependency.",
  },
];

const PROBLEMS = [
  "You discover a slow month only when the accountant calls. By then, 30 days of opportunity are already gone.",
  "Staff tell you 'it was busy today' but you have no number to verify it - or compare it to last Tuesday.",
  "Excel sheets get out of date, break formulas, or sit on someone else's laptop. Your data is never where you need it.",
];

const ICON_MAP = {
  TrendingUp,
  Bell,
  Package,
  Users,
};

export default function BusinessDashboardPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(FAQS)} />

      {/* 1. HERO */}
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
            <span className="text-on-background font-medium">Business Dashboard</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              {/* Service chip */}
              <div className="rounded-shape-full bg-primary-container text-on-primary-container mb-6 inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold">
                <BarChart2 className="h-4 w-4" />
                Business Dashboard
              </div>

              <h1 className="text-on-background mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                See Your Entire Business At a Glance - Every Day
              </h1>

              <p className="text-on-surface-variant mb-8 text-base leading-relaxed">
                Stop managing your business on Excel. Get a live dashboard built for your
                specific operations that tracks sales, bookings, stock, and staff in one
                screen.
              </p>

              {/* 3 trust chips */}
              <div className="mb-8 flex flex-wrap gap-2">
                {["Built for Your Business", "No Excel Needed", "Works on Mobile"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-shape-full border-outline-variant bg-surface text-on-surface-variant inline-flex items-center gap-1.5 border px-3 py-1 text-xs font-semibold"
                    >
                      <CheckCircle2 className="text-primary h-3.5 w-3.5" />
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
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-shape-full border-outline-variant bg-surface text-on-background hover:bg-surface-container inline-flex items-center gap-2 border px-6 py-3 text-sm font-semibold transition-colors"
                >
                  View Case Studies →
                </Link>
              </div>
            </div>

            {/* Right column: MacBook browser mockup */}
            <div className="hidden justify-center lg:flex">
              <div className="rounded-shape-md border-outline-variant bg-surface w-full max-w-lg border p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-1.5">
                  <div className="bg-error h-2.5 w-2.5 rounded-full" />
                  <div className="bg-tertiary h-2.5 w-2.5 rounded-full" />
                  <div className="bg-primary h-2.5 w-2.5 rounded-full" />
                  <div className="bg-surface-container ml-2 h-4 w-full rounded" />
                </div>

                {/* Dashboard body inside */}
                <div className="space-y-4">
                  {/* Title bar */}
                  <div className="bg-primary-container flex items-center justify-between rounded-lg p-2 px-3">
                    <div className="text-on-primary-container text-xs font-bold">
                      BUSINESS METRICS
                    </div>
                    <div className="text-primary flex items-center text-[10px] font-semibold">
                      LIVE DATA{" "}
                      <span className="bg-error ml-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full"></span>
                    </div>
                  </div>

                  {/* 3 stat cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "TODAY'S SALES", val: "Live View" },
                      { label: "NEW BOOKINGS", val: "24" },
                      { label: "ACTIVE STAFF", val: "8/10" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-surface-container rounded-lg p-3"
                      >
                        <div className="text-on-surface-variant text-[9px] font-bold">
                          {stat.label}
                        </div>
                        <div className="text-primary mt-1 text-lg font-bold">
                          {stat.val}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bar chart */}
                  <div className="bg-surface-container flex h-32 items-end justify-between gap-2 overflow-hidden rounded-lg px-4 pt-10 pb-3">
                    {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                      <div
                        key={i}
                        className="bg-primary/40 w-full rounded-t-sm"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* 2 table rows */}
                  <div className="space-y-2">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="bg-surface-container-low flex justify-between rounded p-2 text-xs"
                      >
                        <div className="bg-on-surface-variant/20 h-2 w-20 rounded"></div>
                        <div className="bg-on-surface-variant/20 h-2 w-12 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Why Managing by Gut Feeling{" "}
              <span className="text-primary">Costs You Money</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROBLEMS.map((prob, i) => (
              <div
                key={i}
                className="rounded-shape-md border-outline-variant bg-surface-container-low border p-7"
              >
                <div className="rounded-shape-md bg-error-container mb-4 flex h-10 w-10 items-center justify-center shrink-0">
                  <X className="text-error h-5 w-5" />
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{prob}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT I BUILD */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-start">
            <div className="lg:sticky lg:top-20 lg:col-span-2">
              <p className="text-primary mb-2 text-xs font-bold tracking-widest uppercase">
                WHAT YOU GET
              </p>
              <h2 className="text-on-background mb-4 text-2xl font-bold md:text-3xl">
                A Unified View of Your Business
              </h2>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                I build custom dashboards that pull data from your existing tools or
                manual entries into one beautiful, easy-to-read interface.
              </p>
              <ul className="border-primary space-y-3 border-l-2 pl-4">
                {[
                  "Works on mobile or desktop",
                  "Live data syncing",
                  "No specialized training needed",
                  "Secure and private to you",
                ].map((item) => (
                  <li key={item} className="text-on-background text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
              {FEATURES.map((feature) => {
                const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP];
                return (
                  <div
                    key={feature.title}
                    className="rounded-shape-md border-outline-variant bg-surface border p-6 shadow-sm"
                  >
                    <div className="rounded-shape-md bg-primary-container mb-4 flex h-10 w-10 items-center justify-center">
                      <Icon className="text-primary h-5 w-5" />
                    </div>
                    <h3 className="text-on-background mb-2 text-sm font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-on-surface-variant text-xs leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-primary text-2xl font-bold md:text-3xl">
              How We Build Your Dashboard
            </h2>
          </div>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:gap-4">
            {PROCESS_STEPS.map((step, i, arr) => (
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
                  <div className="mx-1 mt-6 hidden h-px w-8 shrink-0 bg-on-primary/25 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT'S INCLUDED */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Everything You Need. <span className="text-primary">No Add-Ons.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {INCLUSIONS.map((item) => (
              <div
                key={item.label}
                className="rounded-shape-md bg-surface-container-low flex items-start gap-3 p-4"
              >
                <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <h3 className="text-on-background text-sm font-semibold">
                    {item.label}
                  </h3>
                  <p className="text-on-surface-variant mt-0.5 text-xs">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RESULTS + TESTIMONIAL */}
      <section className="bg-primary-container py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { stat: "2 hrs", label: "SAVED EVERY WEEK" },
              { stat: "Day 1", label: "IMMEDIATE ROI" },
              { stat: "4.9★", label: "CLIENT SATISFACTION" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-primary mb-1 text-5xl font-black">{item.stat}</p>
                <p className="text-on-primary-container mt-2 text-xs font-bold tracking-widest uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-shape-md bg-surface mx-auto mt-12 max-w-2xl p-8 text-center shadow-sm">
            <div className="mb-4 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="fill-tertiary text-tertiary h-4 w-4"
                />
              ))}
            </div>
            <p className="text-on-background mb-6 text-base leading-relaxed italic">
              &quot;We used to calculate our daily sales and inventory by hand every
              evening. Now, I just open my phone and see the entire operation live.
              It&apos;s completely changed how I run my business.&quot;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-primary-container text-on-primary-container flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                AK
              </div>
              <div className="text-left">
                <div className="text-on-background text-sm font-bold">Amit K.</div>
                <div className="text-on-surface-variant text-xs">Retail Store Owner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="rounded-shape-md border-primary/20 bg-surface mx-auto max-w-xl border p-12 text-center shadow-sm">
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

      {/* 8. FAQ */}
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

      {/* 9. CTA BANNER */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-on-primary mb-4 text-3xl font-bold md:text-4xl">
            Stop Running Your Business on Guesswork
          </h2>
          <p className="text-on-primary/80 mb-8 text-base">
            Let&apos;s build a dashboard that gives you total clarity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-shape-full text-primary inline-flex items-center gap-2 bg-surface px-8 py-4 font-bold transition-opacity hover:opacity-90"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
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

