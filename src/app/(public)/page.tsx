import type { Metadata } from "next";
import { SITE_URL } from "../layout";
import JsonLd from "@/components/seo/JsonLd";
import {
  getLocalBusinessSchema,
  getPersonSchema,
  getWebsiteSchema,
} from "@/lib/seo/schemas";
import { HeroSection } from "@/components/public/home/HeroSection";
import { IndustryMarquee } from "@/components/public/IndustryMarquee";
import { ServicesSection } from "@/components/public/home/ServicesSection";
import { FeaturedWorkSection } from "@/components/public/home/FeaturedWorkSection";
import { ProcessSection } from "@/components/public/home/ProcessSection";
import { TestimonialsSection } from "@/components/public/home/TestimonialsSection";
import { CTABanner } from "@/components/public/home/CTABanner";

export const metadata: Metadata = {
  title: "Edvixo - Digital Solutions & Tech Talent for Businesses",
  description:
    "Edvixo helps businesses with custom websites, digital products, e-commerce, design, and tech support built for growth and conversion.",
  alternates: { canonical: SITE_URL },
};

const featuredProjects = [
  {
    _id: "project-1",
    clientName: "Bluebird Dental",
    isClientConfidential: false,
    industry: "Healthcare",
    title: "Dental Clinic Growth Website",
    description:
      "A premium website for a dental clinic focused on appointments, trust, and treatment visibility.",
    metrics: [
      { value: "3x", label: "More Leads" },
      { value: "2.4x", label: "Faster Booking" },
      { value: "48%", label: "Higher Conversion" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "SEO"],
    slug: "dental-clinic-growth-website",
    liveUrl: "https://example.com",
    coverImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dental clinic website showcase",
    completedAt: "2025-01-15",
  },
  {
    _id: "project-2",
    clientName: "Saffron Kitchen",
    isClientConfidential: false,
    industry: "Hospitality",
    title: "Restaurant Ordering Experience",
    description:
      "Professional restaurant website built to improve online ordering and local search visibility.",
    metrics: [
      { value: "41%", label: "More Orders" },
      { value: "22%", label: "Lower Bounce" },
      { value: "7 days", label: "Launch" },
    ],
    tech: ["Next.js", "CMS", "Analytics", "Design System"],
    slug: "restaurant-ordering-experience",
    liveUrl: "https://example.com",
    coverImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Restaurant website showcase",
    completedAt: "2025-03-10",
  },
  {
    _id: "project-3",
    clientName: "BrightPath Academy",
    isClientConfidential: false,
    industry: "Education",
    title: "Admissions Website Redesign",
    description:
      "A simplified admissions funnel built to handle course inquiries and lead collection confidently.",
    metrics: [
      { value: "2x", label: "More Enquiries" },
      { value: "94%", label: "Mobile Friendly" },
      { value: "15%", label: "More Signups" },
    ],
    tech: ["React", "Next.js", "Forms", "Performance"],
    slug: "admissions-website-redesign",
    liveUrl: "https://example.com",
    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Education website showcase",
    completedAt: "2025-05-22",
  },
];

const testimonials = [
  {
    _id: "review-1",
    stars: 5,
    text: "The process was clear and the final website immediately looked more premium than our old one. We started getting inquiries within days.",
    name: "Aarav Mehta",
    designation: "Owner",
    business: "Bluebird Dental",
    avatar: "AM",
  },
  {
    _id: "review-2",
    stars: 5,
    text: "We needed a business website that felt trustworthy and easy to update. The end result checked every box and the launch was smooth.",
    name: "Nisha Gupta",
    designation: "Founder",
    business: "Saffron Kitchen",
    avatar: "NG",
  },
  {
    _id: "review-3",
    stars: 5,
    text: "The site gave us a much cleaner sales process. It feels fast, polished, and much easier for parents to understand our services.",
    name: "Rohit Sharma",
    designation: "Director",
    business: "BrightPath Academy",
    avatar: "RS",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={getPersonSchema()} />
      <JsonLd data={getLocalBusinessSchema()} />
      <JsonLd data={getWebsiteSchema()} />
      <HeroSection />
      <IndustryMarquee />
      <ServicesSection />
      <FeaturedWorkSection projects={featuredProjects} />
      <ProcessSection />
      <TestimonialsSection testimonials={testimonials} />
      <CTABanner />
    </>
  );
}
