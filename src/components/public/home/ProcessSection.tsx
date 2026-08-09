import { Phone, FileText, RefreshCw, PenLine, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: {
  num: string;
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
}[] = [
  {
    num: "01",
    icon: Phone,
    title: "Free Call",
    description:
      "We talk for 30 minutes about your business, your goals, and what you need.",
    time: "Day 1",
  },
  {
    num: "02",
    icon: FileText,
    title: "Clear Proposal",
    description:
      "You receive a written scope, timeline, and custom quote. No hidden costs, ever.",
    time: "Day 2–3",
  },
  {
    num: "03",
    icon: RefreshCw,
    title: "Regular Updates",
    description:
      "I send weekly progress reports. You can see the work-in-progress site at any time.",
    time: "Week 1–4",
  },
  {
    num: "04",
    icon: PenLine,
    title: "Your Feedback",
    description:
      "You review everything and request changes. We go until you love it.",
    time: "Week 4–5",
  },
  {
    num: "05",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Your site goes live. I provide 30 days of free support after launch.",
    time: "Week 5–6",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-background py-24">
      {/* Keyframe definitions - server-safe inline style */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .step-card {
          opacity: 0;
          animation: fadeInUp 0.5s ease forwards;
        }
        @keyframes growLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .connector-line {
          transform-origin: left;
          animation: growLine 0.4s ease forwards;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="label-medium text-primary uppercase tracking-widest mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-display-medium text-on-background font-bold mb-4 leading-tight">
            Simple. Transparent. No Surprises.
          </h2>
          <p className="body-large text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            I handle the work so you can focus on running your business -
            no technical jargon, no hidden surprises.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-4 md:mx-auto md:max-w-2xl lg:max-w-none lg:grid-cols-5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="step-card relative flex flex-col rounded-shape-md bg-surface p-6 shadow-sm"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Connector line between cards on mobile/tablet */}
              {i < steps.length - 1 && (
                <div
                  className="connector-line absolute left-5 top-full h-4 w-0.5 bg-primary lg:hidden"
                  style={{ animationDelay: `${i * 0.12 + 0.3}s` }}
                />
              )}

              {/* Connector line between cards on large screens */}
              {i < steps.length - 1 && (
                <div
                  className="connector-line absolute -right-2 top-10 hidden h-0.5 w-4 bg-primary lg:block"
                  style={{ animationDelay: `${i * 0.12 + 0.3}s` }}
                />
              )}

              {/* Step number chip - muted, not green */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container">
                <span className="label-large text-on-surface-variant font-semibold leading-none">
                  {step.num}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-title-large text-on-background font-bold mb-2 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="body-medium text-on-surface-variant mb-6 leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Time chip - muted pill at bottom */}
              <span className="inline-flex self-start items-center rounded-shape-full bg-surface-container px-3 py-1 label-medium text-on-surface-variant mt-auto">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
