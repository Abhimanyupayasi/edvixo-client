import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  CalendarDays,
  MapPin,
  Zap,
  BarChart2,
  CheckCircle2,
  XCircle,
  Phone,
  FileText,
  RefreshCw,
  PenLine,
  Rocket,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import { getFAQSchema, getLocalBusinessSchema } from "@/lib/seo/schemas";

export const dynamic = "force-static";
export const revalidate = false;

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Web Development Services - Websites, Stores & Dashboards",
  description:
    "Custom websites, online stores, booking systems, local SEO, and business dashboards for businesses worldwide. Freelance web developer Sapnendra Jaiswal. Free quote.",
  keywords: [
    "business website design india",
    "restaurant website development india",
    "clinic booking website",
    "booking system website india",
    "custom website development india",
    "small business website india",
    "professional website for business",
    "e-commerce website developer",
    "web development services",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    url: `${SITE_URL}/services`,
    title: "Web Development Services - Websites, Stores & Dashboards",
    description:
      "Custom websites, online stores, booking systems, local SEO, and business dashboards for businesses worldwide.",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Website Services for Modern Businesses - Sapnendra Jaiswal",
      },
    ],
  },
};

// ── Service Data ──────────────────────────────────────────────────────────────
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  whoItsFor: string[];
  whatYouGet: string[];
  startingFrom: string;
  slug: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Business Website",
    description:
      "A professional, mobile-friendly website that makes your business look credible and trustworthy online. Built to load fast, rank on Google, and turn visitors into customers. Most local businesses see a significant increase in enquiries within the first 60 days.",
    whoItsFor: ["Restaurants", "Clinics", "Coaching", "Retail", "Any Business"],
    whatYouGet: [
      "Custom design matching your brand",
      "Mobile-optimised on all devices",
      "Google-ready with basic SEO setup",
      "Contact form + WhatsApp integration",
    ],
    startingFrom: "Custom Quote",
    slug: "business-websites",
  },
  {
    icon: ShoppingCart,
    title: "Online Store",
    description:
      "A complete e-commerce website where customers can browse products, add to cart, and pay online - directly through your own website. You keep 100% of every sale with no marketplace commission.",
    whoItsFor: ["Retail Shops", "Manufacturers", "Wholesalers", "Food Brands"],
    whatYouGet: [
      "Product catalogue with search and filters",
      "Online payment via secure gateways",
      "Order management dashboard",
      "Inventory tracking built in",
    ],
    startingFrom: "Custom Quote",
    slug: "online-stores",
  },
  {
    icon: CalendarDays,
    title: "Online Booking System",
    description:
      "Let your customers book appointments online 24/7 - even while you're sleeping. Reduce missed calls, eliminate scheduling confusion, and send automatic reminders so clients never forget.",
    whoItsFor: ["Clinics", "Salons", "Gyms", "Coaching", "Legal Firms"],
    whatYouGet: [
      "Real-time availability calendar",
      "Automated WhatsApp and SMS reminders",
      "Online advance payment option",
      "Admin panel to manage all bookings",
    ],
    startingFrom: "Custom Quote",
    slug: "booking-systems",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Presence",
    description:
      "Get found when customers search for your services on Google - in your city, your state, and worldwide. I optimise your Google Business Profile and build location pages so your business appears before competitors in search results.",
    whoItsFor: ["Any Local Business", "Multi-branch Businesses", "New Businesses"],
    whatYouGet: [
      "Google Business Profile setup and optimisation",
      "Local keyword targeting for your city",
      "Location pages added to your website",
      "Monthly ranking progress report",
    ],
    startingFrom: "Custom Quote",
    slug: "local-seo",
  },
  {
    icon: Zap,
    title: "Website Redesign & Speed Fix",
    description:
      "If your current website looks outdated, loads slowly, or isn't showing on Google - I'll fix it. A redesign makes it look better and work better: faster loading, better mobile experience, more enquiries.",
    whoItsFor: ["Any Existing Business", "Businesses Losing to Competitors"],
    whatYouGet: [
      "Full visual redesign to current standards",
      "Core Web Vitals performance optimisation",
      "Mobile experience complete overhaul",
      "Before and after performance report",
    ],
    startingFrom: "Custom Quote",
    slug: "website-redesign",
  },
  {
    icon: BarChart2,
    title: "Business Dashboard",
    description:
      "A private dashboard showing your business performance in one place - enquiries, orders, bookings, and revenue. No more checking five different apps. Everything your business generates on one screen.",
    whoItsFor: ["Mid-Size Businesses", "Multi-branch Firms", "Growing Businesses"],
    whatYouGet: [
      "Custom metrics relevant to your business",
      "Real-time data that updates automatically",
      "Access for multiple team members",
      "Mobile-friendly for checking on the go",
    ],
    startingFrom: "Custom Quote",
    slug: "dashboards",
  },
];

