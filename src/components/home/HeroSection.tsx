import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CalendarCheck,
  CheckCircle,
  Monitor,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

import { HeroInteractiveShell } from "@/components/home/HeroInteractiveShell";

const trustStats = [
  {
    value: "15+",
    label: "BUSINESSES SERVED",
  },
  {
    value: "Global",
    label: "DELIVERY",
  },
  {
    value: "5-Star",
    label: "RATED SERVICE",
  },
];

const trustSignals = [
  "Free 30-min call",
  "No tech jargon",
  "Custom Quote in 24 Hours",
];

const chartData = [
  { label: "Jan", value: 42 },
  { label: "Feb", value: 58 },
  { label: "Mar", value: 48 },
  { label: "Apr", value: 76 },
  { label: "May", value: 61 },
  { label: "Jun", value: 92 },
];

const conversionData = [
  {
    label: "Website Visitors",
    value: "8,420",
    percentage: 82,
  },
  {
    label: "Qualified Leads",
    value: "1,284",
    percentage: 58,
  },
  {
    label: "Bookings",
    value: "84",
    percentage: 34,
  },
];

export function HeroSection() {
  return (
    <HeroInteractiveShell className="bg-surface-container-lowest pt-16 pb-10 lg:pt-20 lg:pb-14">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* =========================================================
              LEFT SIDE
          ========================================================= */}

          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="hero-reveal hero-reveal-delay-1 mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-outline-variant/70 bg-surface/70 px-4 py-2 shadow-sm backdrop-blur-sm lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>

              <span className="text-sm text-on-surface-variant">
                Trusted digital partner for growing businesses
              </span>
            </div>

            {/* Heading */}
            <h1 className="hero-reveal hero-reveal-delay-2 mb-6 text-4xl font-black leading-[0.95] tracking-tight text-on-background md:text-5xl lg:text-[3.7rem]">
              Empowering
              <br />
              Businesses with
              <br />
              Tech Talent &amp;
              <br />
              <span className="text-primary">Digital Solutions</span>
            </h1>

            {/* Description */}
            <p className="hero-reveal hero-reveal-delay-3 mx-auto mb-8 max-w-xl text-base leading-relaxed text-on-surface-variant lg:mx-0">
              Edvixo helps companies launch faster, design better experiences,
              and scale with dependable digital products, web solutions, and
              technical support.
            </p>

            {/* CTA */}
            <div className="hero-reveal hero-reveal-delay-4 mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                className="hero-cta-primary relative h-12 w-full overflow-hidden rounded-2xl bg-primary px-8 text-base font-semibold text-on-primary shadow-[0_16px_35px_rgba(255,139,44,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary sm:w-auto"
              >
                <Link href="/contact">Book a Free Call</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="hero-cta-secondary relative h-12 w-full rounded-2xl border-outline-variant/70 bg-surface/60 px-8 text-base font-semibold text-on-background shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface sm:w-auto"
              >
                <Link href="/work">View Case Studies</Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="hero-reveal hero-reveal-delay-5 mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/60 bg-surface/60 px-3 py-2 text-xs text-on-surface-variant backdrop-blur-sm"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-primary" />
                  {signal}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="hero-reveal hero-reveal-delay-6 grid grid-cols-3 gap-3 text-center lg:text-left">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-outline-variant/50 bg-surface/50 px-3 py-4 shadow-sm backdrop-blur-sm"
                >
                  <p className="text-xl font-bold text-primary md:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[8px] font-medium tracking-[0.15em] text-on-surface-variant md:text-[9px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              RIGHT SIDE — DATA DASHBOARD
          ========================================================= */}

          <div className="relative hidden h-[500px] w-full items-center justify-center sm:flex lg:h-[540px]">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[90px]" />

            {/* =====================================================
                MAIN DASHBOARD
            ===================================================== */}

            <div className="relative z-10 w-[82%] max-w-[470px]">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#18251f,#111b17)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                {/* Browser Header */}
                <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-black/20 px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />

                  <div className="ml-2 h-4 flex-1 rounded-full bg-white/5" />

                  <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[7px] font-semibold text-emerald-300">
                    LIVE
                  </span>
                </div>

                <div className="space-y-3 p-4">
                  {/* TOP SUMMARY */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                        Business Overview
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Growth Dashboard
                      </p>
                    </div>

                    <div className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-1">
                      <TrendingUp className="h-3 w-3 text-emerald-300" />

                      <span className="text-[9px] font-bold text-emerald-300">
                        +24.8%
                      </span>
                    </div>
                  </div>

                  {/* KPI CARDS */}
                  <div className="grid grid-cols-3 gap-2">
                    {/* Leads */}
                    <div className="rounded-2xl border border-orange-400/30 bg-orange-400/10 p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <Users className="h-3.5 w-3.5 text-orange-400" />
                        <ArrowUpRight className="h-3 w-3 text-orange-300" />
                      </div>

                      <p className="text-lg font-bold text-white">127</p>

                      <p className="text-[8px] uppercase tracking-wide text-white/40">
                        New Leads
                      </p>
                    </div>

                    {/* Bookings */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <CalendarCheck className="h-3.5 w-3.5 text-cyan-300" />

                        <span className="text-[8px] font-bold text-emerald-300">
                          +18%
                        </span>
                      </div>

                      <p className="text-lg font-bold text-white">84</p>

                      <p className="text-[8px] uppercase tracking-wide text-white/40">
                        Bookings
                      </p>
                    </div>

                    {/* Conversion */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <TrendingUp className="h-3.5 w-3.5 text-emerald-300" />

                        <span className="text-[8px] font-bold text-emerald-300">
                          +12%
                        </span>
                      </div>

                      <p className="text-lg font-bold text-white">4.8%</p>

                      <p className="text-[8px] uppercase tracking-wide text-white/40">
                        Conversion
                      </p>
                    </div>
                  </div>

                  {/* CHART + CONVERSION */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* LEAD GROWTH */}
                    <div className="rounded-[22px] border border-white/10 bg-white/5 p-3">
                      <div className="mb-3 flex items-start justify-between">
                        <div>
                          <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-white/40">
                            Lead Growth
                          </p>

                          <p className="mt-1 text-lg font-bold text-white">
                            +36.4%
                          </p>
                        </div>

                        <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[7px] font-semibold text-emerald-300">
                          3 Months
                        </span>
                      </div>

                      {/* Chart */}
                      <div className="relative h-[125px] overflow-hidden rounded-2xl bg-emerald-200/10 px-3 pb-3 pt-2">
                        {/* Grid */}
                        <div className="absolute inset-x-3 top-7 h-px bg-white/5" />
                        <div className="absolute inset-x-3 top-1/2 h-px bg-white/5" />
                        <div className="absolute inset-x-3 bottom-7 h-px bg-white/5" />

                        {/* Bars */}
                        <div className="relative flex h-full items-end justify-between gap-2">
                          {chartData.map((item) => (
                            <div
                              key={item.label}
                              className="flex h-full flex-1 flex-col items-center justify-end gap-1"
                            >
                              <div
                                className="w-full max-w-[18px] rounded-t-md bg-orange-400 shadow-[0_-3px_15px_rgba(255,139,44,0.18)]"
                                style={{
                                  height: `${item.value}%`,
                                }}
                              />

                              <span className="text-[6px] text-white/35">
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Chart Metrics */}
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div>
                          <p className="text-[7px] text-white/35">Visitors</p>

                          <p className="text-xs font-bold text-white">8.4K</p>
                        </div>

                        <div>
                          <p className="text-[7px] text-white/35">Leads</p>

                          <p className="text-xs font-bold text-white">127</p>
                        </div>

                        <div>
                          <p className="text-[7px] text-white/35">Growth</p>

                          <p className="text-xs font-bold text-emerald-300">
                            +36%
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CONVERSION FLOW */}
                    <div className="rounded-[22px] border border-white/10 bg-white/5 p-3">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-[9px] font-semibold tracking-[0.18em] text-orange-300">
                          CONVERSION FLOW
                        </p>

                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                      </div>

                      <div className="space-y-4">
                        {conversionData.map((item, index) => (
                          <div key={item.label}>
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-[8px] text-white/45">
                                {item.label}
                              </span>

                              <span className="text-[8px] font-semibold text-white">
                                {item.value}
                              </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                              <div
                                className={
                                  index === 0
                                    ? "h-full rounded-full bg-orange-400"
                                    : index === 1
                                      ? "h-full rounded-full bg-cyan-300"
                                      : "h-full rounded-full bg-emerald-300"
                                }
                                style={{
                                  width: `${item.percentage}%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Revenue */}
                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[7px] uppercase tracking-[0.16em] text-white/35">
                              Monthly Revenue
                            </p>

                            <p className="mt-1 text-lg font-bold text-white">
                              ₹48.2K
                            </p>
                          </div>

                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-400/10">
                            <TrendingUp className="h-4 w-4 text-orange-400" />
                          </div>
                        </div>

                        <div className="mt-2 flex items-center gap-1">
                          <ArrowUpRight className="h-3 w-3 text-emerald-300" />

                          <span className="text-[8px] font-semibold text-emerald-300">
                            28.6% this month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM STATUS */}
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                      <span className="text-[7px] text-white/45">
                        Growth systems running smoothly
                      </span>
                    </div>

                    <span className="text-[7px] font-semibold text-emerald-300">
                      LIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 127 CUSTOMER ENQUIRIES FLOATING CARD */}
            <div className="hero-float-slow absolute left-0 top-10 z-20 w-[245px] rounded-[24px] border border-orange-300/20 bg-[#17304d]/95 px-4 py-3 shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-400/10">
                  <TrendingUp className="h-6 w-6 text-orange-400" />
                </div>

                <div>
                  <p className="text-base font-bold leading-tight text-white">
                    127 new customer enquiries
                  </p>

                  <p className="mt-1 text-xs text-white/60">
                    in the first 3 months
                  </p>
                </div>
              </div>
            </div>

            {/* TESTIMONIAL CARD */}
            <div className="hero-float-medium absolute bottom-7 right-0 z-20 w-[285px] rounded-[25px] border border-orange-300/20 bg-[#5a4727]/95 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="mb-2 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-3.5 w-3.5 fill-orange-300 text-orange-300"
                  />
                ))}
              </div>

              <p className="text-sm font-medium italic leading-relaxed text-white/90">
                “Edvixo transformed our clinic&apos;s online presence. We saw
                bookings double within weeks!”
              </p>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs font-bold text-white">
                  - Dr. Sunita K.
                </p>

                <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[7px] font-semibold text-emerald-300">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroInteractiveShell>
  );
}