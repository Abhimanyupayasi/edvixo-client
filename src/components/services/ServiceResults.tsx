"use client";

import {
  ArrowUpRight,
  Gauge,
  MonitorSmartphone,
  Search,
  MessageSquareText,
} from "lucide-react";

const results = [
  {
    number: "01",
    title: "Faster Experience",
    description:
      "A performance-focused website gives visitors a smoother experience across different devices and network conditions.",
    icon: Gauge,
  },
  {
    number: "02",
    title: "Better Mobile Experience",
    description:
      "Responsive layouts make your content, navigation and important actions easier to use on phones and tablets.",
    icon: MonitorSmartphone,
  },
  {
    number: "03",
    title: "Stronger Search Foundation",
    description:
      "A clean technical structure gives search engines a better foundation for understanding your website.",
    icon: Search,
  },
  {
    number: "04",
    title: "More Opportunities to Enquire",
    description:
      "Clear calls to action, contact forms and communication options make it easier for visitors to take the next step.",
    icon: MessageSquareText,
  },
];

export default function ServiceResults() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              THE OUTCOME
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              A website built to do more than look good.
            </h2>
          </div>

          <p className="max-w-2xl leading-8 text-slate-400">
            Good development should improve the complete digital experience —
            from the moment someone discovers your website to the moment they
            decide to contact your business.
          </p>

        </div>

        {/* Featured statement */}
        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-[#ff8b2c]/20 bg-gradient-to-br from-[#102d45] to-[#061827] p-8 md:p-12">

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff8b2c]/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#ff8b2c]">
                THE GOAL
              </p>

              <h3 className="mt-4 max-w-3xl text-2xl font-black leading-tight md:text-4xl">
                Turn your website into a useful part of your business.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Your website should help people understand your business,
                find the information they need and take action with confidence.
              </p>
            </div>

            <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[#ff8b2c]/30 bg-[#ff8b2c]/10 md:flex">
              <ArrowUpRight className="h-10 w-10 text-[#ff8b2c]" />
            </div>

          </div>
        </div>

        {/* Result cards */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">

          {results.map((result) => {
            const Icon = result.icon;

            return (
              <article
                key={result.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#081d2d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/40 hover:bg-[#0b2235] hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
              >

                {/* Large background number */}
                <span className="absolute right-5 top-1 text-7xl font-black text-white/[0.025] transition duration-500 group-hover:text-[#ff8b2c]/10">
                  {result.number}
                </span>

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff8b2c]/10 transition duration-500 group-hover:bg-[#ff8b2c]">
                      <Icon className="h-5 w-5 text-[#ff8b2c] transition group-hover:text-white" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ff8b2c]" />

                  </div>

                  <h3 className="mt-7 text-xl font-black md:text-2xl">
                    {result.title}
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-slate-400">
                    {result.description}
                  </p>

                  <div className="mt-7 h-px w-8 bg-[#ff8b2c] transition-all duration-700 group-hover:w-full" />

                </div>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}