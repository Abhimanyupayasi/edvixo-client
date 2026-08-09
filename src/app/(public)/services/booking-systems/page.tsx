import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  CalendarCheck,
  MessageSquare,
  CreditCard,
  LayoutDashboard,
  Users,
  XCircle,
  RefreshCw,
  CalendarSync,
  Smartphone,
  Mail,
  Phone,
  BellOff,
  MoonStar,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getFAQSchema } from "@/lib/seo/schemas";
import { SITE_URL } from "@/app/layout";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Online Booking System Development",
  description:
    "Custom appointment and booking systems that reduce no-shows and let customers book 24/7. Get a free quote for your business.",
  alternates: { canonical: `${SITE_URL}/services/booking-systems` },
  openGraph: {
    url: `${SITE_URL}/services/booking-systems`,
    title: "Online Booking System Development - Sapnendra Jaiswal",
    description:
      "Let customers book 24/7. Automated reminders reduce no-shows and simplify scheduling.",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    question: "Can customers reschedule their own appointments?",
    answer:
      "Yes, you can set 'cutoff periods' (e.g., must reschedule 24 hours in advance). Clients get a personal link in their confirmation WhatsApp/Email to manage their booking without calling you.",
  },
  {
    question: "Can I require payment during the booking?",
    answer:
      "Yes. You can require full payment or a partial advance deposit at booking time using secure payment gateways. This drastically reduces no-shows for high-value appointments.",
  },
  {
    question: "How do the automatic reminders work?",
    answer:
      "The system is integrated with WhatsApp and SMS gateways. It automatically triggers messages at intervals you choose (e.g., 1 day before and 2 hours before) to ensure the client remembers their slot.",
  },
  {
    question: "How do I block off holidays or personal time?",
    answer:
      "From your admin dashboard you can block any date, time slot, or recurring day with one click. Customers simply won't see blocked slots as available - no manual intervention needed.",
  },
];

const INCLUSIONS_GRID = [
  { icon: CalendarDays, label: "Calendar management" },
  { icon: MessageSquare, label: "WhatsApp reminders" },
  { icon: Mail, label: "Email confirmations" },
  { icon: CreditCard, label: "Advance payment" },
  { icon: LayoutDashboard, label: "Admin dashboard" },
  { icon: Users, label: "Customer portal" },
  { icon: XCircle, label: "Cancellation handling" },
  { icon: CalendarSync, label: "Google Calendar sync" },
  { icon: Smartphone, label: "Mobile optimised" },
  { icon: CheckCircle2, label: "30-day support" },
];

const FEATURES = [
  {
    icon: CalendarCheck,
    title: "Real-time availability calendar",
    body: "Instantly updated slots so clients never double-book.",
  },
  {
    icon: MessageSquare,
    title: "Automated WhatsApp/SMS reminders",
    body: "Automatically remind clients before their appointment.",
  },
  {
    icon: CreditCard,
    title: "Online advance payment collection",
    body: "Collect deposits or full fees at the time of booking.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin panel to manage all bookings",
    body: "Powerful backend for you and your staff.",
  },
  {
    icon: Users,
    title: "Customer booking history",
    body: "Let clients view and manage their past and future slots.",
  },
  {
    icon: RefreshCw,
    title: "Cancellation and rescheduling",
    body: "Empower clients to change bookings on their own rules.",
  },
];

