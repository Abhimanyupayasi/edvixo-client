import { SITE_AUTHOR, SITE_URL } from "@/lib/site";

/* =========================================================
   ORGANIZATION SCHEMA
========================================================= */

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,

    name: "Edvixo",
    url: SITE_URL,

    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },

    image: `${SITE_URL}/og-home.jpg`,

    description:
      "Edvixo is a digital solutions company helping businesses build websites, digital products, software solutions, and technology experiences.",

    knowsAbout: [
      "Web Development",
      "Software Development",
      "Digital Solutions",
      "UI/UX Design",
      "E-commerce",
      "Business Automation",
      "Cloud Solutions",
      "Digital Transformation",
    ],
  };
}


/* =========================================================
   BUSINESS / COMPANY SCHEMA
========================================================= */

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,

    name: "Edvixo",
    url: SITE_URL,

    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },

    image: `${SITE_URL}/og-home.jpg`,

    description:
      "Edvixo provides digital solutions, software development, web development, design, automation, and technology services for growing businesses.",
  };
}


/* =========================================================
   WEBSITE SCHEMA
========================================================= */

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,

    name: "Edvixo",
    url: SITE_URL,

    description:
      "Edvixo digital solutions and software development website.",

    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },

    inLanguage: "en-IN",
  };
}


/* =========================================================
   BLOG POSTING SCHEMA
========================================================= */

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

    "@id": `${SITE_URL}/blog/${post.slug}#article`,

    headline: post.title,

    description: post.excerpt,

    url: `${SITE_URL}/blog/${post.slug}`,

    datePublished: new Date(post.publishedAt).toISOString(),

    dateModified: new Date(post.updatedAt).toISOString(),

    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Edvixo",
      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Edvixo",
      url: SITE_URL,

      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
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
      : `${SITE_URL}/og-default.jpg`,

    articleSection: post.category,

    keywords: post.tags?.join(", "),

    timeRequired: `PT${post.readTime}M`,

    inLanguage: "en-IN",

    isAccessibleForFree: true,
  };
}


/* =========================================================
   BREADCRUMB SCHEMA
========================================================= */

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
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


/* =========================================================
   FAQ SCHEMA
========================================================= */

export function getFAQSchema(
  faqs: Array<{
    question: string;
    answer: string;
  }>,
) {
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


/* =========================================================
   PORTFOLIO LIST SCHEMA
========================================================= */

export function getPortfolioListSchema(
  items: Array<{
    title: string;
    slug: string;
    excerpt?: string;
    coverImage?: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",

    name: "Edvixo Portfolio",

    description:
      "Selected digital projects and case studies from Edvixo.",

    url: `${SITE_URL}/portfolio`,

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.title,

      url: `${SITE_URL}/portfolio/${item.slug}`,

      image: item.coverImage,

      description: item.excerpt,
    })),
  };
}

export function getServiceListSchema(
  services: Array<{
    title: string;
    slug: string;
    description?: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Edvixo Digital Services",
    description:
      "Digital services from Edvixo including web development, application development, e-commerce, design, and business-focused technology solutions.",
    url: `${SITE_URL}/services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${SITE_URL}/services/${service.slug}`,
      description: service.description,
    })),
  };
}
export function getServiceSchema(service: {
  title: string;
  slug: string;
  heroDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.heroDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Edvixo",
      url: SITE_URL,
    },
  };
}