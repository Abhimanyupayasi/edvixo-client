import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const projectCatalog = {
  "dental-clinic-growth-website": {
    slug: "dental-clinic-growth-website", title: "Dental Clinic Growth Website", clientName: "Bluebird Dental", tagline: "A premium clinic website designed to increase trust and conversion from organic search.", clientIndustry: "Healthcare", clientLocation: "Bhopal, India", duration: "3 weeks", completedAt: "2025-01-15", coverImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80", imageAlt: "Dental clinic website", liveUrl: "https://example.com",
    results: [{ value: "3x", label: "More Leads" }, { value: "48%", label: "Higher Conversion" }, { value: "2.4x", label: "Booking Speed" }], techStack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "SEO" }],
    sections: [{ heading: "Problem", content: "The clinic had a dated website and weak local visibility. Patients did not trust the practice and many inquiries were lost on mobile devices." }, { heading: "Solution", content: "We redesigned the site around clear service pages, trust-building content, and a simple consultation flow tailored for patient inquiries." }, { heading: "Outcome", content: "The new site improved appointment conversion and created a cleaner patient experience that matched the practice's premium positioning." }],
  },
  "restaurant-ordering-experience": {
    slug: "restaurant-ordering-experience", title: "Restaurant Ordering Experience", clientName: "Saffron Kitchen", tagline: "Built to help more local diners order online and discover the restaurant organically.", clientIndustry: "Hospitality", clientLocation: "Remote", duration: "2 weeks", completedAt: "2025-03-10", coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", imageAlt: "Restaurant website", liveUrl: "https://example.com",
    results: [{ value: "41%", label: "More Orders" }, { value: "22%", label: "Lower Bounce" }, { value: "7 days", label: "Launch" }], techStack: [{ name: "Next.js" }, { name: "CMS" }, { name: "Analytics" }],
    sections: [{ heading: "Problem", content: "The restaurant relied on social media and existing third-party listings. It lacked an online experience that felt premium and easy to trust." }, { heading: "Solution", content: "We crafted a mobile-first ordering page, menu presentation, and brand visuals that made the restaurant easier to discover and easier to buy from." }, { heading: "Outcome", content: "The result was a better online ordering journey and stronger local visibility, while helping the owner manage the business more efficiently." }],
  },
  "admissions-website-redesign": {
    slug: "admissions-website-redesign", title: "Admissions Website Redesign", clientName: "BrightPath Academy", tagline: "A cleaner online admissions funnel for educational institutes and coaching businesses.", clientIndustry: "Education", clientLocation: "Delhi, India", duration: "4 weeks", completedAt: "2025-05-22", coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", imageAlt: "Admissions website", liveUrl: "https://example.com",
    results: [{ value: "2x", label: "More Enquiries" }, { value: "94%", label: "Mobile Friendly" }, { value: "15%", label: "More Signups" }], techStack: [{ name: "React" }, { name: "Next.js" }, { name: "Forms" }],
    sections: [{ heading: "Problem", content: "The institute had information scattered across different channels and a signup flow that discouraged visitors from taking action." }, { heading: "Solution", content: "We created a higher-trust admissions funnel with course information, FAQs, and clear calls to action for enrollment queries." }, { heading: "Outcome", content: "The website made it easier for prospects to understand the value and get in touch without friction." }],
  },
} as const;

type Project = (typeof projectCatalog)[keyof typeof projectCatalog];

function hasLiveWebsite(url?: string) {
  if (!url) return false;
  try { return new URL(url).hostname !== "example.com"; } catch { return false; }
}

export async function generateStaticParams() { return Object.keys(projectCatalog).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = projectCatalog[slug as keyof typeof projectCatalog];
  if (!item) return { title: "Project Not Found", robots: { index: false, follow: false } };
  return { title: `${item.title} - Case Study`, description: item.tagline, alternates: { canonical: `${SITE_URL}/work/${item.slug}` } };
}

