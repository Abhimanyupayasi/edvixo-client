"use client";

import {
  Code2,
  Database,
  Globe,
  Layers3,
  LockKeyhole,
  Smartphone,
  Zap,
  Search,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    title: "Modern Frontend",
    description:
      "Fast, responsive interfaces built around your brand, users and business goals.",
    icon: Code2,
  },
  {
    title: "Responsive Experiences",
    description:
      "Layouts that adapt naturally across mobile, tablet and desktop screens.",
    icon: Smartphone,
  },
  {
    title: "Performance",
    description:
      "Optimized images, code and rendering techniques for a faster experience.",
    icon: Zap,
  },
  {
    title: "SEO Foundation",
    description:
      "Clean page structure, metadata and technical foundations prepared for search.",
    icon: Search,
  },
  {
    title: "Backend Integration",
    description:
      "Connect your website with APIs, databases, forms and business systems.",
    icon: Database,
  },
  {
    title: "Scalable Architecture",
    description:
      "A structure that allows your website to grow with new pages and features.",
    icon: Layers3,
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
  "MySQL",
  "Git",
];

export default function ServiceCapabilities() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#081d2d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
              CAPABILITIES
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              The technology behind a better web experience.
            </h2>
          </div>

          <p className="max-w-2xl leading-8 text-slate-400">
            We combine design, development and modern web technologies to
            create websites that are not only visually strong, but also
            reliable, maintainable and ready to grow.
          </p>

        </div>

        {/* CAPABILITY CARDS */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b2235] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)]"
              >

                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-white/[0.025] transition duration-500 group-hover:text-[#ff8b2c]/10">
                  0{index + 1}
                </span>

                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff8b2c]/10 transition duration-500 group-hover:bg-[#ff8b2c]">
                    <Icon className="h-5 w-5 text-[#ff8b2c] transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                      Capability
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-slate-600 transition duration-300 group-hover:text-[#ff8b2c]" />
                  </div>

                </div>
              </article>
            );
          })}

        </div>

        {/* TECHNOLOGY STACK */}
        <div className="mt-16 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#061827]">

          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">

            {/* LEFT */}
            <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff8b2c]/10">
                <Globe className="h-5 w-5 text-[#ff8b2c]" />
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Technology Stack
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                We choose technologies according to the project's goals,
                functionality, performance requirements and long-term needs.
              </p>

              <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-slate-300">
                <LockKeyhole className="h-4 w-4 text-[#ff8b2c]" />
                Built with modern development practices
              </div>

            </div>

            {/* RIGHT */}
            <div className="p-7 md:p-10">

              <div className="flex flex-wrap gap-3">

                {technologies.map((technology, index) => (
                  <div
                    key={technology}
                    className="group/tech rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#ff8b2c]/40 hover:bg-[#ff8b2c]/[0.06]"
                  >
                    <div className="flex items-center gap-3">

                      <span className="text-xs font-black text-[#ff8b2c]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-bold text-slate-300 transition group-hover/tech:text-white">
                        {technology}
                      </span>

                    </div>
                  </div>
                ))}

              </div>

              {/* Bottom line */}
              <div className="mt-10 h-px overflow-hidden bg-white/10">
                <div className="h-full w-1/3 bg-[#ff8b2c] transition-all duration-700 hover:w-full" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}