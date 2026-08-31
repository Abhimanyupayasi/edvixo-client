import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceFinalCta from "@/components/services/ServiceFinalCta";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  Code2,
  CreditCard,
  Eye,
  Globe,
  Layers,
  LayoutDashboard,
  MessageSquare,
  Monitor,
  MousePointer2,
  Package,
  Palette,
  Route,
  Search,
  Server,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  Zap,
  CalendarCheck,
  MapPin,
  Wrench,
  Headphones,
  Clock,
} from "lucide-react";

import services from "@/data/services.json";

type ServiceSlug = keyof typeof services;

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services[slug as ServiceSlug];

  if (!service) {
    return {
      title: "Service Not Found - Edvixo",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${service.title} Services - Edvixo`,
    description: service.heroDescription,
  };
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  /*
   * Each service gets its own visual structure.
   */

  switch (slug) {
    case "web-development":
      return <WebDevelopmentPage service={service} />;

    case "app-development":
      return <AppDevelopmentPage service={service} />;

    case "ecom-development":
      return <EcommercePage service={service} />;

    case "design":
      return <DesignPage service={service} />;

    case "miscellaneous":
      return <MiscellaneousPage service={service} />;

    default:
      return <WebDevelopmentPage service={service} />;
  }
}

/* =========================================================
   SHARED PAGE WRAPPER
========================================================= */

function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061827] text-white">
      {children}
    </main>
  );
}

/* =========================================================
   SHARED BACK LINK
========================================================= */

function BackToServices() {
  return (
    <Link
      href="/services"
      className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-[#ff8b2c]"
    >
      <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-1" />
      ALL SERVICES
    </Link>
  );
}

/* =========================================================
   WEB DEVELOPMENT
   STYLE:
   Editorial / Browser / Business Website
========================================================= */

function WebDevelopmentPage({ service }: { service: any }) {
  return (
    <PageShell>

      {/* =====================================================
          WEB HERO
      ===================================================== */}

      <section className="relative border-b border-white/10">

        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#ff8b2c]/10 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/5 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">

          <BackToServices />

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8b2c]/30 bg-[#ff8b2c]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
                <Globe className="h-3.5 w-3.5" />
                WEB DEVELOPMENT
              </div>

              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.94] tracking-tight md:text-7xl">
                {service.heroTitle}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {service.trustChips.map((chip: string) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-slate-300"
                  >
                    ✓ {chip}
                  </span>
                ))}

              </div>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff8b2c] px-7 py-3.5 text-sm font-bold shadow-[0_0_35px_rgba(255,139,44,0.2)] transition hover:-translate-y-1"
                >
                  {service.heroCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={service.secondaryCtaLink}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-7 py-3.5 text-sm font-bold transition hover:border-[#ff8b2c]/40"
                >
                  {service.secondaryCta}
                </Link>

              </div>

            </div>

            {/* RIGHT BROWSER */}

            <WebBrowser />

          </div>

        </div>
      </section>

      {/* =====================================================
          WEB INTRO
      ===================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
                {service.overview?.label || "WEB DEVELOPMENT"}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                {service.overview?.title || "More Than Just a Website"}
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-slate-300">
                {service.overview?.description}
              </p>

              <p className="mt-6 leading-8 text-slate-500">
                {service.overview?.body}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          WEB SOLUTIONS
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#081d2d] py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
                WHAT WE BUILD
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                Websites for real business needs.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              From simple business websites to advanced web applications,
              every project is structured around its purpose.
            </p>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {(service.solutions || []).map(
              (solution: any, index: number) => (
                <div
                  key={solution.title}
                  className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b2235] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/50"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-black text-[#ff8b2c]">
                      {solution.number || `0${index + 1}`}
                    </span>

                    <ArrowUpRightSmall />

                  </div>

                  <h3 className="mt-12 text-2xl font-black">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {solution.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#ff8b2c] transition-all duration-500 group-hover:w-full" />

                </div>
              )
            )}

          </div>

        </div>
      </section>

      <WebBusinessSection service={service} />

      <ProblemsSection
        service={service}
        title="Digital problems should have digital solutions."
      />

      <CapabilitiesSection
        service={service}
        title="The foundation behind a better website."
      />

      <ProcessSection service={service} />

      <IncludedSection service={service} />

      <FinalServiceSections service={service} />

    </PageShell>
  );
}

/* =========================================================
   WEB BROWSER
========================================================= */

function WebBrowser() {
  return (
    <div className="relative">

      <div className="absolute -inset-10 rounded-full bg-[#ff8b2c]/10 blur-[100px]" />

      <div className="relative rotate-[1deg] overflow-hidden rounded-[2rem] border border-white/10 bg-[#071522] p-3 shadow-2xl transition duration-500 hover:rotate-0">

        <div className="flex items-center gap-2 border-b border-white/10 px-3 pb-3">

          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

          <div className="ml-3 h-6 flex-1 rounded-lg bg-white/5" />

        </div>

        <div className="grid gap-5 p-5 md:grid-cols-[0.8fr_1.2fr]">

          <div>

            <div className="h-2.5 w-20 rounded-full bg-[#ff8b2c]" />

            <div className="mt-5 h-8 w-full rounded-lg bg-white/80" />

            <div className="mt-3 h-2.5 w-4/5 rounded-full bg-white/10" />

            <div className="mt-6 h-9 w-28 rounded-full bg-[#ff8b2c]" />

            <div className="mt-8 grid grid-cols-2 gap-2">

              <div className="h-12 rounded-xl border border-white/10" />
              <div className="h-12 rounded-xl border border-white/10" />

            </div>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0b2235] p-4">

            <div className="grid grid-cols-3 gap-3">

              <div className="h-24 rounded-xl bg-white/5" />
              <div className="h-24 rounded-xl bg-[#ff8b2c]/10" />
              <div className="h-24 rounded-xl bg-white/5" />

            </div>

            <div className="mt-4 h-2.5 w-2/3 rounded-full bg-white/10" />
            <div className="mt-3 h-2.5 w-1/2 rounded-full bg-white/5" />

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   WEB BUSINESS SECTION
========================================================= */

function WebBusinessSection({ service }: { service: any }) {
  return (
    <section className="py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="mb-12 max-w-3xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
            WHO IT&apos;S FOR
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Built around your audience.
          </h2>

        </div>

        <div className="grid gap-4 md:grid-cols-5">

          {service.card.whoItsFor.map(
            (item: string, index: number) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b2235] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/50"
              >

                <span className="text-[10px] font-black text-[#ff8b2c]">
                  0{index + 1}
                </span>

                <h3 className="mt-12 font-bold">
                  {item}
                </h3>

                <div className="mt-5 h-px w-8 bg-[#ff8b2c] transition-all group-hover:w-full" />

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   ECOMMERCE
   STYLE:
   Store / Shopping / Conversion
========================================================= */


/* =========================================================
   ECOMMERCE
   STYLE:
   Store / Shopping / Conversion
========================================================= */

function EcommercePage({ service }: { service: any }) {
  return (
    <PageShell>

      {/* =====================================================
          ECOMMERCE HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#ff8b2c]/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-400/5 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <BackToServices />

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8b2c]/30 bg-[#ff8b2c]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
                <ShoppingBag className="h-3.5 w-3.5" />
                ECOMMERCE DEVELOPMENT
              </div>

              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.94] tracking-tight md:text-7xl">
                {service.heroTitle}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {(service.trustChips || []).map((chip: string) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-slate-300"
                  >
                    ✓ {chip}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff8b2c] px-7 py-3.5 text-sm font-bold shadow-[0_0_35px_rgba(255,139,44,0.2)] transition hover:-translate-y-1"
                >
                  {service.heroCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={service.secondaryCtaLink || "/portfolio"}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-7 py-3.5 text-sm font-bold transition hover:border-[#ff8b2c]/40"
                >
                  {service.secondaryCta || "View Our Work"}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-[#ff8b2c]/10 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#081d2d] p-3 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-3 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 h-6 flex-1 rounded-lg bg-white/5" />
                </div>

                <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#0b2235]">
                  <Image
  src="/images/services/ecommerce-hero.jpg"
  alt="Modern ecommerce website"
  fill
  priority
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 55vw"
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061827]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div className="rounded-2xl border border-white/10 bg-[#061827]/90 px-4 py-3 backdrop-blur">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500">
                        SHOPPING
                      </p>
                      <p className="mt-1 text-sm font-bold">
                        Easy Shopping
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#061827]/90 px-4 py-3 backdrop-blur">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500">
                        CHECKOUT
                      </p>
                      <p className="mt-1 text-sm font-bold text-green-400">
                        Secure Payment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          STORE OVERVIEW
      ===================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-5 md:grid-cols-3">
            <StoreStat
              icon={<Package className="h-5 w-5" />}
              label="PRODUCT CATALOG"
              value="1,248"
              text="Products organized for simple discovery."
            />

            <StoreStat
              icon={<Users className="h-5 w-5" />}
              label="CUSTOMERS"
              value="8,420"
              text="Experience designed around real shoppers."
            />

            <StoreStat
              icon={<TrendingUp className="h-5 w-5" />}
              label="CONVERSION"
              value="4.8%"
              text="Clear journeys designed to reduce friction."
            />
          </div>

        </div>
      </section>

      {/* =====================================================
          STORE FEATURES
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#081d2d] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
                STORE EXPERIENCE
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                Everything your online store needs.
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                From product discovery to checkout, every part of the
                experience is designed to make buying easier.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(service.features || []).map((feature: any, index: number) => (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-white/10 bg-[#0b2235] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#ff8b2c]/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff8b2c]/10 text-[#ff8b2c]">
                      <ShoppingBag className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-black text-[#ff8b2c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <ProblemsSection
        service={service}
        title="Shopping friction should never cost you a customer."
      />

      <ProcessSection service={service} />

      <IncludedSection service={service} />

      <FinalServiceSections service={service} />

    </PageShell>
  );
}

/* =========================================================
   APP DEVELOPMENT
   STYLE:
   Mobile Product / App Screens / User Journey
========================================================= */

function AppDevelopmentPage({ service }: { service: any }) {
  return (
    <PageShell>

      {/* =====================================================
          APP HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ff8b2c]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">

          <BackToServices />

          <div className="mt-14 grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8b2c]/30 bg-[#ff8b2c]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
                <Smartphone className="h-3.5 w-3.5" />
                MOBILE APP DEVELOPMENT
              </div>

              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.94] md:text-7xl">
                {service.heroTitle}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {service.trustChips.map((chip: string) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300"
                  >
                    ✓ {chip}
                  </span>
                ))}

              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#ff8b2c] px-7 py-3.5 text-sm font-bold transition hover:-translate-y-1"
              >
                {service.heroCta}
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            <AppShowcase />

          </div>

        </div>
      </section>

      {/* =====================================================
          APP BENEFITS
      ===================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="mb-12">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
              PRODUCT EXPERIENCE
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Built for people who use it every day.
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <AppBenefit
              icon={<Smartphone className="h-5 w-5" />}
              title="Mobile First"
              text="Interfaces designed specifically around mobile behaviour."
            />

            <AppBenefit
              icon={<Zap className="h-5 w-5" />}
              title="Fast Interaction"
              text="Smooth experiences that keep important actions simple."
            />

            <AppBenefit
              icon={<Users className="h-5 w-5" />}
              title="User Focused"
              text="Clear flows that help users complete tasks without confusion."
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          APP FEATURE MAP
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#081d2d] py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
                APP CAPABILITIES
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                Every screen has a purpose.
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                We focus on useful functionality instead of adding features
                just for the sake of having more features.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {service.features.map(
                (feature: any, index: number) => (
                  <div
                    key={feature.title}
                    className="rounded-3xl border border-white/10 bg-[#0b2235] p-6 transition hover:border-[#ff8b2c]/40"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-black text-[#ff8b2c]">
                        0{index + 1}
                      </span>

                      <Smartphone className="h-5 w-5 text-slate-600" />

                    </div>

                    <h3 className="mt-8 font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {feature.body}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          APP FLOW
      ===================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="mb-12 text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
              USER FLOW
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              From opening the app to completing the task.
            </h2>

          </div>

          <div className="grid gap-4 md:grid-cols-4">

            {[
              ["01", "OPEN", "Simple entry point"],
              ["02", "EXPLORE", "Clear navigation"],
              ["03", "ACTION", "Focused interaction"],
              ["04", "COMPLETE", "Useful result"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="relative rounded-3xl border border-white/10 bg-[#0b2235] p-7"
              >

                <span className="text-4xl font-black text-[#ff8b2c]/30">
                  {number}
                </span>

                <h3 className="mt-6 font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      <ProblemsSection
        service={service}
        title="Business problems an app can solve."
      />

      <ProcessSection service={service} />

      <IncludedSection service={service} />

      <ServiceFaq items={service.faqs} />

<ServiceFinalCta
  title={service.finalCta.title}
  description={service.finalCta.description}
  primary={service.finalCta.primary}
  whatsapp={service.finalCta.whatsapp}
  whatsappUrl={service.consultation.whatsappUrl}
/>

    </PageShell>
  );
}

/* =========================================================
   APP SHOWCASE
========================================================= */

function AppShowcase() {
  return (
    <div className="relative flex min-h-[500px] items-center justify-center">

      <div className="absolute h-[350px] w-[350px] rounded-full bg-[#ff8b2c]/10 blur-[100px]" />

      <div className="absolute left-[5%] top-[12%] z-10 h-[390px] w-[205px] -rotate-[10deg] rounded-[2.5rem] border-[7px] border-[#20384c] bg-[#020d17] p-2 shadow-2xl">

        <MobileScreen />

      </div>

      <div className="relative z-20 h-[460px] w-[235px] rounded-[2.8rem] border-[8px] border-[#294157] bg-[#020d17] p-2 shadow-2xl">

        <MobileScreen main />

      </div>

      <div className="absolute bottom-[5%] right-[5%] z-10 h-[360px] w-[190px] rotate-[9deg] rounded-[2.5rem] border-[7px] border-[#20384c] bg-[#020d17] p-2 shadow-2xl">

        <MobileScreen />

      </div>

    </div>
  );
}

/* =========================================================
   MOBILE SCREEN
========================================================= */

function MobileScreen({ main = false }: { main?: boolean }) {
  return (
    <div className="h-full overflow-hidden rounded-[2rem] bg-[#081d2d]">

      <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-black" />

      <div className="p-4">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-[8px] text-slate-500">
              WELCOME
            </p>

            <p className="mt-1 text-xs font-bold">
              Dashboard
            </p>

          </div>

          <div className="h-7 w-7 rounded-full bg-[#ff8b2c]" />

        </div>

        <div className="mt-6 rounded-2xl bg-[#ff8b2c] p-4">

          <p className="text-[8px] text-white/70">
            TODAY
          </p>

          <p className={`${main ? "text-4xl" : "text-3xl"} mt-2 font-black`}>
            84
          </p>

          <p className="mt-1 text-[8px] text-white/70">
            Active activities
          </p>

        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">

          {["Users", "Messages", "Payments", "Tasks"].map(
            (item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 p-3"
              >

                <div className="h-5 w-5 rounded-lg bg-[#ff8b2c]/10" />

                <p className="mt-2 text-[8px] font-bold">
                  {item}
                </p>

              </div>
            )
          )}

        </div>

        <div className="mt-4 rounded-xl border border-white/10 p-3">

          <p className="text-[8px] text-slate-500">
            RECENT ACTIVITY
          </p>

          <div className="mt-3 space-y-2">

            <div className="h-1.5 w-full rounded-full bg-white/10" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
            <div className="h-1.5 w-3/5 rounded-full bg-white/10" />

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   APP BENEFIT
========================================================= */

function AppBenefit({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b2235] p-7">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff8b2c]/10 text-[#ff8b2c]">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {text}
      </p>

    </div>
  );
}

/* =========================================================
   DESIGN
   STYLE:
   Creative Studio / Design Board / Components
========================================================= */

function DesignPage({ service }: { service: any }) {
  return (
    <PageShell>

      {/* =====================================================
          DESIGN HERO
      ===================================================== */}

      <section className="border-b border-white/10 py-16 md:py-24">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <BackToServices />

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#ff8b2c]">
                DIGITAL DESIGN STUDIO
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.92] md:text-7xl">
                {service.heroTitle}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {service.trustChips.map((chip: string) => (
                  <span
                    key={chip}
                    className="border-b border-[#ff8b2c]/40 pb-2 text-xs font-semibold text-slate-300"
                  >
                    {chip}
                  </span>
                ))}

              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#ff8b2c] px-7 py-3.5 text-sm font-bold"
              >
                {service.heroCta}
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            <DesignBoard />

          </div>

        </div>
      </section>

      {/* =====================================================
          DESIGN PRINCIPLES
      ===================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-5 md:grid-cols-3">

            <DesignPrinciple
              number="01"
              title="CLARITY"
              text="Every visual decision should make the experience easier to understand."
            />

            <DesignPrinciple
              number="02"
              title="CONSISTENCY"
              text="Reusable components create a recognizable and reliable experience."
            />

            <DesignPrinciple
              number="03"
              title="PURPOSE"
              text="Good design connects aesthetics with business and user goals."
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          DESIGN CAPABILITIES
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#081d2d] py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
                DESIGN TOOLKIT
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                From first sketch to final interface.
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {service.features.map(
                (feature: any, index: number) => (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-white/10 bg-[#0b2235] p-6 hover:border-[#ff8b2c]/40"
                  >

                    <div className="flex items-center justify-between">

                      <Palette className="h-5 w-5 text-[#ff8b2c]" />

                      <span className="text-xs text-slate-600">
                        0{index + 1}
                      </span>

                    </div>

                    <h3 className="mt-7 font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {feature.body}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          DESIGN SYSTEM
      ===================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="rounded-[2rem] border border-white/10 bg-[#0b2235] p-7 md:p-12">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
                  DESIGN SYSTEM
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  Consistency by design.
                </h2>

              </div>

              <p className="max-w-md text-sm leading-7 text-slate-500">
                Components, typography, spacing and visual rules work
                together as one system.
              </p>

            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-4">

              {[
                "Typography",
                "Colour",
                "Components",
                "Spacing",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#071522] p-6"
                >

                  <span className="text-xs font-black text-[#ff8b2c]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 font-bold">
                    {item}
                  </h3>

                  <div className="mt-6 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#ff8b2c]"
                      style={{
                        width: `${55 + index * 10}%`,
                      }}
                    />
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      <ProblemsSection
        service={service}
        title="Design problems that affect the experience."
      />

      <ProcessSection service={service} />

      <IncludedSection service={service} />

      <FinalServiceSections service={service} />

    </PageShell>
  );
}

/* =========================================================
   DESIGN BOARD
========================================================= */

function DesignBoard() {
  return (
    <div className="relative h-[470px]">

      <div className="absolute left-0 top-4 w-[75%] -rotate-3 rounded-[2rem] border border-white/10 bg-[#102d45] p-6 shadow-2xl">

        <div className="flex gap-2">

          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

        </div>

        <div className="mt-8 h-4 w-28 rounded-full bg-[#ff8b2c]" />

        <div className="mt-5 h-12 w-4/5 rounded-xl bg-white/80" />

        <div className="mt-4 h-3 w-3/5 rounded-full bg-white/10" />

        <div className="mt-8 grid grid-cols-3 gap-3">

          <div className="h-28 rounded-xl bg-white/10" />
          <div className="h-28 rounded-xl bg-[#ff8b2c]/20" />
          <div className="h-28 rounded-xl bg-white/5" />

        </div>

      </div>

      <div className="absolute bottom-0 right-0 w-[65%] rounded-[2rem] border border-white/10 bg-[#0b2235] p-6 shadow-2xl">

        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
          COMPONENT LIBRARY
        </p>

        <div className="mt-6 flex gap-3">

          <span className="h-10 w-10 rounded-full bg-[#ff8b2c]" />
          <span className="h-10 w-10 rounded-full bg-blue-400" />
          <span className="h-10 w-10 rounded-full bg-white" />
          <span className="h-10 w-10 rounded-full bg-slate-600" />

        </div>

        <div className="mt-7 space-y-3">

          <div className="h-2 rounded-full bg-white/10" />
          <div className="h-2 w-4/5 rounded-full bg-white/10" />
          <div className="h-2 w-3/5 rounded-full bg-white/10" />

        </div>

      </div>

      <div className="absolute right-[10%] top-[20%] rounded-2xl border border-[#ff8b2c]/30 bg-[#ff8b2c]/10 p-4">

        <MousePointer2 className="h-6 w-6 text-[#ff8b2c]" />

      </div>

    </div>
  );
}

/* =========================================================
   DESIGN PRINCIPLE
========================================================= */

function DesignPrinciple({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b2235] p-7">

      <span className="text-4xl font-black text-[#ff8b2c]/30">
        {number}
      </span>

      <h3 className="mt-7 font-black tracking-[0.2em]">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-500">
        {text}
      </p>

    </div>
  );
}

/* =========================================================
   MISCELLANEOUS
   STYLE:
   Business Operations / Dashboard / Tools
========================================================= */

function MiscellaneousPage({ service }: { service: any }) {
  return (
    <PageShell>

      {/* =====================================================
          BUSINESS HERO
      ===================================================== */}

      <section className="relative border-b border-white/10 py-16 md:py-24">

        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#ff8b2c]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">

          <BackToServices />

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8b2c]/30 bg-[#ff8b2c]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
                <Wrench className="h-3.5 w-3.5" />
                BUSINESS SOLUTIONS
              </div>

              <h1 className="mt-6 text-5xl font-black leading-[0.95] md:text-7xl">
                {service.heroTitle}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {service.trustChips.map((chip: string) => (
                  <span
                    key={chip}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300"
                  >
                    {chip}
                  </span>
                ))}

              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#ff8b2c] px-7 py-3.5 text-sm font-bold"
              >
                {service.heroCta}
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            <BusinessDashboard />

          </div>

        </div>
      </section>

      {/* =====================================================
          SOLUTION TYPES
      ===================================================== */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="mb-12">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
              PRACTICAL SOLUTIONS
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Solve the actual business problem.
            </h2>

          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {service.features.map(
              (feature: any, index: number) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-[#0b2235] p-7 transition hover:border-[#ff8b2c]/40"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff8b2c]/10">
                      <Wrench className="h-5 w-5 text-[#ff8b2c]" />
                    </div>

                    <span className="text-xs text-slate-600">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.body}
                  </p>

                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          OPERATIONS
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#081d2d] py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
                BUSINESS OPERATIONS
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                Less manual work. More control.
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                Digital tools can connect customer communication, bookings,
                reporting and everyday workflows into one practical system.
              </p>

            </div>

            <div className="space-y-3">

              {[
                "Customer requests",
                "Bookings & appointments",
                "Business information",
                "Communication",
                "Reports & analytics",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b2235] p-5"
                >

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff8b2c]/10 text-xs font-bold text-[#ff8b2c]">
                    0{index + 1}
                  </div>

                  <span className="font-semibold">
                    {item}
                  </span>

                  <Check className="ml-auto h-4 w-4 text-[#ff8b2c]" />

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      <ProblemsSection
        service={service}
        title="Small digital problems can create big business friction."
      />

      <ProcessSection service={service} />

      <IncludedSection service={service} />

      <FinalServiceSections service={service} />

    </PageShell>
  );
}

/* =========================================================
   BUSINESS DASHBOARD
========================================================= */

function BusinessDashboard() {
  return (
    <div className="relative">

      <div className="absolute -inset-10 rounded-full bg-[#ff8b2c]/10 blur-[100px]" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#081d2d] p-5 shadow-2xl">

        <div className="flex items-center justify-between border-b border-white/10 pb-5">

          <div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              BUSINESS CONTROL
            </p>

            <h3 className="mt-2 font-bold">
              Today&apos;s Overview
            </h3>

          </div>

          <BarChart3 className="h-6 w-6 text-[#ff8b2c]" />

        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">

          {[
            ["Bookings", "48"],
            ["Customers", "326"],
            ["Messages", "84"],
            ["Tasks", "17"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-[#0b2235] p-5"
            >

              <p className="text-[10px] text-slate-500">
                {label}
              </p>

              <p className="mt-2 text-3xl font-black">
                {value}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-[#0b2235] p-5">

          <p className="text-[10px] text-slate-500">
            BUSINESS ACTIVITY
          </p>

          <div className="mt-5 flex h-28 items-end gap-2">

            {[35, 60, 45, 80, 55, 90, 70].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-md bg-[#ff8b2c]/70"
                  style={{
                    height: `${height}%`,
                  }}
                />
              )
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

/* =========================================================
   COMMON PROBLEMS SECTION
========================================================= */

function ProblemsSection({
  service,
  title,
}: {
  service: any;
  title: string;
}) {
  return (
    <section className="border-y border-white/10 bg-[#081d2d] py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
              COMMON CHALLENGES
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              {title}
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              We focus on identifying the actual problem first, then
              creating a digital solution around it.
            </p>

          </div>

          <div className="space-y-3">

            {service.problems.map(
              (problem: any, index: number) => (
                <div
                  key={problem.title}
                  className="group rounded-2xl border border-white/10 bg-[#0b2235] p-6 transition duration-300 hover:border-[#ff8b2c]/40"
                >

                  <div className="flex gap-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-xs font-black text-red-400">
                      0{index + 1}
                    </div>

                    <div>

                      <h3 className="font-bold">
                        {problem.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {problem.body}
                      </p>

                    </div>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   COMMON CAPABILITIES
========================================================= */

function CapabilitiesSection({
  service,
  title,
}: {
  service: any;
  title: string;
}) {
  return (
    <section className="py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="mb-12 max-w-3xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
            CAPABILITIES
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            {title}
          </h2>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {service.features.map(
            (feature: any, index: number) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-[#0b2235] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/50"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff8b2c]/10 text-[#ff8b2c]">
                    <Layers className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-black text-[#ff8b2c]">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {feature.body}
                </p>

              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   COMMON PROCESS
========================================================= */

function ProcessSection({ service }: { service: any }) {
  return (
    <section className="py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="mb-12">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
            HOW WE WORK
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            A clear path from idea to launch.
          </h2>

        </div>

        <div className="relative">

          <div className="absolute left-5 top-6 hidden h-px w-[calc(100%-40px)] bg-white/10 lg:block" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">

            {service.process.map((step: any) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-[#0b2235] p-6 transition hover:-translate-y-2 hover:border-[#ff8b2c]/40"
              >

                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#061827] text-xs font-black text-[#ff8b2c] ring-1 ring-[#ff8b2c]/30">
                  {step.number}
                </div>

                <h3 className="mt-6 font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.body}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   COMMON INCLUDED
========================================================= */

function IncludedSection({ service }: { service: any }) {
  return (
    <section className="border-y border-white/10 bg-[#081d2d] py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff8b2c]">
              INCLUDED
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              What comes with the project.
            </h2>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {service.inclusions.map((item: any) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-[#0b2235] p-5"
              >

                <div className="flex gap-3">

                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff8b2c]" />

                  <div>

                    <h3 className="font-bold">
                      {item.label}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.note}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   FAQ + FINAL CTA
========================================================= */

function FinalServiceSections({ service }: { service: any }) {
  return (
    <>
      <ServiceFaq items={service.faqs || []} />

      <ServiceFinalCta
        title={service.finalCta.title}
        description={service.finalCta.description}
        primary={service.finalCta.primary}
        whatsapp={service.finalCta.whatsapp}
        whatsappUrl={service.consultation.whatsappUrl}
      />
    </>
  );
}

/* =========================================================
   STORE STAT
========================================================= */

function StoreStat({
  icon,
  label,
  value,
  text,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  text: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-[#0b2235] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#ff8b2c]/40">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff8b2c]/10 text-[#ff8b2c]">
        {icon}
      </div>

      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-4xl font-black">
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {text}
      </p>

      <div className="mt-6 h-px w-8 bg-[#ff8b2c] transition-all duration-500 group-hover:w-full" />

    </div>
  );
}

/* =========================================================
   SMALL ARROW
========================================================= */

function ArrowUpRightSmall() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-600 transition group-hover:border-[#ff8b2c]/40 group-hover:text-[#ff8b2c]">
      ↗
    </span>
  );
}