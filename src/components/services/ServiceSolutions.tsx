"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  ShoppingBag,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";

const solutions = [
  {
    title: "Business Websites",
    description:
      "Professional websites that clearly communicate your services, build trust and generate enquiries.",
    image: "/images/portfolio/education.png",
    icon: Building2,
  },
  {
    title: "Landing Pages",
    description:
      "Focused landing experiences designed around campaigns, products and specific conversion goals.",
    image: "/images/portfolio/dental-clinic.png",
    icon: Smartphone,
  },
  {
    title: "Ecommerce Experiences",
    description:
      "Modern online stores where customers can discover products, explore categories and purchase easily.",
    image: "/images/portfolio/restaurant.png",
    icon: ShoppingBag,
  },
  {
    title: "Web Applications",
    description:
      "Interactive web platforms and dashboards built around real business workflows and user needs.",
    image: "/images/homepage-bg.webp",
    icon: LayoutDashboard,
  },
];

export default function ServiceSolutions() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
            WHAT WE BUILD
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            Digital experiences built around what your business actually needs.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            From a professional business website to a complex web
            application, we create experiences that combine design,
            performance and functionality.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">

          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#081d2d] transition duration-700 hover:-translate-y-2 hover:border-[#ff8b2c]/40 hover:shadow-[0_25px_80px_rgba(0,0,0,0.3)]"
              >

                {/* Image */}
                <div className="relative h-[260px] overflow-hidden md:h-[320px]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081d2d] via-[#081d2d]/20 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-sm font-black backdrop-blur-md">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/30 backdrop-blur-md">
                    <Icon className="h-5 w-5 text-[#ff8b2c]" />
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-6 right-6 flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-[#ff8b2c] text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">

                  <h3 className="text-2xl font-black">
                    {solution.title}
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-slate-400">
                    {solution.description}
                  </p>

                  <div className="mt-6 h-px w-10 bg-[#ff8b2c] transition-all duration-700 group-hover:w-full" />

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Explore solution
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-[#ff8b2c]" />
                  </div>
                </div>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}