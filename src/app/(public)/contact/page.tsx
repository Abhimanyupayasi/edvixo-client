import type { Metadata } from "next";
import { ContactForm } from "@/components/public/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Linkedin, ChevronDown } from "lucide-react";
import { SITE_URL } from "../../layout";
import JsonLd from "@/components/seo/JsonLd";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Contact - Get a Free Consultation with Edvixo",
  description:
    "Contact Edvixo for website design, custom web development, digital transformation, and growth-focused technology solutions for your business.",
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
            CONTACT
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-on-background mb-6 leading-tight">
            Let&apos;s Talk About
            <span className="text-primary"> Your Business</span>
          </h1>
          <p className="body-large text-on-surface-variant leading-relaxed">
            Working with businesses worldwide. Reach out on
            WhatsApp, call me directly, or fill out the form below.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr]">
            {/* Left: Form */}
            <ContactForm />

            {/* Right: Contact info */}
            <div className="order-first md:order-0 space-y-5">
              {/* Call card */}
              <div className="rounded-shape-md bg-primary-container p-6">
                <p className="title-large text-on-primary-container mb-2">
                  Prefer to call?
                </p>
                <p className="display-small text-primary font-bold leading-tight mb-1">
                  +91 96852 38884
                </p>
                <p className="body-medium text-on-primary-container mb-4">
                  Mon–Sat, 10am–7pm IST
                </p>
                <Button
                  asChild
                  className="w-full bg-primary text-on-primary hover:bg-primary/90 rounded-shape-full h-11 label-large gap-2"
                >
                  <a href="tel:+919685238884">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Contact details */}
              <div className="rounded-shape-md bg-surface border border-outline-variant p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-shape-sm bg-surface-container">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="label-large text-on-background">Office Location</p>
                    <p className="body-medium text-on-surface-variant">Remote · Worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-shape-sm bg-surface-container">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="label-large text-on-background">Email Address</p>
                    <a
                      href="mailto:hello@edvixo.com"
                      className="body-medium text-on-surface-variant hover:text-primary transition-colors"
                    >
                      hello@edvixo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-shape-sm bg-surface-container">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="label-large text-on-background">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/sapnendra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="body-medium text-on-surface-variant hover:text-primary transition-colors"
                    >
                      linkedin.com/in/sapnendra
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-shape-md bg-surface-container overflow-hidden border border-outline-variant h-40 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-linear-to-br from-primary/20 to-secondary/10" />
                </div>
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-md">
                    <MapPin className="h-5 w-5 text-on-primary" />
                  </div>
                  <p className="label-medium text-on-surface-variant">Remote · Worldwide</p>
                </div>
              </div>
            </div>
          </div>
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
