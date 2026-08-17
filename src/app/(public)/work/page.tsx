import type { Metadata } from "next";
import { Phone, Clock, MapPin } from "lucide-react";
import PortfolioGrid from "@/components/public/work/PortfolioGrid";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import { getPortfolioListSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Case Studies - Edvixo Digital Solutions",
  description:
    "Explore Edvixo case studies and business outcomes across websites, digital products, and growth-focused technology projects.",
  alternates: { canonical: `${SITE_URL}/work` },
};

type PortfolioItem = {
  _id: string;
  isFeatured?: boolean;
  industries?: string[];
  title: string;
  slug: string;
  tagline: string;
  clientIndustry?: string;
  isClientConfidential?: boolean;
  clientName?: string;
  coverImage?: string;
  thumbnailImage?: string;
  imageAlt?: string;
  liveUrl?: string;
  completedAt?: string | Date;
  results?: Array<{ value: string; label: string }>;
  techStack?: Array<{ name: string }>;
};

const portfolioItems: PortfolioItem[] = [
  {
    _id: "work-1",
    title: "Dental Clinic Growth Website",
    slug: "dental-clinic-growth-website",
    tagline: "A premium clinic website designed to increase trust and conversion from organic search.",
    isFeatured: true,
    clientName: "Bluebird Dental",
    clientIndustry: "Healthcare",
    isClientConfidential: false,
    coverImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dental clinic website",
    thumbnailImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    results: [
      { value: "3x", label: "More Leads" },
      { value: "48%", label: "Higher Conversion" },
      { value: "2.4x", label: "Booking Speed" },
    ],
    techStack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "SEO" }],
    industries: ["Healthcare", "Service Business"],
    completedAt: "2025-01-15",
    liveUrl: "https://example.com",
  },
  {
    _id: "work-2",
    title: "Restaurant Ordering Experience",
    slug: "restaurant-ordering-experience",
    tagline: "Built to help more local diners order online and discover the restaurant organically.",
    isFeatured: false,
    clientName: "Saffron Kitchen",
    clientIndustry: "Hospitality",
    isClientConfidential: false,
    coverImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Restaurant website",
    thumbnailImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    results: [
      { value: "41%", label: "More Orders" },
      { value: "22%", label: "Lower Bounce" },
      { value: "7 days", label: "Launch" },
    ],
    techStack: [{ name: "Next.js" }, { name: "CMS" }, { name: "Analytics" }],
    industries: ["Hospitality", "Local Business"],
    completedAt: "2025-03-10",
    liveUrl: "https://example.com",
  },
  {
    _id: "work-3",
    title: "Admissions Website Redesign",
    slug: "admissions-website-redesign",
    tagline: "A cleaner online admissions funnel for educational institutes and coaching businesses.",
    isFeatured: false,
    clientName: "BrightPath Academy",
    clientIndustry: "Education",
    isClientConfidential: false,
    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Education website",
    thumbnailImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    results: [
      { value: "2x", label: "More Enquiries" },
      { value: "94%", label: "Mobile Friendly" },
      { value: "15%", label: "More Signups" },
    ],
    techStack: [{ name: "React" }, { name: "Next.js" }, { name: "Forms" }],
    industries: ["Education", "Local Business"],
    completedAt: "2025-05-22",
    liveUrl: "https://example.com",
  },
];

function WorkHero() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="uppercase tracking-widest text-xs font-semibold text-primary mb-4">Our Work</p>
        <h1 className="text-4xl md:text-5xl font-bold text-on-background mb-6 max-w-2xl mx-auto leading-tight">
          Websites Built for <span className="text-primary">Real Businesses</span>
        </h1>
        <p className="text-body-large text-on-surface-variant leading-relaxed max-w-xl mx-auto mb-10">
          Every project below solved a specific business problem. Browse by industry to see work relevant to your business.
        </p>
        <div className="flex flex-wrap justify-center gap-12 mt-8">
          {[
            { value: "15+", label: "Projects Delivered" },
            { value: "7", label: "Industries Served" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-on-surface-variant mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCTA() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white leading-tight">Ready to Be the Next Success Story?</h2>
        <p className="text-primary-container leading-relaxed mt-4">
          Let&apos;s transform your business with a professional digital presence that converts visitors into loyal customers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a href="/contact">
            <button className="px-8 py-4 rounded-shape-full bg-white text-primary font-semibold hover:bg-primary-container transition-colors duration-200 cursor-pointer">
              Book Free Call
            </button>
          </a>
          <a href="https://wa.me/919685238884">
            <button className="px-8 py-4 rounded-shape-full bg-tertiary-container text-on-tertiary-container font-semibold hover:opacity-90 transition-opacity duration-200 cursor-pointer">
              Chat on WhatsApp →
            </button>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          <span className="flex items-center gap-2 text-sm text-primary-container"><Phone className="w-4 h-4" /> +91 96852 38884</span>
          <span className="flex items-center gap-2 text-sm text-primary-container"><Clock className="w-4 h-4" /> Reply within 4 hours</span>
          <span className="flex items-center gap-2 text-sm text-primary-container"><MapPin className="w-4 h-4" /> Remote · Worldwide</span>
        </div>
      </div>
    </section>
  );
}

export default function WorkPage() {
  const allIndustries = Array.from(new Set(portfolioItems.flatMap((item) => item.industries ?? []))).sort();

  return (
    <main>
      <JsonLd
        data={getPortfolioListSchema(
          portfolioItems.map((item) => ({
            title: item.title,
            slug: item.slug,
            excerpt: item.tagline,
            coverImage: item.coverImage,
          }))
        )}
      />
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", url: "https://edvixo.com" },
        { name: "Case Studies", url: "https://edvixo.com/work" },
      ])} />
      <WorkHero />
      <PortfolioGrid items={portfolioItems} industries={allIndustries} />
      <WorkCTA />
    </main>
  );
}

