import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Star } from "lucide-react";
import { SITE_URL } from "../../../layout";

const projectCatalog = {
  "dental-clinic-growth-website": {
    slug: "dental-clinic-growth-website",
    title: "Dental Clinic Growth Website",
    tagline: "A premium clinic website designed to increase trust and conversion from organic search.",
    clientIndustry: "Healthcare",
    clientLocation: "Bhopal, India",
    duration: "3 weeks",
    completedAt: "2025-01-15",
    coverImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dental clinic website",
    liveUrl: "https://example.com",
    results: [
      { value: "3x", label: "More Leads" },
      { value: "48%", label: "Higher Conversion" },
      { value: "2.4x", label: "Booking Speed" },
    ],
    techStack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "SEO" }],
    sections: [
      {
        heading: "Problem",
        content:
          "The clinic had a dated website and weak local visibility. Patients did not trust the practice and many inquiries were lost on mobile devices.",
      },
      {
        heading: "Solution",
        content:
          "We redesigned the site around clear service pages, trust-building content, and a simple consultation flow tailored for patient inquiries.",
      },
      {
        heading: "Outcome",
        content:
          "The new site improved appointment conversion and created a cleaner patient experience that matched the practice's premium positioning.",
      },
    ],
  },
  "restaurant-ordering-experience": {
    slug: "restaurant-ordering-experience",
    title: "Restaurant Ordering Experience",
    tagline: "Built to help more local diners order online and discover the restaurant organically.",
    clientIndustry: "Hospitality",
    clientLocation: "Remote",
    duration: "2 weeks",
    completedAt: "2025-03-10",
    coverImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Restaurant website",
    liveUrl: "https://example.com",
    results: [
      { value: "41%", label: "More Orders" },
      { value: "22%", label: "Lower Bounce" },
      { value: "7 days", label: "Launch" },
    ],
    techStack: [{ name: "Next.js" }, { name: "CMS" }, { name: "Analytics" }],
    sections: [
      {
        heading: "Problem",
        content:
          "The restaurant relied on social media and existing third-party listings. It lacked an online experience that felt premium and easy to trust.",
      },
      {
        heading: "Solution",
        content:
          "We crafted a mobile-first ordering page, menu presentation, and brand visuals that made the restaurant easier to discover and easier to buy from.",
      },
      {
        heading: "Outcome",
        content:
          "The result was a better online ordering journey and stronger local visibility, while helping the owner manage the business more efficiently.",
      },
    ],
  },
  "admissions-website-redesign": {
    slug: "admissions-website-redesign",
    title: "Admissions Website Redesign",
    tagline: "A cleaner online admissions funnel for educational institutes and coaching businesses.",
    clientIndustry: "Education",
    clientLocation: "Delhi, India",
    duration: "4 weeks",
    completedAt: "2025-05-22",
    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Admissions website",
    liveUrl: "https://example.com",
    results: [
      { value: "2x", label: "More Enquiries" },
      { value: "94%", label: "Mobile Friendly" },
      { value: "15%", label: "More Signups" },
    ],
    techStack: [{ name: "React" }, { name: "Next.js" }, { name: "Forms" }],
    sections: [
      {
        heading: "Problem",
        content:
          "The institute had information scattered across different channels and a signup flow that discouraged visitors from taking action.",
      },
      {
        heading: "Solution",
        content:
          "We created a higher-trust admissions funnel with course information, FAQs, and clear calls to action for enrollment queries.",
      },
      {
        heading: "Outcome",
        content:
          "The website made it easier for prospects to understand the value and get in touch without friction.",
      },
    ],
  },
} as const;

export async function generateStaticParams() {
  return Object.keys(projectCatalog).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = projectCatalog[slug as keyof typeof projectCatalog];

  if (!item) {
    return { title: "Project Not Found", robots: { index: false, follow: false } };
  }

  return {
    title: `${item.title} - Case Study`,
    description: item.tagline,
    alternates: { canonical: `${SITE_URL}/work/${item.slug}` },
  };
}

