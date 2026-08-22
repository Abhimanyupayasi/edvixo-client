import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  FileDown,
  FileText,
  LayoutDashboard,
  LayoutGrid,
  MessageSquare,
  MessagesSquare,
  Phone,
  Receipt,
  Search,
  Send,
} from "lucide-react";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Getting Started - How to Work With Sapnendra",
  description:
    "A step-by-step guide for new clients. Learn how to explore the site, submit your project enquiry, share your requirements, and track progress in the client portal.",
  alternates: { canonical: `${SITE_URL}/docs` },
  openGraph: {
    url: `${SITE_URL}/docs`,
    title: "Getting Started Guide - sapnendra.dev",
    description:
      "Everything you need to know about working with Sapnendra - from first visit to project launch.",
    images: [{ url: "/og-home.jpg", width: 1200, height: 630 }],
  },
};

export default function DocsPage() {
  return (
    <div className="bg-background">
      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-content px-5 text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-shape-full bg-primary-container px-4 py-1.5 text-sm font-semibold text-on-primary-container">
            <BookOpen className="h-4 w-4" />
            Getting Started Guide
          </p>

          <h1 className="mx-auto max-w-2xl text-headline-large font-bold text-on-background">
            Everything You Need to Know
            <br />
            Before We Start Working Together
          </h1>

          <p className="mx-auto mt-4 mb-10 max-w-xl text-on-surface-variant">
            This guide walks you through every step - from exploring my work to
            submitting your project, sharing requirements, and tracking progress in
            your private client portal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-shape-full border border-outline-variant bg-surface px-4 py-2 text-sm font-medium text-on-background">
              <Search className="h-4 w-4 text-primary" />
              1. Explore
            </div>
            <ChevronRight className="hidden h-4 w-4 text-outline-variant sm:block" />
            <div className="flex items-center gap-2 rounded-shape-full border border-outline-variant bg-surface px-4 py-2 text-sm font-medium text-on-background">
              <Send className="h-4 w-4 text-primary" />
              2. Enquire
            </div>
            <ChevronRight className="hidden h-4 w-4 text-outline-variant sm:block" />
            <div className="flex items-center gap-2 rounded-shape-full border border-outline-variant bg-surface px-4 py-2 text-sm font-medium text-on-background">
              <ClipboardList className="h-4 w-4 text-primary" />
              3. Brief
            </div>
            <ChevronRight className="hidden h-4 w-4 text-outline-variant sm:block" />
            <div className="flex items-center gap-2 rounded-shape-full border border-outline-variant bg-surface px-4 py-2 text-sm font-medium text-on-background">
              <LayoutDashboard className="h-4 w-4 text-primary" />
              4. Track
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-content px-5">
          <div className="relative flex flex-col gap-0">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex w-16 shrink-0 flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-on-primary">
                  1
                </div>
                <div className="mt-2 min-h-16 w-px flex-1 bg-outline-variant" />
              </div>

              <div className="flex-1 pb-16">
                <span className="mb-3 inline-block rounded-shape-full bg-primary-container px-3 py-1 text-xs font-semibold text-on-primary-container">
                  Step 1 · Start Here
                </span>
                <h2 className="mb-3 text-title-large font-bold text-on-background">
                  Browse the Site to See If We&apos;re a Good Fit
                </h2>
                <p className="mb-5 leading-relaxed text-on-surface-variant">
                  Before reaching out, take 10 minutes to explore the site. Look at
                  case studies from businesses similar to yours, read how I work, and
                  check which service fits your need. This saves time for both of us.
                </p>

                <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      Browse Case Studies
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      Visit /portfolio to see real projects with measurable results. Filter
                      by industry to find businesses similar to yours.
                    </p>
                  </div>

                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <LayoutGrid className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      Review Services
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      Visit /services to understand what I build, what&apos;s included,
                      and how each project is scoped before development starts.
                    </p>
                  </div>
                </div>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="flex w-16 shrink-0 flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-on-primary">
                  2
                </div>
                <div className="mt-2 min-h-16 w-px flex-1 bg-outline-variant" />
              </div>

              <div className="flex-1 pb-16">
                <span className="mb-3 inline-block rounded-shape-full bg-primary-container px-3 py-1 text-xs font-semibold text-on-primary-container">
                  Step 2 · Get in Touch
                </span>
                <h2 className="mb-3 text-title-large font-bold text-on-background">
                  Fill the Contact Form - Takes 3 Minutes
                </h2>
                <p className="mb-5 leading-relaxed text-on-surface-variant">
                  When you&apos;re ready, go to the Contact page and fill in the form.
                  Be as specific as you can about what you need - the more detail you
                  give, the more precise my response will be. You&apos;ll receive a confirmation email.
                </p>

                <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      What to Include
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      Your business type, the problem you want to solve, your rough
                      project goals, and your preferred timeline.
                    </p>
                  </div>

                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      Response Time
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      I respond to every enquiry within 24 hours on business days -
                      usually much faster.
                    </p>
                  </div>

                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      Prefer WhatsApp?
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      Tap the green WhatsApp button on any page to start a direct
                      conversation instead of using the form.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Go to Contact Page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="flex w-16 shrink-0 flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-on-primary">
                  3
                </div>
                <div className="mt-2 min-h-16 w-px flex-1 bg-outline-variant" />
              </div>

              <div className="flex-1 pb-16">
                <span className="mb-3 inline-block rounded-shape-full bg-primary-container px-3 py-1 text-xs font-semibold text-on-primary-container">
                  Step 3 · After First Call
                </span>
                <h2 className="mb-3 text-title-large font-bold text-on-background">
                  We Align on What to Build - Then You Get a Proposal
                </h2>
                <p className="mb-5 leading-relaxed text-on-surface-variant">
                  After your enquiry, we schedule a free 15-minute discovery call.
                  I&apos;ll ask questions about your business, your customers, and your
                  goals. After the call, I send a written proposal with clear scope,
                  timeline, and exactly what will be delivered. No hidden costs.
                </p>

                <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      Discovery Call
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      A 15-minute call on Google Meet or phone. You describe your
                      business - I ask questions and take notes. No sales pitch. Just
                      fact-finding.
                    </p>
                  </div>

                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      Written Proposal
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      After the call you receive a clear document: scope, deliverables,
                      payment terms, and launch date. You approve before any
                      work starts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="flex w-16 shrink-0 flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-on-primary">
                  4
                </div>
              </div>

              <div className="flex-1 pb-0">
                <span className="mb-3 inline-block rounded-shape-full bg-primary-container px-3 py-1 text-xs font-semibold text-on-primary-container">
                  Step 4 · During & After Build
                </span>
                <h2 className="mb-3 text-title-large font-bold text-on-background">
                  Your Private Client Portal Keeps You Informed
                </h2>
                <p className="mb-5 leading-relaxed text-on-surface-variant">
                  Once work starts, you get access to a private client portal at
                  /portal. You can log in any time to see the current project phase,
                  review milestones, download documents, check invoices, and send
                  messages - without needing to call or email.
                </p>

                <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      Project Status
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      See exactly which phase your project is in and which milestones
                      are complete.
                    </p>
                  </div>

                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <FileDown className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      Documents
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      Download your contract, design mockups, and final deliverables
                      from one place.
                    </p>
                  </div>

                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <Receipt className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      Invoices
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      View and download your invoices. See payment status clearly - no
                      chasing needed.
                    </p>
                  </div>

                  <div className="rounded-shape-md border border-outline-variant bg-surface-container-low p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-shape-md bg-primary-container">
                      <MessagesSquare className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mb-1 text-sm font-semibold text-on-background">
                      Messages
                    </p>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      All project communication in one thread. No more buried email
                      chains.
                    </p>
                  </div>
                </div>

                <Link
                  href="/portal"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Access Your Portal
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className="mb-3 text-xs font-bold tracking-widest text-primary uppercase">
            COMMON QUESTIONS
          </p>
          <h2 className="mb-10 text-headline-small font-bold text-on-background">
            Things People Ask Before Starting
          </h2>

          <div className="space-y-4">
            <details className="group overflow-hidden rounded-shape-md border border-outline-variant bg-surface-container-low">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-semibold text-on-background transition-colors hover:bg-surface-container">
                Do I need to pay anything before the project starts?
                <ChevronRight className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed text-on-surface-variant">
                No upfront payment is required just to enquire or have the discovery
                call. A deposit (typically 50%) is only collected after you have
                reviewed and approved the written proposal. The remaining 50% is due
                at launch.
              </div>
            </details>

            <details className="group overflow-hidden rounded-shape-md border border-outline-variant bg-surface-container-low">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-semibold text-on-background transition-colors hover:bg-surface-container">
                What if I&apos;m not happy with the design?
                <ChevronRight className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed text-on-surface-variant">
                You review the homepage design before any other page is built. If
                it&apos;s not right, we revise until it is - at no extra cost. Your
                approval is required before development moves forward.
              </div>
            </details>

            <details className="group overflow-hidden rounded-shape-md border border-outline-variant bg-surface-container-low">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-semibold text-on-background transition-colors hover:bg-surface-container">
                How do I log into the client portal?
                <ChevronRight className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed text-on-surface-variant">
                Once your project is confirmed, I create your portal account and send
                login credentials to your email. Visit /portal and enter your email
                and password(reset password if needed). If you have trouble logging in, send me a WhatsApp
                message and I&apos;ll reset it immediately.
              </div>
            </details>

            <details className="group overflow-hidden rounded-shape-md border border-outline-variant bg-surface-container-low">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-semibold text-on-background transition-colors hover:bg-surface-container">
                What happens after the website launches?
                <ChevronRight className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed text-on-surface-variant">
                Every project includes 30 days of free post-launch support. After
                that, optional monthly maintenance packages are available. Your portal
                account stays active and you can continue using it to communicate and
                track any ongoing work.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="mb-4 text-3xl font-bold text-on-primary">
            Ready to Take the First Step?
          </h2>
          <p className="mb-8 text-on-primary">
            Browse the work, fill the form, or just send a WhatsApp message.
            There&apos;s no wrong way to start.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-shape-full bg-on-primary px-8 py-4 font-bold text-primary"
            >
              Submit an Enquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-shape-full border-2 border-on-primary px-8 py-4 font-bold text-on-primary transition-colors hover:bg-on-primary/10"
            >
              View My Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

