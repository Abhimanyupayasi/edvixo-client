import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Package,
  CreditCard,
  LayoutDashboard,
  Smartphone,
  Bell,
  Search,
  Boxes,
  Truck,
  Users,
  Tag,
  BarChart2,
  Zap,
  DollarSign,
  ShieldOff,
  Swords,
  Star,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getFAQSchema } from "@/lib/seo/schemas";
import { SITE_URL } from "@/app/layout";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Online Store Development Services",
  description:
    "Custom ecommerce websites that let you sell online without paying ongoing platform commissions. Free quote within 24 hours.",
  alternates: { canonical: `${SITE_URL}/services/online-stores` },
  openGraph: {
    url: `${SITE_URL}/services/online-stores`,
    title: "Online Store Development Services - Sapnendra Jaiswal",
    description:
      "Sell directly to customers with secure digital payments and no marketplace commissions. Custom online stores for businesses worldwide.",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    question: "How do I receive payments from customers?",
    answer:
      "We integrate secure payment gateways. Money is settled directly into your linked bank account within 1–2 days.",
  },
  {
    question: "Is it difficult to manage the store myself?",
    answer:
      "Not at all. I build an easy-to-use dashboard. If you use Facebook or WhatsApp, you can manage this store. I also provide a 1-hour training call.",
  },
  {
    question: "Do I need a GST number to start?",
    answer:
      "For starting, you can use your individual savings account for payments. However for long-term business and certain payment limits, a GST/Current account is recommended.",
  },
  {
    question: "Can I sell products with different sizes and variants?",
    answer:
      "Yes. The product catalogue supports variants - size, colour, material, or any custom option you define. Each variant can have its own price and stock count.",
  },
];

const FEATURES_MAIN = [
  {
    icon: Package,
    title: "Product Catalogue",
    body: "Beautifully displayed products with variants, stock management, and bulk import.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments & COD",
    body: "Secure payment gateways for cards, wallets, and cash on delivery.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    body: "Manage orders, update status, track revenue, and export data in one place.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimised",
    body: "70% of your sales happen on mobile. Your store will look stunning on every screen.",
  },
];

const ALL_FEATURES = [
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    body: "Secure and fast checkout with all payment modes.",
  },
  {
    icon: Bell,
    title: "WhatsApp Alerts",
    body: "Auto notifications for new orders on WhatsApp.",
  },
  {
    icon: Search,
    title: "SEO Optimised",
    body: "Rank higher on Google with proper meta tags.",
  },
  {
    icon: Boxes,
    title: "Stock Management",
    body: "Automatic inventory reduction after each sale.",
  },
  {
    icon: Truck,
    title: "Shipping Calculator",
    body: "Weight-based shipping charges for every order.",
  },
  {
    icon: Users,
    title: "Customer Accounts",
    body: "Allow users to save delivery and track past orders.",
  },
  {
    icon: Tag,
    title: "Discount Engine",
    body: "Promo codes, auto discounts, and flash sale pricing.",
  },
  {
    icon: BarChart2,
    title: "Sales Reports",
    body: "Export calls on monthly sales and tax data.",
  },
  {
    icon: Zap,
    title: "Fast Loading",
    body: "Speed optimised to reduce cart abandonment.",
  },
];

