import { MessageSquareText, MonitorSmartphone, MousePointerClick, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Benefit = { icon: LucideIcon; title: string; description: string };

const benefits: Benefit[] = [
  { icon: Sparkles, title: "Built Around Your Business", description: "Your website is shaped around your goals, your customers, and the way your business works." },
  { icon: MonitorSmartphone, title: "Ready for Every Screen", description: "Visitors can explore your business comfortably on phones, tablets, and desktop computers." },
  { icon: MousePointerClick, title: "Easy for Visitors to Use", description: "Clear information and straightforward next steps help customers find what they need and get in touch." },
  { icon: MessageSquareText, title: "Clear Communication", description: "You can discuss your goals, review progress, and share feedback throughout the project." },
  { icon: Wrench, title: "Support After Launch", description: "Help is available after your website goes live, so you have support as your business moves forward." },
];

export function WhyEdvixoSection() {
  return <section className="bg-background py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-2xl"><p className="label-medium mb-2 uppercase tracking-widest text-primary">Why Edvixo?</p><h2 className="text-headline-large font-bold leading-tight text-on-background">Built to Help Your Business Grow</h2><p className="mt-4 text-base leading-relaxed text-on-surface-variant">Edvixo creates practical, professional digital experiences shaped around your business needs and your customers&apos; experience.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{benefits.map((benefit) => { const Icon = benefit.icon; return <article key={benefit.title} className="rounded-shape-md border border-outline-variant bg-surface p-6 transition-colors duration-200 hover:border-primary/50 hover:bg-surface-container-low"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container text-on-primary-container"><Icon className="h-6 w-6" aria-hidden="true" /></div><h3 className="mt-5 text-xl font-bold text-on-background">{benefit.title}</h3><p className="mt-2 text-sm leading-7 text-on-surface-variant">{benefit.description}</p></article>; })}</div></div></section>;
}