function CaseStudyHero({ item }: { item: (typeof projectCatalog)[keyof typeof projectCatalog] }) {
  const year = new Date(item.completedAt).getFullYear();
  const facts = [
    { label: "INDUSTRY", value: item.clientIndustry },
    { label: "CITY", value: item.clientLocation },
    { label: "DURATION", value: item.duration },
    { label: "YEAR", value: String(year) },
  ];

  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold bg-secondary-container text-on-secondary-container">{item.clientIndustry}</span>
            <span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold bg-surface-container text-on-surface-variant">Case Study</span>
            <span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold bg-surface-container text-on-surface-variant">{year}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-on-background leading-tight mb-4">{item.title}</h1>
          <p className="text-base text-on-surface-variant leading-relaxed mb-8 max-w-lg">{item.tagline}</p>
          <div className="flex flex-wrap gap-8">
            {facts.map((fact) => (
              <div key={fact.label} className="text-left">
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">{fact.label}</p>
                <p className="text-base font-semibold text-on-background mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full">
          <div className="absolute inset-0 bg-primary-container/20 rounded-shape-md blur-3xl" />
          <div className="relative z-10 w-full rounded-b-xl max-w-md shadow-2xl">
            <div className="bg-on-background/90 rounded-t-xl h-6 flex items-center justify-center">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-on-background/30" />
                <div className="w-2 h-2 rounded-full bg-on-background/30" />
                <div className="w-2 h-2 rounded-full bg-on-background/30" />
              </div>
            </div>
            <div className="bg-on-background/5 border border-on-background/10 rounded-b-xl overflow-hidden h-72">
              <div className="relative w-full h-full">
                <Image src={item.coverImage} alt={item.imageAlt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = projectCatalog[slug as keyof typeof projectCatalog];

  if (!item) {
    notFound();
  }

  return (
    <main>
      <CaseStudyHero item={item} />
      <div className="bg-primary py-8">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {item.results.map((result) => (
              <div key={result.label} className="text-center min-w-36">
                <p className="text-3xl md:text-4xl font-bold text-white">{result.value}</p>
                <p className="text-sm text-primary-container/80 mt-1">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[280px_1fr]">
            <aside className="bg-surface rounded-shape-md shadow-sm p-6 h-fit">
              <p className="text-title-medium font-semibold text-on-background mb-4">Project Details</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "INDUSTRY", value: item.clientIndustry },
                  { label: "CITY", value: item.clientLocation },
                  { label: "DURATION", value: item.duration },
                  { label: "MY ROLE", value: "Full-Stack Developer" },
                ].map((fact) => (
                  <div key={fact.label} className="border-b border-outline-variant pb-3 last:border-b-0 last:pb-0">
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">{fact.label}</p>
                    <p className="text-sm font-medium text-on-background mt-1">{fact.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant">
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span key={tech.name} className="px-3 py-1 rounded-shape-full bg-surface-container text-on-surface-variant text-xs font-medium">{tech.name}</span>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              {item.sections.map((section) => (
                <div key={section.heading} className="mb-10">
                  <h2 className="text-xl lg:text-2xl font-bold text-on-background pl-4 border-l-4 border-primary mb-6 leading-relaxed lg:leading-snug">{section.heading}</h2>
                  <p className="text-base text-on-surface-variant leading-relaxed">{section.content}</p>
                </div>
              ))}

              <div className="bg-tertiary-container rounded-shape-md p-8 mt-8 relative overflow-hidden">
                <span className="absolute top-4 left-6 text-8xl font-black text-tertiary/15 leading-none select-none">&quot;</span>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-current text-tertiary" />)}</div>
                  <blockquote className="text-xl italic font-medium text-on-tertiary-container leading-relaxed mb-6">
                    “We needed a more trustworthy online presence, and this redesign gave us exactly that.”
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm shrink-0">SJ</div>
                    <div>
                      <p className="font-semibold text-on-tertiary-container">Client Feedback</p>
                      <p className="text-sm text-on-tertiary-container/80">Clearer brand, stronger trust, better conversion.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <h2 className="text-headline-small font-bold text-inverse-on-surface mb-4">Need a project like this?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-shape-full bg-white text-primary font-semibold hover:bg-primary-container px-8 py-4 label-large transition-colors duration-200">Get a free quote</Link>
            <Link href="/work" className="rounded-shape-full border-2 border-inverse-on-surface text-inverse-on-surface px-8 py-4 label-large hover:bg-inverse-on-surface/10 transition-colors">Browse other work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ResultsBanner
// ─────────────────────────────────────────────────────────────────────────────

type StaticResult = {
  value: string;
  label: string;
};

type StaticTech = {
  name: string;
};

type StaticSection = {
  heading: string;
  content: string | string[];
  order?: number;
};

type StaticTestimonial = {
  quote?: string;
  author?: {
    name?: string;
    designation?: string;
    company?: string;
  };
};

type StaticCaseStudyItem = {
  slug: string;
  title: string;
  tagline: string;
  clientIndustry?: string;
  clientLocation?: string;
  duration?: string;
  completedAt?: string;
  coverImage?: string;
  imageAlt?: string;
  liveUrl?: string;
  results: StaticResult[];
  techStack: StaticTech[];
  sections: StaticSection[];
  testimonialRef?: StaticTestimonial | null;
};

type AdjacentProjects = {
  prev?: { slug: string; title: string; clientIndustry?: string } | null;
  next?: { slug: string; title: string; clientIndustry?: string } | null;
};

function ResultsBanner({
  results,
}: {
  results: StaticResult[];
}) {
  if (!results || results.length === 0) return null;

  return (
    <div className="bg-primary py-8">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="overflow-x-auto md:overflow-visible">
          <div className="flex flex-nowrap md:flex md:flex-wrap md:justify-center gap-0 min-w-max md:min-w-0">
          {results.slice(0, 4).map((result, idx, arr) => (
            <div
              key={result.label}
              className={`min-w-30 px-4 text-center md:min-w-0 md:flex-1 ${
                idx < arr.length - 1 ? "border-r border-white/20" : ""
              }`}
            >
              <p className="text-3xl md:text-4xl font-bold text-white">
                {result.value}
              </p>
              <p className="text-sm text-primary-container/80 mt-1">
                {result.label}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CaseStudyContent
// ─────────────────────────────────────────────────────────────────────────────

function CaseStudyContent({
  item,
  adjacent,
}: {
  item: StaticCaseStudyItem;
  adjacent: AdjacentProjects;
}) {
  const year = item.completedAt
    ? new Date(item.completedAt).getFullYear().toString()
    : "";

  const facts = [
    { label: "INDUSTRY", value: item.clientIndustry ?? "" },
    { label: "CITY", value: item.clientLocation ?? "Remote" },
    { label: "DURATION", value: item.duration ?? "Custom" },
    { label: "MY ROLE", value: "Full-Stack Developer" },
    ...(year ? [{ label: "YEAR", value: year }] : []),
  ].filter((f) => f.value);

  // testimonialRef is populated - cast carefully
  const testimonial =
    item.testimonialRef && typeof item.testimonialRef === "object"
      ? item.testimonialRef
      : null;

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row lg:grid lg:grid-cols-3">

          {/* ── Left sidebar ────────────────────────────────────────────── */}
          <div className="order-2 flex flex-col gap-6 h-fit md:order-2 md:w-64 md:shrink-0 md:sticky md:top-20 lg:order-1 lg:w-auto lg:top-24">

            {/* Project Details card */}
            <div className="bg-surface rounded-shape-md shadow-sm p-6">
              <p className="text-title-medium font-semibold text-on-background mb-4">
                Project Details
              </p>
              <div className="flex flex-col">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col border-b border-outline-variant py-3 last:border-b-0"
                  >
                    <span className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                      {fact.label}
                    </span>
                    <span className="text-sm font-medium text-on-background mt-0.5">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              {item.techStack && item.techStack.length > 0 && (
                <div className="mt-4 pt-4 border-t border-outline-variant">
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 rounded-shape-full bg-surface-container text-on-surface-variant text-xs font-medium"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Key Results card */}
            {item.results && item.results.length > 0 && (
              <div className="bg-primary-container rounded-shape-md p-6">
                <p className="text-sm font-semibold text-on-primary-container uppercase tracking-widest mb-4">
                  Results After 3 Months
                </p>
                <div className="flex flex-col">
                  {item.results.slice(0, 3).map((result) => (
                    <div
                      key={result.label}
                      className="py-3 border-b border-primary/20 last:border-b-0"
                    >
                      <p className="text-3xl font-bold text-primary">
                        {result.value}
                      </p>
                      <p className="text-sm text-on-primary-container/80 mt-0.5">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links card */}
            <div className="bg-surface rounded-shape-md shadow-sm p-6 flex flex-col gap-3">
              <p className="text-title-medium font-semibold text-on-background mb-1">
                Live Links
              </p>
              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-shape-full bg-primary text-on-primary font-semibold text-sm text-center hover:opacity-90 transition-opacity duration-200"
                >
                  Visit Live Website &rarr;
                </a>
              )}
              <Link
                href="/work"
                className="w-full py-3 px-4 rounded-shape-full border border-outline text-on-background font-semibold text-sm text-center hover:bg-surface-container transition-colors duration-200"
              >
                &larr; Back to All Work
              </Link>
            </div>
          </div>

          {/* ── Right content ─────────────────────────────────────────── */}
          <div className="order-1 md:order-1 md:flex-1 lg:col-span-2">

            {/* Case study sections from MongoDB */}
            {item.sections
              ?.slice()
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-xl lg:text-2xl font-bold text-on-background pl-4 border-l-4 border-primary mb-6 leading-relaxed lg:leading-snug">
                    {section.heading}
                  </h2>
                  <div className="text-base text-on-surface-variant leading-relaxed space-y-4">
                    {Array.isArray(section.content)
                      ? (section.content as string[]).map((para, i) => (
                          <p key={i}>{para}</p>
                        ))
                      : <p>{section.content}</p>
                    }
                  </div>
                </div>
              ))}

            {/* Testimonial block */}
            {testimonial && testimonial.quote && (
              <div className="bg-tertiary-container rounded-shape-md p-8 mt-8 relative overflow-hidden">
                {/* Decorative quote mark */}
                <span className="absolute top-4 left-6 text-8xl font-black text-tertiary/15 leading-none select-none">
                  &quot;
                </span>
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current text-tertiary"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl italic font-medium text-on-tertiary-container leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm shrink-0">
                      {testimonial.author?.name
                        ?.split(" ")
                        .map((n: string) => n[0])
                        .slice(0, 2)
                        .join("") ?? ""}
                    </div>
                    <div>
                      <p className="font-semibold text-on-tertiary-container">
                        {testimonial.author?.name}
                      </p>
                      <p className="text-sm text-on-tertiary-container/70">
                        {testimonial.author?.designation}
                        {testimonial.author?.company
                          ? `, ${testimonial.author.company}`
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Prev / Next navigation */}
            <div className="border-t border-outline-variant mt-12 pt-8 flex flex-col gap-3 md:flex-row md:justify-between md:gap-4">
              {adjacent.prev && (
                <Link href={`/work/${adjacent.prev.slug}`} className="w-full md:w-auto md:flex-1">
                  <div className="p-4 rounded-shape-md border border-outline-variant hover:bg-surface-container transition-colors duration-200">
                    <p className="text-xs text-on-surface-variant mb-1">
                      &larr; Previous Project
                    </p>
                    <p className="text-sm font-semibold text-on-background">
                      {adjacent.prev.title}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      {adjacent.prev.clientIndustry}
                    </p>
                  </div>
                </Link>
              )}
              {adjacent.next && (
                <Link
                  href={`/work/${adjacent.next.slug}`}
                  className="text-right w-full md:w-auto md:flex-1 md:ml-auto"
                >
                  <div className="p-4 rounded-shape-md border border-outline-variant hover:bg-surface-container transition-colors duration-200 text-right">
                    <p className="text-xs text-on-surface-variant mb-1">
                      Next Project &rarr;
                    </p>
                    <p className="text-sm font-semibold text-on-background">
                      {adjacent.next.title}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      {adjacent.next.clientIndustry}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CaseStudyCTA
// ─────────────────────────────────────────────────────────────────────────────

function CaseStudyCTA({ item }: { item: StaticCaseStudyItem }) {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Have a Similar Business?
        </h2>
        <p className="text-primary-container leading-relaxed mb-8">
          If you run a{" "}
          {item.clientIndustry?.toLowerCase() || "business"}, let&apos;s talk
          about what I could build for you. The first conversation is completely
          free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-shape-full bg-white text-primary font-semibold hover:bg-primary-container transition-colors duration-200 text-center"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/work"
            className="px-8 py-4 rounded-shape-full bg-tertiary-container text-on-tertiary-container font-semibold hover:opacity-90 transition-opacity duration-200 text-center"
          >
            &larr; View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