export default function OnlineStoresPage() {
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
            <span className="text-on-background font-medium">Online Store</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* ── Left: Copy ── */}
            <div>
              {/* Service chip */}
              <div className="rounded-shape-full bg-tertiary-container text-on-tertiary-container mb-6 inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold">
                <ShoppingCart className="h-4 w-4" />
                Online Store
              </div>

              <h1 className="text-on-background mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                Sell Directly.{" "}
                <span className="block">
                  Keep{" "}
                  <span className="text-primary decoration-primary/40 underline decoration-4 underline-offset-4">
                    100%
                  </span>{" "}
                  of Every Sale.
                </span>
              </h1>

              <p className="text-on-surface-variant mb-6 text-base leading-relaxed">
                Your own online store means customers pay you directly - no marketplace
                commissions. Full control over your brand, customers, and profits.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-shape-full bg-primary text-on-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  Start Your Store Today
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-shape-full border-outline-variant bg-surface text-on-background hover:bg-surface-container inline-flex items-center gap-2 border px-6 py-3 text-sm font-semibold transition-colors"
                >
                  View Demo →
                </Link>
              </div>
            </div>

            {/* ── Right: Store mockup ── */}
            <div className="relative hidden justify-center lg:flex">
              <div className="bg-surface rounded-shape-md border-outline-variant w-full max-w-md overflow-hidden border shadow-lg">
                {/* Product grid mockup */}
                <div className="bg-tertiary-container/40 p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Product card 1 - warm terracotta */}
                    <div className="bg-tertiary-container rounded-shape-md flex aspect-3/4 flex-col overflow-hidden">
                      <div className="bg-tertiary-container/80 flex-1" />
                      <div className="bg-surface p-2">
                        <div className="bg-surface-container-high mb-1 h-2.5 w-3/4 rounded" />
                        <div className="bg-primary h-3 w-1/2 rounded" />
                      </div>
                    </div>
                    {/* Product card 2 */}
                    <div className="bg-surface-container rounded-shape-md flex aspect-3/4 flex-col overflow-hidden">
                      <div className="bg-surface-container-high flex-1" />
                      <div className="bg-surface p-2">
                        <div className="bg-surface-container-high mb-1 h-2.5 w-3/4 rounded" />
                        <div className="bg-primary h-3 w-1/2 rounded" />
                      </div>
                    </div>
                    {/* Product card 3 */}
                    <div className="bg-surface-container rounded-shape-md flex aspect-3/4 flex-col overflow-hidden">
                      <div className="bg-surface-container-high flex-1" />
                      <div className="bg-surface p-2">
                        <div className="bg-surface-container-high mb-1 h-2.5 w-3/4 rounded" />
                        <div className="bg-primary h-3 w-1/2 rounded" />
                      </div>
                    </div>
                    {/* Product card 4 */}
                    <div className="bg-tertiary-container/60 rounded-shape-md flex aspect-3/4 flex-col overflow-hidden">
                      <div className="bg-tertiary-container/80 flex-1" />
                      <div className="bg-surface p-2">
                        <div className="bg-surface-container-high mb-1 h-2.5 w-3/4 rounded" />
                        <div className="bg-primary h-3 w-1/2 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Revenue badge strip */}
                <div className="bg-surface border-outline-variant flex items-center justify-between border-t px-4 py-3">
                  <div>
                    <p className="text-on-surface-variant text-xs">Revenue Today</p>
                    <p className="text-primary text-lg font-black">Live Sales</p>
                  </div>
                  <div className="text-primary flex items-center gap-1 text-xs font-semibold">
                    <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                    Live
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
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              The High Cost of Marketplaces
            </h2>
            <p className="text-on-surface-variant mt-3 text-sm">
              Relying solely on Amazon, Flipkart, or Meesho is hurting your business more
              than you think.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                Icon: DollarSign,
                iconBg: "bg-error-container",
                iconColor: "text-error",
                title: "Heavy Commissions",
                body: "Platforms take 10%–30% of your sale value in commissions and fees, eating into your net profits.",
              },
              {
                Icon: ShieldOff,
                iconBg: "bg-secondary-container",
                iconColor: "text-secondary",
                title: "No Data Ownership",
                body: "You never see your customers' details or phone number. You can't market to them directly or build loyalty.",
              },
              {
                Icon: Swords,
                iconBg: "bg-tertiary-container",
                iconColor: "text-tertiary",
                title: "Competition Wars",
                body: "The platform shows your competitor's ads right on your product page. It is a constant race to the bottom price.",
              },
            ].map((item) => {
              const ProblemIcon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="bg-surface-container-low rounded-shape-md border-outline-variant border p-6 md:p-8"
                >
                  <div className={`w-10 h-10 rounded-shape-md ${item.iconBg} flex items-center justify-center mb-4 shrink-0`}>
                    <ProblemIcon className={`w-5 h-5 ${item.iconColor}`} />
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
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
            {/* Left: feature list */}
            <div className="lg:col-span-3">
              <h2 className="text-on-background mb-2 text-2xl font-bold md:text-5xl">
                Everything you need to{" "}
                <span className="text-primary decoration-primary/40 underline decoration-4 underline-offset-4">
                  scale your brand.
                </span>
              </h2>
              <p className="text-on-surface-variant mb-8 text-sm">
                A complete commerce solution for growing brands.
              </p>

              <div className="space-y-5">
                {FEATURES_MAIN.map((f) => {
                  const FeatureIcon = f.icon;
                  return (
                    <div key={f.title} className="flex items-start gap-4">
                      <div className="rounded-shape-md bg-primary-container mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center">
                        <FeatureIcon className="text-primary h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-on-background mb-0.5 text-sm font-semibold">
                          {f.title}
                        </p>
                        <p className="text-on-surface-variant text-xs leading-relaxed">
                          {f.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: fashion/product image mockup */}
            <div className="hidden justify-center lg:col-span-2 lg:flex">
              <div className="bg-surface-container-low rounded-shape-md border-outline-variant w-full max-w-xs overflow-hidden border shadow-sm">
                {/* Simulated product image area */}
                <div className="bg-surface-container-high relative flex aspect-3/4 items-center justify-center">
                  <div className="bg-tertiary-container rounded-shape-md h-56 w-48" />
                  <div className="bg-surface rounded-shape-md absolute right-4 bottom-4 px-3 py-2 shadow-md">
                    <p className="text-on-surface-variant text-xs">Price</p>
                    <p className="text-primary text-sm font-bold">Top Seller</p>
                  </div>
                </div>
                <div className="space-y-2 p-4">
                  <div className="bg-surface-container-high h-3 w-3/4 rounded" />
                  <div className="bg-surface-container h-2.5 w-1/2 rounded" />
                  <div className="mt-3 flex gap-2">
                    {["S", "M", "L", "XL"].map((s) => (
                      <span
                        key={s}
                        className="border-outline-variant text-on-surface-variant flex h-7 w-7 items-center justify-center rounded border text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="bg-primary rounded-shape-full mt-3 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-primary text-2xl font-bold md:text-3xl">
              The 5-Step Launch Process
            </h2>
            <p className="text-on-primary/70 mt-2 text-sm">
              A streamlined process designed for busy business owners.
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:gap-4">
            {[
              {
                n: "1",
                title: "Free Call",
                body: "We discuss your goals and product catalogue.",
              },
              {
                n: "2",
                title: "Design Approval",
                body: "I show you the visual mockup for approval.",
              },
              {
                n: "3",
                title: "Development",
                body: "Build the store with full e-commerce functionality.",
              },
              {
                n: "4",
                title: "Your Review",
                body: "You test the store and payment flow.",
              },
              { n: "5", title: "Launch", body: "We go live and take your first order." },
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

      {/* ── ALL-INCLUSIVE FEATURES ───────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              All-Inclusive Features
            </h2>
            <p className="text-on-surface-variant mt-2 text-sm">
              Everything you need from payment to delivery tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {ALL_FEATURES.map((item) => {
              const AllIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-shape-md bg-surface-container-low border-outline-variant flex items-start gap-3 border p-6"
                >
                  <div className="rounded-shape-sm bg-primary-container mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center">
                    <AllIcon className="text-primary h-4 w-4" />
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

      {/* ── RESULTS / SOCIAL PROOF ───────────────────────────────────────── */}
      <section className="bg-primary-container py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { stat: "3×", label: "PROFIT MARGIN INCREASE" },
              { stat: "10 Days", label: "AVERAGE LAUNCH TIME" },
              { stat: "4.9", label: "CLIENT SATISFACTION", suffix: "★" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-primary mb-1 text-4xl font-black md:text-5xl">
                  {item.stat}
                  {item.suffix && (
                    <Star className="inline-block w-8 h-8 fill-tertiary text-tertiary mb-1" />
                  )}
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
          <div className="bg-primary rounded-shape-md relative mx-auto max-w-sm overflow-hidden p-10 text-center shadow-lg">
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
              className="block w-full py-4 rounded-shape-full bg-white text-primary font-bold text-center text-sm hover:opacity-90 transition-opacity mb-3"
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
            Stop paying commissions and start building your own brand asset today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-shape-full text-primary inline-flex items-center gap-2 bg-surface px-8 py-4 font-bold transition-opacity hover:opacity-90"
            >
              Book a Strategy Call
            </Link>
            <a
              href="https://wa.me/919685238884"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-shape-full text-on-primary inline-flex items-center gap-2 border-2 border-on-primary/40 px-8 py-4 font-bold transition-colors hover:bg-on-primary/10"
            >
              WhatsApp Me →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