// ── Comparison Table Rows ─────────────────────────────────────────────────────
const comparisonRows = [
  "Designed for your specific business",
  "Loads fast on mobile networks",
  "No monthly platform subscription fee",
  "You own the code completely",
  "Connects to payments, bookings, WhatsApp",
  "Ranks better on local Google search",
  "Looks unique - not like every other site",
];

// ── Process Steps ─────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    icon: Phone,
    title: "Free Call",
    description: "30 mins about your business",
    time: "Day 1",
  },
  {
    number: "02",
    icon: FileText,
    title: "Clear Proposal",
    description: "Clear scope in writing",
    time: "Day 2–3",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Regular Updates",
    description: "Weekly progress reports",
    time: "Week 1–4",
  },
  {
    number: "04",
    icon: PenLine,
    title: "Your Feedback",
    description: "Changes until you love it",
    time: "Week 4–5",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Support",
    description: "30 days free support",
    time: "Week 5–6",
  },
];

const SERVICES_FAQS = [
  {
    question: "How much does a website cost?",
    answer:
      "Website costs vary by complexity. I provide custom quotes after understanding your requirements, timeline, and scope. Contact me on WhatsApp for a free estimate.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website takes 10 to 14 days from start to launch. Websites with complex features like online ordering or booking systems take 3 to 4 weeks. I provide weekly progress updates throughout.",
  },
  {
    question: "Do you build websites for restaurants?",
    answer:
      "Yes. I specialize in restaurant websites with online menu, ordering system, WhatsApp integration, and Google Maps embed. Restaurants using my websites typically reduce their third-party delivery platform commissions significantly.",
  },
  {
    question: "Will my website appear on Google?",
    answer:
      "Yes. Every website I build includes basic SEO setup: Google Search Console submission, sitemap, page speed optimization, and local business schema. Most clients see their first Google traffic within 4 to 8 weeks of launch.",
  },
  {
    question: "Do you work with clients worldwide?",
    answer:
      "Yes. I work with clients worldwide entirely remotely. All meetings are on Google Meet or WhatsApp video call. I have clients in London, Dubai, Singapore, New York, and many other cities globally.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 - ServicesHero
// ─────────────────────────────────────────────────────────────────────────────
function ServicesHero() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        {/* Overline */}
        <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-4">
          Services
        </p>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-background mb-6 max-w-2xl mx-auto leading-tight">
          Everything Your Business
          <span className="text-primary"> Needs Online</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-body-large text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          From a simple business website to a full online store with payments
          and bookings - I build exactly what your business needs, nothing more,
          nothing less.
        </p>

        {/* Trust chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {["Custom Quote in 24 Hours", "No tech jargon", "30-day support included"].map(
            (label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-shape-full bg-surface-container border border-outline-variant text-sm font-medium text-on-surface-variant"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 - ServicesGrid
// ─────────────────────────────────────────────────────────────────────────────
function ServicesGrid() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section label */}
        <p className="uppercase tracking-widest text-xs font-semibold text-primary">
          What I Build
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.slug}
                className="bg-surface-container-lowest rounded-shape-md shadow-sm p-5 md:p-6 lg:p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Top row: icon + title */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-on-primary-container" />
                  </div>
                  <h3 className="text-headline-small font-semibold text-on-background pt-2">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-body-medium text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>

                {/* Who it's for */}
                <div>
                  <p className="text-label-medium text-on-surface-variant mb-2">
                    Who it&apos;s for:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.whoItsFor.map((who) => (
                      <span
                        key={who}
                        className="inline-flex px-3 py-1 rounded-shape-full bg-secondary-container text-on-secondary-container text-xs font-medium"
                      >
                        {who}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What you get */}
                <ul className="space-y-2">
                  {service.whatYouGet.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-body-medium text-on-surface-variant">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Pricing band */}
                <div className="flex items-center justify-between bg-surface-container rounded-shape-md px-4 py-3 mt-auto">
                  <span className="text-xs text-on-surface-variant">
                    {service.startingFrom}
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    Response in 24 hours
                  </span>
                </div>

                {/* CTA Button */}
                <Link href={`/services/${service.slug}`}>
                  <button className="w-full py-3 rounded-shape-md bg-primary-container text-on-primary-container font-semibold text-sm text-center hover:bg-primary hover:text-on-primary transition-colors duration-200 cursor-pointer">
                    Learn More &rarr;
                  </button>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 - WhyCustomSection
// ─────────────────────────────────────────────────────────────────────────────
function WhyCustomSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-4">
            Why Custom Built
          </p>
          <h2 className="text-headline-large font-semibold text-on-background">
            Why Not Just Use Wix or a Template?
          </h2>
        </div>

        {/* Comparison table card */}
        <div className="bg-surface rounded-shape-md shadow-md overflow-hidden max-w-3xl mx-auto">
          <div className="overflow-x-auto md:overflow-visible">
            <table className="w-full min-w-125 md:min-w-0">
            <thead className="bg-surface-container-high">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-on-surface-variant">
                  Feature
                </th>
                <th className="text-center px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 bg-primary-container text-on-primary-container text-sm font-semibold px-3 py-1 rounded-shape-full">
                    <CheckCircle2 className="w-4 h-4" />
                    Custom Built by Me
                  </span>
                </th>
                <th className="text-center px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 bg-surface-container text-on-surface-variant text-sm font-semibold px-3 py-1 rounded-shape-full">
                    DIY Website Builders
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row}
                  className={
                    index % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface"
                  }
                >
                  <td className="px-6 py-4 text-sm font-medium text-on-background">
                    {row}
                  </td>
                  <td className="text-center px-6 py-4">
                    <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center px-6 py-4">
                    <XCircle className="w-5 h-5 text-error mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 - ProcessReminder
// ─────────────────────────────────────────────────────────────────────────────
function ProcessReminder() {
  return (
    <section className="bg-surface py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-headline-medium font-semibold text-on-background max-w-lg mx-auto text-center mb-12">
          Every Service Follows the Same Simple Process
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4">
          {processSteps.map((step, index) => {
            const StepIcon = step.icon;
            const isLast = index === processSteps.length - 1;
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center flex-1 relative"
              >
                {/* Step number circle */}
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm z-10">
                  {step.number}
                </div>

                {/* Connector line */}
                {!isLast && (
                  <div className="hidden md:block absolute top-5 left-1/2 w-full h-px bg-outline-variant" />
                )}

                {/* Icon */}
                <StepIcon className="w-6 h-6 text-primary mt-4" />

                {/* Title */}
                <p className="font-semibold text-sm text-on-background mt-2">
                  {step.title}
                </p>

                {/* Description */}
                <p className="text-xs text-on-surface-variant mt-1 max-w-28">
                  {step.description}
                </p>

                {/* Time chip */}
                <span className="mt-3 px-3 py-1 rounded-shape-full bg-secondary-container text-on-secondary-container text-xs font-medium">
                  {step.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 5 - ServicesCTA
// ─────────────────────────────────────────────────────────────────────────────
function ServicesCTA() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-medium text-white leading-tight">
          Not Sure Which Service You Need?
        </h2>

        {/* Body */}
        <p className="text-white leading-relaxed mt-4">
          That&apos;s completely normal. Most business owners aren&apos;t sure
          either - that&apos;s what the free consultation call is for. Tell me
          about your business and I&apos;ll recommend exactly what you need.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a href="/contact">
            <button className="px-8 py-4 rounded-shape-full bg-white text-primary font-semibold hover:bg-primary-container transition-colors duration-200 cursor-pointer">
              Book Free Consultation
            </button>
          </a>
          <a href="https://wa.me/919685238884">
            <button className="px-8 py-4 rounded-shape-full bg-tertiary-container text-on-tertiary-container font-semibold hover:opacity-90 transition-opacity duration-200 cursor-pointer">
              Chat on WhatsApp &rarr;
            </button>
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          <span className="flex items-center gap-2 text-sm text-primary-container">
            <Phone className="w-4 h-4" />
            +91 96852 38884
          </span>
          <span className="flex items-center gap-2 text-sm text-primary-container">
            <Clock className="w-4 h-4" />
            Reply within 4 hours
          </span>
          <span className="flex items-center gap-2 text-sm text-primary-container">
            <MapPin className="w-4 h-4" />
            Remote · Worldwide
          </span>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={getLocalBusinessSchema()} />
      <JsonLd data={getFAQSchema(SERVICES_FAQS)} />
      <ServicesHero />
      <ServicesGrid />
      <WhyCustomSection />
      <ProcessReminder />
      <ServicesCTA />
    </main>
  );
}

