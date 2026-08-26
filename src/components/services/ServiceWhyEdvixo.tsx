"use client";

import {
  ArrowUpRight,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Business First",
    description:
      "We don't build features just because they look impressive. Every decision starts with your business goals and customer needs.",
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "Performance Focused",
    description:
      "Fast-loading pages, optimized assets and modern development practices help create a smoother experience for your visitors.",
    icon: Gauge,
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "You stay involved throughout the project with clear discussions about requirements, progress and important decisions.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Built to Scale",
    description:
      "Your website is structured so new pages, integrations and functionality can be introduced as your business grows.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Reliable Development",
    description:
      "We focus on maintainable code, testing and practical development standards instead of shortcuts that create problems later.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description:
      "The relationship doesn't have to end when your website launches. We can continue helping you improve your digital presence.",
    icon: Users,
  },
];

export default function ServiceWhyEdvixo() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#081d2d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              WHY EDVIXO
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              More than just a website.
            </h2>
          </div>

          <p className="max-w-2xl leading-8 text-slate-400">
            We combine business thinking, design and technology to create
            digital experiences that are useful today and ready for tomorrow.
          </p>

        </div>

        {/* FEATURED STATEMENT */}
        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-[#ff8b2c]/20 bg-gradient-to-br from-[#102d45] to-[#061827] p-8 md:p-12">

          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#ff8b2c]/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#ff8b2c]">
                OUR APPROACH
              </span>

              <h3 className="mt-5 max-w-3xl text-2xl font-black leading-tight md:text-4xl">
                We build digital experiences that look good, work well and
                make sense for your business.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                From the first conversation to launch and beyond, our focus is
                on creating something practical, scalable and easy for your
                customers to use.
              </p>
            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[#ff8b2c]/30 bg-[#ff8b2c]/10">
              <Sparkles className="h-9 w-9 text-[#ff8b2c]" />
            </div>

          </div>
        </div>

        {/* REASONS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b2235] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)]"
              >

                {/* Number */}
                <div className="absolute right-6 top-4 text-5xl font-black text-white/[0.025] transition duration-500 group-hover:text-[#ff8b2c]/10">
                  {reason.number}
                </div>

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff8b2c]/10 transition duration-500 group-hover:bg-[#ff8b2c]">
                      <Icon className="h-5 w-5 text-[#ff8b2c] transition group-hover:text-white" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-700 transition duration-500 group-hover:text-[#ff8b2c]" />

                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {reason.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {reason.description}
                  </p>

                  <div className="mt-7 h-px w-8 bg-[#ff8b2c] transition-all duration-700 group-hover:w-full" />

                </div>
              </article>
            );
          })}

        </div>

        {/* BOTTOM STATS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-7">
            <p className="text-3xl font-black text-[#ff8b2c]">100%</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              Responsive
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-7">
            <p className="text-3xl font-black text-[#ff8b2c]">24/7</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              Digital Presence
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-7">
            <p className="text-3xl font-black text-[#ff8b2c]">∞</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              Growth Potential
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}