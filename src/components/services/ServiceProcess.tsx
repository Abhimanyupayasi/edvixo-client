"use client";

import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Palette,
  Code2,
  FlaskConical,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, audience, goals and the exact problem your website needs to solve.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create the visual direction, page structure and user experience around your brand.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Development",
    description:
      "The approved design becomes a fast, responsive and functional website using modern technologies.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing",
    description:
      "We test responsiveness, forms, navigation, performance and important user interactions.",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Your website is deployed, connected to the required services and prepared for real users.",
    icon: Rocket,
  },
];

export default function ServiceProcess() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
            HOW WE WORK
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            From the first idea to the final launch.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            A clear process keeps your project organized, transparent and
            focused on creating something that actually works for your
            business.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="relative mt-20 hidden md:block">

          {/* Main line */}
          <div className="absolute left-0 right-0 top-[34px] h-px bg-white/10" />

          <div className="absolute left-0 top-[34px] h-px w-full origin-left bg-gradient-to-r from-[#ff8b2c] via-[#ff8b2c]/60 to-transparent" />

          <div className="grid grid-cols-5 gap-5">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative"
                >

                  {/* Timeline point */}
                  <div className="relative z-10 flex h-[68px] items-center">

                    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-white/10 bg-[#061827] transition duration-500 group-hover:border-[#ff8b2c]/70 group-hover:shadow-[0_0_35px_rgba(255,139,44,0.2)]">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff8b2c]/10 transition duration-500 group-hover:bg-[#ff8b2c]">
                        <Icon className="h-5 w-5 text-[#ff8b2c] transition group-hover:text-white" />
                      </div>

                    </div>

                  </div>

                  {/* Card */}
                  <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-500 group-hover:-translate-y-2 group-hover:border-[#ff8b2c]/40 group-hover:bg-[#ff8b2c]/[0.04]">

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black tracking-widest text-[#ff8b2c]">
                        {step.number}
                      </span>

                      {index < steps.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-slate-700 transition group-hover:text-[#ff8b2c]" />
                      )}
                    </div>

                    <h3 className="mt-5 text-lg font-black">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>

                  </div>

                </article>
              );
            })}

          </div>
        </div>

        {/* Mobile timeline */}
        <div className="relative mt-14 md:hidden">

          {/* Vertical line */}
          <div className="absolute bottom-8 left-[24px] top-8 w-px bg-white/10" />

          <div className="space-y-6">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative flex gap-5"
                >

                  {/* Point */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#061827]">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff8b2c]/10">
                      <Icon className="h-4 w-4 text-[#ff8b2c]" />
                    </div>

                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                    <span className="text-xs font-black tracking-widest text-[#ff8b2c]">
                      {step.number}
                    </span>

                    <h3 className="mt-2 text-lg font-black">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>

                  </div>

                </article>
              );
            })}

          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-14 flex flex-col gap-5 rounded-[1.5rem] border border-white/10 bg-[#081d2d] p-6 md:flex-row md:items-center md:justify-between md:p-8">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff8b2c]/10">
              <CheckCircle2 className="h-5 w-5 text-[#ff8b2c]" />
            </div>

            <div>
              <h3 className="font-bold">
                Clear communication throughout the project
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                You stay informed as the project moves from one stage to the
                next.
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-[#ff8b2c]">
            <span>Idea</span>
            <ArrowRight className="h-4 w-4" />
            <span>Launch</span>
          </div>

        </div>

      </div>
    </section>
  );
}