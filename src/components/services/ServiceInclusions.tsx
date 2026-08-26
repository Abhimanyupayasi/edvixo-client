"use client";

import {
  CheckCircle2,
  ArrowUpRight,
  Palette,
  Smartphone,
  Search,
  MessageSquare,
  BarChart3,
  Settings2,
} from "lucide-react";

type Inclusion = {
  label: string;
  note: string;
};

type ServiceInclusionsProps = {
  items: Inclusion[];
};

const icons = [
  Palette,
  Smartphone,
  Search,
  MessageSquare,
  BarChart3,
  Settings2,
];

export default function ServiceInclusions({
  items,
}: ServiceInclusionsProps) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#081d2d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              WHAT'S INCLUDED
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Everything you need to launch with confidence.
            </h2>
          </div>

          <p className="max-w-2xl leading-8 text-slate-400">
            Your project isn't just a collection of pages. We bring together
            design, responsiveness, performance and the essential functionality
            needed for a professional digital experience.
          </p>

        </div>

        {/* FEATURED PANEL */}
        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-[#ff8b2c]/20 bg-gradient-to-br from-[#102d45] to-[#061827] p-7 md:p-10">

          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#ff8b2c]/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">

            {/* LEFT */}
            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff8b2c]/10">
                <CheckCircle2 className="h-6 w-6 text-[#ff8b2c]" />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
                PROJECT PACKAGE
              </p>

              <h3 className="mt-4 text-2xl font-black md:text-3xl">
                Built around your requirements.
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Every project is planned around what your business actually
                needs instead of forcing you into a fixed template.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-300">
                <span className="h-2 w-2 rounded-full bg-[#ff8b2c]" />
                Custom project scope
              </div>

            </div>

            {/* RIGHT */}
            <div className="grid gap-3 sm:grid-cols-2">

              {items.map((item, index) => {
                const Icon = icons[index % icons.length];

                return (
                  <article
                    key={item.label}
                    className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-500 hover:-translate-y-1 hover:border-[#ff8b2c]/40 hover:bg-[#ff8b2c]/[0.05]"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff8b2c]/10">
                        <Icon className="h-4 w-4 text-[#ff8b2c]" />
                      </div>

                      <span className="text-xs font-black text-slate-600 transition group-hover:text-[#ff8b2c]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    <h4 className="mt-5 font-bold">
                      {item.label}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.note}
                    </p>

                    <div className="mt-5 flex items-center justify-between">

                      <CheckCircle2 className="h-4 w-4 text-[#ff8b2c]" />

                      <ArrowUpRight className="h-4 w-4 text-slate-700 transition group-hover:text-[#ff8b2c]" />

                    </div>

                  </article>
                );
              })}

            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-slate-400">
            Need something specific? Your project scope can be customized
            around your business requirements.
          </p>

          <span className="shrink-0 text-sm font-bold text-[#ff8b2c]">
            Custom scope available
          </span>

        </div>

      </div>
    </section>
  );
}