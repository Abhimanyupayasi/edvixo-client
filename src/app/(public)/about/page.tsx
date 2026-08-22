import type { Metadata } from "next";
import { ContactForm } from "@/components/public/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Linkedin, ChevronDown } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "About - Know about advixo",
  description:
    "Edvixo is a leading web development company offering custom website design, digital transformation, and growth-focused technology solutions for businesses worldwide.",
  keywords: [
    "contact web development company",
    "hire digital agency",
    "free website consultation",
    "web development quote",
    "digital transformation company",
    "website design consultancy",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact - Get a Free Web Development Quote",
    description:
      "Get in touch with Edvixo for a free consultation on your next digital project. Fast response and clear strategy.",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Edvixo - Free Digital Consultation",
      },
    ],
  },
};

const faqs = [
  {
    question: "How much does a custom website cost?",
    answer:
      "Website scope and complexity vary by business. I share a clear, tailored quote after understanding your requirements - no surprises.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website typically takes 2–4 weeks. More complex projects with online stores or booking systems take 4–6 weeks. I'll give you a specific timeline in the proposal.",
  },
  {
    question: "Can I update the content myself after delivery?",
    answer:
      "Yes! I build with a simple content management system so you or your team can update text, images, and content without needing a developer.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getLocalBusinessSchema()} />
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", url: "https://edvixo.com" },
        { name: "Contact", url: "https://edvixo.com/contact" }
      ])} />
      {/* Page header */}
      <div className="bg-surface-container-low py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <p className="label-medium text-primary uppercase tracking-widest mb-3">
            COMPANY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-on-background mb-6 leading-tight">
            Let&apos;s Talk About
            <span className="text-primary"> Who We Are</span>
          </h1>
          <p className="body-large text-on-surface-variant leading-relaxed">
            Working with businesses worldwide. Reach out on
            WhatsApp, call me directly, or fill out the form below.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-background py-16 border-t border-outline-variant">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="headline-large text-on-background text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-shape-md border border-outline-variant bg-surface"
              >
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 title-medium text-on-background list-none">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-on-surface-variant transition-transform duration-200 group-open:rotate-180 shrink-0" />
                </summary>
                <div className="border-t border-outline-variant px-5 py-4 body-medium text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

