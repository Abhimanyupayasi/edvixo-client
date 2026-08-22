import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  MessageCircle,
  Clock3,
  Building2,
  Send,
  ExternalLink,
} from "lucide-react";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import { SelectedProjectField } from "@/components/contact/SelectedProjectField";
import {
  getLocalBusinessSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/schemas";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Contact Edvixo | Get a Free Consultation",
  description:
    "Contact Edvixo for website development, custom software, digital transformation, and growth-focused technology solutions.",
  keywords: [
    "contact Edvixo",
    "web development company",
    "hire web development agency",
    "free website consultation",
    "website development quote",
    "software development company",
    "digital transformation company",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact Edvixo | Let's Build Something Great",
    description:
      "Talk to Edvixo about your website, software, or digital transformation project.",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Edvixo",
      },
    ],
  },
};

const faqs = [
  {
    question: "How much does a website or software project cost?",
    answer:
      "Every project is different. We first understand your requirements, goals, features, and timeline, then provide a clear proposal based on your actual needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A standard business website can take around 2–4 weeks. Larger websites, web applications, e-commerce platforms, and custom software can take longer depending on scope.",
  },
  {
    question: "Can we have an in-person meeting?",
    answer:
      "Yes. Client meetings can be arranged in Indore, Bhopal, Bengaluru, Hyderabad, or Noida. We also work remotely with clients anywhere in the world.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Edvixo works with businesses remotely across different locations and time zones.",
  },
  {
    question: "Can you maintain the website after delivery?",
    answer:
      "Yes. We can provide ongoing maintenance, content updates, improvements, hosting support, and technical assistance after the project is delivered.",
  },
];

const phoneNumbers = [
  "+91 831 969 4153",
  "+91 72548 96588",
  "+91 93023 23411",
];

const emails = [
  {
    label: "Sales",
    email: "sales@edvixo.in",
  },
  {
    label: "Teams",
    email: "teams@edvixo.in",
  },
  {
    label: "Help & Support",
    email: "help@edvixo.in",
  },
];

const meetingLocations = [
  "Indore",
  "Bhopal",
  "Bengaluru",
  "Hyderabad",
  "Noida",
  "Remote",
];

const inputClass =
  "h-12 w-full rounded-xl border border-outline-variant bg-background px-4 text-sm text-on-background placeholder:text-on-surface-variant/70 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15";

