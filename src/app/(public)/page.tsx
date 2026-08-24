import type { Metadata } from "next";
import portfolio from "@/data/portfolio.json";

import { SITE_URL } from "@/lib/site";

import JsonLd from "@/components/seo/JsonLd";

import {
  getLocalBusinessSchema,
  getPersonSchema,
  getWebsiteSchema,
} from "@/lib/seo/schemas";

import { HeroSection } from "@/components/home/HeroSection";
import { IndustryMarquee } from "@/components/home/IndustryMarquee";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedWorkSection } from "@/components/home/FeaturedWorkSection";
import { WhyEdvixoSection } from "@/components/home/WhyEdvixoSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Edvixo - Digital Solutions & Tech Talent for Businesses",
  description:
    "Edvixo helps businesses with custom websites, digital products, e-commerce, design, and tech support built for growth and conversion.",
  alternates: { canonical: SITE_URL },
};

const featuredProjects = Object.values(portfolio)
  .map((project) => {
    let localImage = project.coverImage;

    if (project.slug === "dental-clinic-growth-website") {
      localImage = "/images/portfolio/dental-clinic.png";
    }

    if (project.slug === "admissions-website-redesign") {
      localImage = "/images/portfolio/education.png";
    }

    if (project.slug === "restaurant-ordering-experience") {
      localImage = "/images/portfolio/restaurant.png";
    }

    return {
      _id: project._id,
      clientName: project.clientName,
      isClientConfidential: project.isClientConfidential,
      industry:
        project.clientIndustry ??
        project.industries?.[0] ??
        "Business",
      title: project.title,
      description: project.tagline,
      metrics: project.results ?? [],
      tech: (project.techStack ?? []).map((item) => item.name),
      slug: project.slug,
      coverImage: localImage,
      thumbnailImage: localImage,
      imageAlt: project.imageAlt,
    };
  });

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

      <WhyEdvixoSection />

      <ProcessSection />

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection />

      <CTABanner />
    </>
  );
}