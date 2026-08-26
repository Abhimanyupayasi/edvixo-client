"use client";

import {
  ArrowUpRight,
  Globe2,
  Smartphone,
  Search,
  AlertCircle,
} from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Outdated Website",
    description:
      "An outdated website can make a professional business look less credible and make it harder for customers to understand what you offer.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Poor Mobile Experience",
    description:
      "If your website is difficult to use on a phone, customers may leave before they ever contact your business.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Low Online Visibility",
    description:
      "A weak technical structure can make it harder for search engines to understand and discover your website.",
    icon: Search,
  },
];

export default function ServiceProblems() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#081d2d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* LEFT */}
          <div className="lg:sticky lg:top-28">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10">
              <AlertCircle className="h-6 w-6 text-red-400" />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              THE PROBLEM
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Your website shouldn't be the reason customers leave.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              Your website is often the first interaction someone has with
              your business. If that experience feels slow, outdated or
              confusing, you can lose trust before the conversation even
              begins.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-sm font-semibold text-white">
                A better website should:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Build credibility",
                  "Make information easy to find",
                  "Work beautifully on mobile",
                  "Turn visitors into enquiries",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff8b2c]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">

            {problems.map((problem, index) => {
              const Icon = problem.icon;

              return (
                <article
                  key={problem.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b2235] p-7 transition duration-700 hover:-translate-y-2 hover:border-[#ff8b2c]/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)] md:p-9"
                >

                  {/* Background glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#ff8b2c]/5 blur-3xl transition duration-700 group-hover:bg-[#ff8b2c]/15" />

                  <div className="relative flex gap-6">

                    {/* Number */}
                    <div className="hidden shrink-0 text-4xl font-black text-[#ff8b2c]/20 transition duration-500 group-hover:text-[#ff8b2c]/60 sm:block">
                      {problem.number}
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex items-start justify-between gap-4">

                        <div className="flex items-center gap-4">

                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff8b2c]/10 transition duration-500 group-hover:bg-[#ff8b2c]">
                            <Icon className="h-5 w-5 text-[#ff8b2c] transition group-hover:text-white" />
                          </div>

                          <h3 className="text-xl font-black md:text-2xl">
                            {problem.title}
                          </h3>

                        </div>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition duration-500 group-hover:border-[#ff8b2c]/50 group-hover:bg-[#ff8b2c]">
                          <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-white" />
                        </div>

                      </div>

                      <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                        {problem.description}
                      </p>

                      {/* Animated line */}
                      <div className="mt-7 h-px w-full overflow-hidden bg-white/10">
                        <div className="h-full w-0 bg-[#ff8b2c] transition-all duration-700 group-hover:w-full" />
                      </div>

                    </div>
                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}