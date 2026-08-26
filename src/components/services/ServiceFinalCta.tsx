"use client";

import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

type ServiceFinalCtaProps = {
  title: string;
  description: string;
  primary: string;
  whatsapp: string;
  whatsappUrl: string;
};

export default function ServiceFinalCta({
  title,
  description,
  primary,
  whatsapp,
  whatsappUrl,
}: ServiceFinalCtaProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[#ff8b2c]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.25),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(0,0,0,0.18),transparent_32%)]" />

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">

        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
          <Sparkles className="h-7 w-7 text-white" />
        </div>

        <p className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-white/70">
          LET'S BUILD SOMETHING BETTER
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black text-[#071827] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {primary}

            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-black text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            <MessageCircle className="h-4 w-4" />

            {whatsapp}
          </a>

        </div>

        {/* Trust points */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-3">

          {[
            "Clear project scope",
            "Transparent communication",
            "Custom development",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-xs font-semibold text-white/75"
            >
              <CheckCircle2 className="h-4 w-4 text-white" />
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
