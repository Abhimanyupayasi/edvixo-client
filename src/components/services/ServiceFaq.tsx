"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
};

type ServiceFaqProps = {
  items: Faq[];
};

export default function ServiceFaq({ items }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#081d2d] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8b2c]">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            Questions before we get started?
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Here are answers to some of the questions businesses commonly ask
            before starting a web development project.
          </p>

        </div>

        {/* FAQ */}
        <div className="mt-14 space-y-3">

          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition duration-500 ${
                  isOpen
                    ? "border-[#ff8b2c]/40 bg-[#0b2235]"
                    : "border-white/10 bg-white/[0.025] hover:border-white/20"
                }`}
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-7"
                  aria-expanded={isOpen}
                >

                  <div className="flex items-center gap-5">

                    <span
                      className={`text-xs font-black transition ${
                        isOpen
                          ? "text-[#ff8b2c]"
                          : "text-slate-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-bold md:text-lg">
                      {faq.question}
                    </span>

                  </div>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-500 ${
                      isOpen
                        ? "rotate-180 border-[#ff8b2c]/40 bg-[#ff8b2c] text-white"
                        : "border-white/10 text-slate-500"
                    }`}
                  >
                    <ArrowDown className="h-4 w-4" />
                  </div>

                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="border-t border-white/10 px-6 pb-7 pt-5 md:px-7 md:pl-[4.25rem]">

                      <p className="max-w-3xl leading-7 text-slate-400">
                        {faq.answer}
                      </p>

                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center sm:flex-row sm:text-left">

          <div>
            <p className="font-bold">
              Still have a question?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Tell us what you're trying to build and we'll discuss it with
              you.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#ff8b2c] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,139,44,0.25)]"
          >
            Talk to Edvixo

            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>

      </div>
    </section>
  );
}