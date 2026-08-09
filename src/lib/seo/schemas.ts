import { SITE_AUTHOR, SITE_URL } from "@/app/layout";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Edvixo",
    url: "https://edvixo.com",
    logo: "https://edvixo.com/logo.png",
    image: "https://edvixo.com/og-home.jpg",
    description:
      "Edvixo is a digital solutions company helping businesses grow with custom websites, digital products, design, and technical support.",
    sameAs: [
      "https://www.linkedin.com/company/edvixo",
      "https://www.instagram.com/edvixo",
    ],
    knowsAbout: [
      "Web Development",
      "Digital Solutions",
      "UI/UX Design",
      "E-commerce",
      "SEO",
      "Business Automation",
      "Software Development",
      "Digital Transformation",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Remote",
      addressCountry: "Worldwide",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Edvixo",
    alternateName: "Edvixo Digital Solutions",
    url: "https://edvixo.com",
    logo: "https://edvixo.com/logo.png",
    image: "https://edvixo.com/og-home.jpg",
    description:
      "Edvixo provides web design, application development, digital transformation, and growth-focused technology services for businesses.",
    telephone: process.env.NEXT_PUBLIC_PHONE ?? "",
    email: "hello@edvixo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bhopal",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      postalCode: "462001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.2599,
      longitude: 77.4126,
    },
    areaServed: [
      { "@type": "Country", name: "Worldwide" },
      { "@type": "State", name: "Madhya Pradesh" },
      { "@type": "City", name: "Bhopal" },
    ],
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-19:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Website Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Store Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Booking System Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Redesign" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Dashboard Development" } },
      ],
    },
    sameAs: [
      "https://linkedin.com/in/sapnendra",
      "https://github.com/sapnendra",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sapnendra Jaiswal",
    url: "https://sapnendra.dev",
    description: "Freelance web developer for businesses worldwide",
    author: {
      "@type": "Person",
      name: "Sapnendra Jaiswal",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://sapnendra.dev/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getBlogPostingSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: Date | string;
  updatedAt: Date | string;
  readTime: number;
  coverImage?: string;
  category: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_AUTHOR,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_AUTHOR,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 200,
        height: 200,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    image: post.coverImage
      ? {
          "@type": "ImageObject",
          url: post.coverImage,
          width: 1200,
          height: 630,
        }
      : undefined,
    articleSection: post.category,
    keywords: post.tags?.join(", "),
    timeRequired: `PT${post.readTime}M`,
    inLanguage: "en-IN",
    isAccessibleForFree: true,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getPortfolioListSchema(
  items: Array<{
    title: string;
    slug: string;
    excerpt?: string;
    coverImage?: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Development Portfolio - Business Websites",
    description:
      "Case studies of websites built for restaurants, clinics, coaching institutes, and retailers worldwide.",
    url: `${SITE_URL}/work`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${SITE_URL}/work/${item.slug}`,
      image: item.coverImage,
      description: item.excerpt,
    })),
  };
}
