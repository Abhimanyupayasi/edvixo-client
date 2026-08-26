"use client";

import {
  ArrowUpRight,
  Building2,
  BriefcaseBusiness,
  Rocket,
  Users,
  TrendingUp,
} from "lucide-react";

type ServiceAudienceProps = {
  items: string[];
};

const icons = [
  Building2,
  Rocket,
  BriefcaseBusiness,
  Users,
  TrendingUp,
];

export default function ServiceAudience({
  items,
}: ServiceAudienceProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              WHO WE HELP
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Built for businesses at different stages of growth.
            </h2>
          </div>

          <p className="max-w-2xl leading-8 text-slate-400">
            Whether you're starting something new, improving an existing
            website or scaling a growing company, our approach adapts to
            your goals and requirements.
          </p>

        </div>

        {/* Audience layout */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">

          {/* Featured card */}
          <article className="group relative overflow-hidden rounded-[2rem] border border-[#ff8b2c]/20 bg-gradient-to-br from-[#102d45] to-[#061827] p-8 lg:col-span-5 md:p-10">

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff8b2c]/10 blur-3xl transition duration-700 group-hover:bg-[#ff8b2c]/20" />

            <div className="relative">

              <div className="flex items-center justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff8b2c]/10">
                  <Building2 className="h-6 w-6 text-[#ff8b2c]" />
                </div>

                <span className="text-6xl font-black text-white/[0.04]">
                  01
                </span>

              </div>

              <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
                A GOOD FIT FOR
              </p>

              <h3 className="mt-4 text-3xl font-black md:text-4xl">
                Businesses ready to grow
              </h3>

              <p className="mt-5 leading-7 text-slate-400">
                We work with businesses that want to improve their digital
                presence, reach more customers and create a stronger online
                experience.
              </p>

              <div className="mt-10 flex items-center gap-3 text-sm font-bold text-white">
                <span>Let's build something useful</span>

                <ArrowUpRight className="h-4 w-4 text-[#ff8b2c] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

            </div>
          </article>

          {/* Smaller audience cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">

            {items.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <article
                  key={item}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#081d2d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/40 hover:bg-[#0b2235] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] transition duration-500 group-hover:bg-[#ff8b2c]/10">
                      <Icon className="h-5 w-5 text-slate-400 transition group-hover:text-[#ff8b2c]" />
                    </div>

                    <span className="text-sm font-black text-slate-700 transition group-hover:text-[#ff8b2c]/40">
                      {String(index + 2).padStart(2, "0")}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {item}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Digital solutions shaped around the needs of your
                    business and customers.
                  </p>

                  <div className="mt-7 h-px w-8 bg-[#ff8b2c] transition-all duration-700 group-hover:w-full" />

                </article>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}