const selectClass =
  "h-12 w-full appearance-none rounded-xl border border-outline-variant bg-background px-4 pr-10 text-sm text-on-background outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15 cursor-pointer";

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getLocalBusinessSchema()} />

      <JsonLd
        data={getBreadcrumbSchema([
          {
            name: "Home",
            url: "https://edvixo.com",
          },
          {
            name: "Contact",
            url: "https://edvixo.com/contact",
          },
        ])}
      />

      {/* ==================== HERO ==================== */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            GET IN TOUCH
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] text-on-background md:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="text-primary">Great Together</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-on-surface-variant md:text-lg">
            Have an idea, a project, or a business problem you want to solve?
            Tell us what you&apos;re working on and our team will get back to
            you.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918319694153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-on-primary transition-all hover:opacity-90 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Start a Conversation
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>

            {/* Sales email */}
            <a
              href="mailto:sales@edvixo.in"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-outline-variant bg-surface px-7 text-sm font-semibold text-on-background transition-all hover:bg-surface-container sm:w-auto"
            >
              <Mail className="h-4 w-4 text-primary" />
              Email Sales
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            {/* ==================== FORM ==================== */}
            <div
              id="contact-form"
              className="rounded-2xl border border-outline-variant bg-surface p-5 shadow-sm md:p-8"
            >
              <div className="mb-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  PROJECT ENQUIRY
                </p>

                <h2 className="text-2xl font-bold tracking-tight text-on-background md:text-3xl">
                  Tell us about your project
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-on-surface-variant">
                  Share a few details about your project and our team will get
                  back to you.
                </p>
              </div>

              {/* ==================== FORMSPREE FORM ==================== */}
              <form
                action="https://formspree.io/f/xqpzgykz"
                method="POST"
                className="space-y-5"
              >
                <SelectedProjectField />

                {/* Name + Company */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-on-background"
                    >
                      Full Name <span className="text-primary">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-on-background"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-on-background"
                    >
                      Email <span className="text-primary">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-on-background"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-on-background"
                  >
                    What do you need?{" "}
                    <span className="text-primary">*</span>
                  </label>

                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={selectClass}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="website-development">
                        Website Development
                      </option>
                      <option value="web-application">
                        Web Application
                      </option>
                      <option value="mobile-application">
                        Mobile Application
                      </option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="software-development">
                        Custom Software Development
                      </option>
                      <option value="digital-transformation">
                        Digital Transformation
                      </option>
                      <option value="maintenance">
                        Website / Software Maintenance
                      </option>
                      <option value="other">Other</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
                  </div>
                </div>

                {/* Meeting */}
                <div className="space-y-2">
                  <label
                    htmlFor="meetingLocation"
                    className="block text-sm font-medium text-on-background"
                  >
                    Preferred Meeting
                  </label>

                  <div className="relative">
                    <select
                      id="meetingLocation"
                      name="meetingLocation"
                      defaultValue="remote"
                      className={selectClass}
                    >
                      <option value="remote">Remote · Anywhere</option>
                      <option value="indore">Indore</option>
                      <option value="bhopal">Bhopal</option>
                      <option value="bengaluru">Bengaluru</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="noida">Noida</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-on-background"
                  >
                    Estimated Budget
                  </label>

                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className={selectClass}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                      <option value="1l-3l">₹1,00,000 – ₹3,00,000</option>
                      <option value="3l-5l">₹3,00,000 – ₹5,00,000</option>
                      <option value="5l-plus">₹5,00,000+</option>
                      <option value="discuss">Let&apos;s discuss</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-on-background"
                  >
                    Tell us about your project{" "}
                    <span className="text-primary">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your requirements, goals, features, timeline, or anything else we should know..."
                    className="w-full resize-none rounded-xl border border-outline-variant bg-background px-4 py-3 text-sm leading-6 text-on-background placeholder:text-on-surface-variant/70 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="h-12 w-full rounded-full bg-primary font-semibold text-on-primary hover:bg-primary/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Project Enquiry
                </Button>

                <p className="text-center text-xs leading-5 text-on-surface-variant">
                  Your information will only be used to respond to your
                  enquiry.
                </p>
              </form>
            </div>

            {/* ==================== INFO ==================== */}
            <div className="space-y-5">
              {/* Phone */}
              <div className="rounded-2xl bg-primary-container p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-on-primary-container">
                      Prefer to call?
                    </p>

                    <p className="text-sm text-on-primary-container/75">
                      Talk directly with our team
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-lg font-bold tracking-tight text-primary hover:opacity-75"
                    >
                      {phone}
                    </a>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-on-primary-container/10 pt-4 text-sm text-on-primary-container">
                  <Clock3 className="h-4 w-4 shrink-0" />
                  <span>Mon–Sat · 10:00 AM – 7:00 PM IST</span>
                </div>
              </div>

              {/* Emails */}
              <div className="rounded-2xl border border-outline-variant bg-surface p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-on-background">
                      Email Us
                    </h3>

                    <p className="text-xs text-on-surface-variant">
                      Choose the right team
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-outline-variant">
                  {emails.map((item) => (
                    <div
                      key={item.email}
                      className="py-3 first:pt-0 last:pb-0"
                    >
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                        {item.label}
                      </p>

                      <a
                        href={`mailto:${item.email}`}
                        className="text-sm font-medium text-on-background transition-colors hover:text-primary"
                      >
                        {item.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meeting */}
              <div className="rounded-2xl border border-outline-variant bg-surface p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-on-background">
                      Meet With Us
                    </h3>

                    <p className="text-xs text-on-surface-variant">
                      In-person or remote
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {meetingLocations.map((location) => (
                    <div
                      key={location}
                      className="rounded-xl border border-outline-variant bg-surface-container px-3 py-2.5 text-center text-sm font-medium text-on-surface"
                    >
                      {location}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-2 rounded-xl bg-surface-container-low p-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                  <p className="text-xs leading-5 text-on-surface-variant">
                    Need a face-to-face discussion? Select your preferred city
                    in the enquiry form and we&apos;ll coordinate the meeting.
                  </p>
                </div>
              </div>

              {/* WhatsApp mini CTA */}
              <a
                href="https://wa.me/918319694153"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-outline-variant bg-surface p-5 transition-all hover:border-primary/40 hover:bg-surface-container"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-on-background">
                      Chat on WhatsApp
                    </p>

                    <p className="text-xs text-on-surface-variant">
                      +91 831 969 4153
                    </p>
                  </div>
                </div>

                <ExternalLink className="h-4 w-4 text-on-surface-variant transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-surface-container-low py-14">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            NOT SURE WHERE TO START?
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-on-background md:text-4xl">
            Let&apos;s figure it out together.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-on-surface-variant md:text-base">
            You don&apos;t need a complete technical specification before
            contacting us. Just tell us what you&apos;re trying to achieve.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/918319694153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-on-primary hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>

            <a
              href="mailto:sales@edvixo.in"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-outline-variant bg-surface px-6 text-sm font-semibold text-on-background hover:bg-surface-container"
            >
              <Mail className="h-4 w-4 text-primary" />
              sales@edvixo.in
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="border-t border-outline-variant bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              FAQ
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-on-background md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-outline-variant bg-surface"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-sm font-semibold text-on-background md:text-base">
                  <span>{faq.question}</span>

                  <ChevronDown className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="border-t border-outline-variant px-5 py-4 text-sm leading-6 text-on-surface-variant">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}