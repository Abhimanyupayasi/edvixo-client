import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  CalendarDays,
  MapPin,
  Zap,
  BarChart2,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

export function ServicesSection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-2">
            WHAT WE BUILD
          </p>
          <h2 className="text-3xl md:text-headline-large text-on-background mb-4 max-w-lg leading-tight font-bold">
            Digital Solutions Built for Growth
          </h2>
          <p className="text-base md:text-body-large text-on-surface-variant max-w-lg leading-relaxed">
            Every business has unique needs. We design and build tailored digital systems
            that help teams move faster, convert better, and scale with confidence.
          </p>
        </div>

        {/* Cards grid (same styling as /services page, but 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.slug}
                className="bg-surface-container-lowest rounded-shape-md shadow-sm p-5 md:p-6 lg:p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-outline-variant"
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
                <Link 
                  href={`/services/${service.slug}`}
                  title={`${service.title} - Web development services by Sapnendra Jaiswal`}
                >
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
