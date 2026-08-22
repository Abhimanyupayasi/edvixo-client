"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  { question: "I don't know anything about websites. Can you still help me?", answer: "Yes. The process begins by understanding your business, goals, and what you want customers to do. You do not need a technical specification to start the conversation." },
  { question: "What type of website can Edvixo build?", answer: "Edvixo works on business websites, online stores, booking systems, website redesigns, local search visibility, and tailored digital tools for business needs." },
  { question: "How much does a website cost?", answer: "Pricing depends on the type of website, features, and requirements. Share your project details to discuss a suitable estimate." },
  { question: "How long does a website take?", answer: "The timeline depends on the scope, content, features, and feedback involved. A clear project timeline is discussed before work begins." },
  { question: "Can I request changes to my website?", answer: "Yes. You can review the work and share feedback during the project so the website reflects your business and goals." },
  { question: "Can you redesign my existing website?", answer: "Yes. Existing websites can be redesigned to improve their appearance, speed, mobile experience, and ease of use." },
  { question: "Can you help my business appear on Google?", answer: "Edvixo offers local search and Google presence work, including website and business-profile improvements. The right approach depends on your business, location, and current website." },
  { question: "Do you provide support after the website is launched?", answer: "Yes. Post-launch support is part of the process, so you can get help after your website goes live." },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); const baseId = useId();
  return <section className="bg-background py-24"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><div className="mb-12 text-center"><p className="label-medium mb-2 uppercase tracking-widest text-primary">Frequently Asked Questions</p><h2 className="text-headline-large font-bold leading-tight text-on-background">Questions You May Have</h2><p className="mt-4 text-base leading-relaxed text-on-surface-variant">Everything you need to know before starting your website project.</p></div><div className="space-y-3">{questions.map((item, index) => { const isOpen = openIndex === index; const panelId = `${baseId}-panel-${index}`; const buttonId = `${baseId}-button-${index}`; return <div key={item.question} className="overflow-hidden rounded-2xl border border-outline-variant bg-surface"><h3><button id={buttonId} type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={panelId} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-base font-semibold text-on-background transition-colors hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary md:px-6"><span>{item.question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" /></button></h3><div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="border-t border-outline-variant px-5 py-4 text-sm leading-7 text-on-surface-variant md:px-6">{item.answer}</div></div>; })}</div></div></section>;
}