export default function BookingSystemsPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(FAQS)} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-surface-container-low py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-on-surface-variant mb-8 flex items-center gap-1.5 text-sm"
          >
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
            <span className="text-on-background font-medium">Booking System</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* ── Left: Copy ── */}
            <div>
              {/* Service chip */}
              <div className="rounded-shape-full bg-secondary-container text-on-secondary-container mb-6 inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold">
                <CalendarDays className="h-4 w-4" />
                Booking System
              </div>

              <h1 className="text-on-background mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                Let Customers Book <span className="block">Appointments While</span>
                <span className="block">You Sleep</span>
              </h1>

              <p className="text-on-surface-variant mb-8 text-base leading-relaxed">
                An online booking system reduces no-shows, eliminates phone tag, and lets
                patients/clients book 24/7 without calling your receptionist.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-shape-full bg-primary text-on-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="rounded-shape-full border-outline-variant bg-surface text-on-background hover:bg-surface-container inline-flex items-center gap-2 border px-6 py-3 text-sm font-semibold transition-colors"
                >
                  View Live Demo →
                </Link>
              </div>
            </div>

            {/* ── Right: Booking UI Mockup ── */}
            <div className="hidden justify-center lg:flex">
              <div className="bg-surface rounded-shape-md border-outline-variant w-full max-w-sm overflow-hidden border shadow-lg">
                {/* App header */}
                <div className="bg-secondary-container/60 border-outline-variant border-b px-5 py-4">
                  <p className="text-on-secondary-container text-xs font-semibold tracking-widest uppercase">
                    AuAppointment
                  </p>
                </div>

                {/* Calendar strip */}
                <div className="border-outline-variant border-b px-5 py-4">
                  <div className="flex justify-between gap-1.5">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
                      <div
                        key={d}
                        className={`rounded-shape-md flex flex-1 flex-col items-center py-2 text-xs font-medium ${
                          i === 2
                            ? "bg-primary text-on-primary"
                            : "text-on-surface-variant bg-surface-container"
                        }`}
                      >
                        <span>{d}</span>
                        <span className="mt-0.5 font-bold">{10 + i}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time slots */}
                <div className="space-y-2 px-5 py-4">
                  {[
                    { time: "9:00 AM", available: true },
                    { time: "10:30 AM", available: false },
                    { time: "12:00 PM", available: true },
                    { time: "2:00 PM", available: true },
                  ].map((slot) => (
                    <div
                      key={slot.time}
                      className={`rounded-shape-md flex items-center justify-between border px-4 py-2 text-sm font-medium ${
                        slot.available
                          ? "border-outline-variant text-on-background bg-surface-container-lowest"
                          : "text-on-surface-variant bg-surface-container border-transparent line-through"
                      }`}
                    >
                      <span>{slot.time}</span>
                      {slot.available && (
                        <span className="text-primary text-xs font-semibold">
                          Available
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Confirmed booking badge */}
                <div className="bg-primary-container rounded-shape-md mx-5 mb-5 flex items-start gap-3 p-3">
                  <CalendarCheck className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-on-primary-container text-xs font-bold">
                      Appointment Confirmed
                    </p>
                    <p className="text-on-surface-variant mt-0.5 text-xs">
                      Jane Doe · Dental Cleaning
                    </p>
                    <p className="text-primary text-xs font-semibold">Monday, 9:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-primary mb-3 text-xs font-bold tracking-widest uppercase">
              THE PROBLEM
            </p>
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Why Manual Booking is Costing Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                Icon: Phone,
                iconBg: "bg-error-container",
                iconColor: "text-error",
                title: "Receptionist overload",
                body: "Your receptionist spends 2–3 hours daily managing appointments by phone. That's not patient care.",
              },
              {
                Icon: BellOff,
                iconBg: "bg-secondary-container",
                iconColor: "text-secondary",
                title: "Expensive no-shows",
                body: "Appointment no-shows cost clinics and salons significant monthly revenue in lost bookings.",
              },
              {
                Icon: MoonStar,
                iconBg: "bg-tertiary-container",
                iconColor: "text-tertiary",
                title: "Missed after-hours calls",
                body: "Customers calling after hours or on Sunday get no answer - and book with your competitor instead.",
              },
            ].map((item) => {
              const ProblemIcon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="bg-surface-container-low rounded-shape-md border-outline-variant border p-6 md:p-8"
                >
                  <div className={`w-10 h-10 rounded-shape-md ${item.iconBg} flex items-center justify-center mb-4 shrink-0`}>
                    <ProblemIcon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-on-background mb-2 text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SMART FEATURES ───────────────────────────────────────────────── */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-primary mb-3 text-xs font-bold tracking-widest uppercase">
              WHAT I BUILD
            </p>
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Smart Features for Seamless Scheduling
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {FEATURES.map((card) => {
              const FeatureIcon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-surface rounded-shape-md border-outline-variant border p-6 shadow-sm"
                >
                  <div className="rounded-shape-md bg-primary-container mb-4 flex h-10 w-10 items-center justify-center">
                    <FeatureIcon className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-on-background mb-2 text-sm font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-primary text-2xl font-bold md:text-3xl">
              Your Path to Automation
            </h2>
          </div>

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:gap-4">
            {[
              {
                n: "1",
                title: "Free Call",
                body: "30-min discovery session to understand your business needs.",
              },
              {
                n: "2",
                title: "Design Approval",
                body: "I send the design for your custom booking experience.",
              },
              {
                n: "3",
                title: "Development",
                body: "Writing clean code and configuring booking pathways.",
              },
              {
                n: "4",
                title: "Your Review",
                body: "Full session where you test the system and request tweaks.",
              },
              {
                n: "5",
                title: "Launch",
                body: "Go live and training so you and your staff are confident.",
              },
            ].map((step, i, arr) => (
              <div key={step.n} className="flex min-w-0 flex-1 items-start">
                <div className="flex flex-1 flex-col items-center">
                  <div className="text-on-primary mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-on-primary/30 bg-on-primary/10 text-base font-bold">
                    {step.n}
                  </div>
                  <h3 className="text-on-primary mb-1 text-center text-sm font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-on-primary/60 px-2 text-center text-xs leading-relaxed">
                    {step.body}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <div className="mx-1 mt-6 hidden h-px w-6 shrink-0 bg-on-primary/25 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUSIONS GRID ──────────────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Everything You Need Included
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {INCLUSIONS_GRID.map((item) => {
              const GridIcon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-shape-md bg-surface-container-low border-outline-variant flex flex-col items-center gap-3 border p-5 text-center"
                >
                  <div className="rounded-shape-md bg-primary-container flex h-10 w-10 items-center justify-center">
                    <GridIcon className="text-primary h-5 w-5" />
                  </div>
                  <p className="text-on-background text-xs leading-tight font-semibold">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section className="bg-primary-container py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { stat: "3×", label: "ENQUIRY INCREASE" },
              { stat: "10", label: "AVG. LAUNCH TIME", suffix: " days" },
              { stat: "4.9/5", label: "CLIENT SATISFACTION" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-primary mb-1 text-4xl font-black md:text-5xl">
                  {item.stat}
                  {item.suffix && (
                    <span className="text-2xl font-bold">{item.suffix}</span>
                  )}
                </p>
                <p className="text-on-background mt-2 text-xs font-bold tracking-widest uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="bg-surface rounded-shape-md border-outline-variant mx-auto max-w-md border p-10 shadow-sm">
            <div className="w-14 h-14 rounded-shape-xl bg-primary-container flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-7 h-7 text-primary" />
            </div>

            <h2 className="text-headline-small font-bold text-on-background mb-3 text-center">
              Let&apos;s Talk About Your Project
            </h2>

            <p className="text-on-surface-variant leading-relaxed mb-8 text-sm max-w-sm mx-auto text-center">
              Every project is different. Share what you need and I&apos;ll send you a
              clear, detailed quote within 24 hours - no commitment,
              no pressure.
            </p>

            <div className="bg-surface-container-low rounded-shape-xl p-5 text-left mb-8 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                Your Free Consultation Includes
              </p>
              {[
                "A clear breakdown of what I'd build for your business",
                "Honest timeline and scope - no surprises later",
                "A fixed-price quote tailored to your exact requirements",
                "No obligation to proceed",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-on-background">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="block w-full py-4 rounded-shape-full bg-primary text-on-primary font-bold text-center text-sm hover:opacity-90 transition-opacity mb-3"
            >
              Get a Free Custom Quote →
            </Link>

            <a
              href="https://wa.me/919685238884"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-shape-full border border-outline-variant text-on-surface-variant font-semibold text-center text-sm hover:bg-surface-container-low transition-colors"
            >
              Or message on WhatsApp
            </a>

            <p className="text-xs text-on-surface-variant mt-4 text-center">
              Response within 24 hours · No spam · Unsubscribe any time
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-on-background text-2xl font-bold md:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group bg-surface-container-low rounded-shape-md border-outline-variant overflow-hidden border"
              >
                <summary className="text-on-background hover:bg-surface-container flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold transition-colors md:text-base">
                  {faq.question}
                  <ChevronRight className="text-on-surface-variant h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-90" />
                </summary>
                <div className="text-on-surface-variant px-5 pb-5 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-on-primary mb-4 text-3xl font-bold md:text-4xl">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-on-primary/80 mb-8 text-base">
            Stop losing money to manual errors and missed calls. Build a professional
            booking system tailored for your unique workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-shape-full text-primary inline-flex items-center gap-2 bg-surface px-8 py-4 font-bold transition-opacity hover:opacity-90"
            >
              Schedule a Consultation
            </Link>
            <a
              href="https://wa.me/919685238884"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-shape-full text-on-primary inline-flex items-center gap-2 border-2 border-on-primary/40 px-8 py-4 font-bold transition-colors hover:bg-on-primary/10"
            >
              WhatsApp Me →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