function CaseStudyHero({ item }: { item: Project }) {
  const year = new Date(item.completedAt).getFullYear();
  const facts = [{ label: "CLIENT", value: item.clientName }, { label: "INDUSTRY", value: item.clientIndustry }, { label: "CITY", value: item.clientLocation }, { label: "DURATION", value: item.duration }, { label: "YEAR", value: String(year) }];
  return <section className="bg-surface-container-low py-24"><div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:px-8"><div><div className="mb-4 flex flex-wrap gap-2"><span className="inline-flex items-center rounded bg-secondary-container px-3 py-1 text-xs font-semibold text-on-secondary-container">{item.clientIndustry}</span><span className="inline-flex items-center rounded bg-surface-container px-3 py-1 text-xs font-semibold text-on-surface-variant">Case Study</span><span className="inline-flex items-center rounded bg-surface-container px-3 py-1 text-xs font-semibold text-on-surface-variant">{year}</span></div><h1 className="mb-4 text-4xl font-bold leading-tight text-on-background md:text-5xl">{item.title}</h1><p className="mb-8 max-w-lg text-base leading-relaxed text-on-surface-variant">{item.tagline}</p><div className="flex flex-wrap gap-8">{facts.map((fact) => <div key={fact.label}><p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">{fact.label}</p><p className="mt-1 text-base font-semibold text-on-background">{fact.value}</p></div>)}</div></div><div className="relative flex w-full items-center justify-center"><div className="absolute inset-0 rounded-shape-md bg-primary-container/20 blur-3xl" /><div className="relative z-10 w-full max-w-md rounded-b-xl shadow-2xl"><div className="flex h-6 items-center justify-center rounded-t-xl bg-on-background/90"><div className="flex gap-1.5"><div className="h-2 w-2 rounded-full bg-on-background/30" /><div className="h-2 w-2 rounded-full bg-on-background/30" /><div className="h-2 w-2 rounded-full bg-on-background/30" /></div></div><div className="h-72 overflow-hidden rounded-b-xl border border-on-background/10 bg-on-background/5"><div className="relative h-full w-full"><Image src={item.coverImage} alt={item.imageAlt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" priority /></div></div></div></div></div></section>;
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = projectCatalog[slug as keyof typeof projectCatalog];
  if (!item) notFound();
  const details = [{ label: "CLIENT", value: item.clientName }, { label: "INDUSTRY", value: item.clientIndustry }, { label: "CITY", value: item.clientLocation }, { label: "DURATION", value: item.duration }];
  return <main><CaseStudyHero item={item} /><div className="bg-primary py-8"><div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8"><div className="flex flex-wrap justify-center gap-8">{item.results.map((result) => <div key={result.label} className="min-w-36 text-center"><p className="text-3xl font-bold text-white md:text-4xl">{result.value}</p><p className="mt-1 text-sm text-primary-container/80">{result.label}</p></div>)}</div></div></div><section className="py-16"><div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8"><div className="grid gap-12 md:grid-cols-[280px_1fr]"><aside className="h-fit rounded-shape-md bg-surface p-6 shadow-sm"><p className="mb-4 text-title-medium font-semibold text-on-background">Project Details</p><div className="flex flex-col gap-4">{details.map((fact) => <div key={fact.label} className="border-b border-outline-variant pb-3 last:border-b-0 last:pb-0"><p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">{fact.label}</p><p className="mt-1 text-sm font-medium text-on-background">{fact.value}</p></div>)}</div><div className="mt-6 border-t border-outline-variant pt-4"><p className="mb-2 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Technologies</p><div className="flex flex-wrap gap-2">{item.techStack.map((tech) => <span key={tech.name} className="rounded-shape-full bg-surface-container px-3 py-1 text-xs font-medium text-on-surface-variant">{tech.name}</span>)}</div></div></aside><div>{item.sections.map((section) => <div key={section.heading} className="mb-10"><h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold leading-relaxed text-on-background lg:text-2xl lg:leading-snug">{section.heading}</h2><p className="text-base leading-relaxed text-on-surface-variant">{section.content}</p></div>)}{hasLiveWebsite(item.liveUrl) ? <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-shape-full border border-outline-variant px-5 py-3 text-sm font-semibold text-on-background transition-colors hover:bg-surface-container">Visit Website</a> : null}</div></div></div></section><section className="bg-primary py-20"><div className="mx-auto max-w-content px-6 text-center"><h2 className="mb-4 text-headline-small font-bold text-inverse-on-surface">Need a project like this?</h2><div className="flex flex-wrap justify-center gap-4"><Link href={`/contact?project=${encodeURIComponent(item.title)}#contact-form`} className="rounded-shape-full bg-white px-8 py-4 font-semibold text-primary transition-colors hover:bg-primary-container">Send Inquiry</Link><Link href="/work" className="rounded-shape-full border-2 border-inverse-on-surface px-8 py-4 font-semibold text-inverse-on-surface transition-colors hover:bg-inverse-on-surface/10">Browse other work</Link></div></div></section></main>;
}
