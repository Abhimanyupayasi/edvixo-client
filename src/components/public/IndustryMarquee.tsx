import {
  Wallet,
  UtensilsCrossed,
  Stethoscope,
  GraduationCap,
  Building2,
  ShoppingBag,
  Factory,
  Scale,
  Laptop,
  Truck,
  Star,
  Globe2,
  Sparkles,
} from "lucide-react";
import type { ElementType } from "react";

const INDUSTRIES = [
  { label: "Finance", Icon: Wallet },
  { label: "Restaurants", Icon: UtensilsCrossed },
  { label: "Clinics", Icon: Stethoscope },
  { label: "Coaching", Icon: GraduationCap },
  { label: "Real Estate", Icon: Building2 },
  { label: "Retail Stores", Icon: ShoppingBag },
  { label: "Manufacturers", Icon: Factory },
  { label: "Legal Firms", Icon: Scale },
  { label: "IT & Tech", Icon: Laptop },
  { label: "Logistics", Icon: Truck },
];

const proofHighlights = [
  { label: "Businesses Worldwide", value: "15+", Icon: Globe2 },
  { label: "Industries Served", value: `${INDUSTRIES.length}+`, Icon: Sparkles },
  { label: "Client Satisfaction", value: "5-Star", Icon: Star },
];

function PillItem({
  label,
  Icon,
}: {
  label: string;
  Icon: ElementType;
}) {
  return (
    <div
      className="
        flex items-center gap-2 h-11 px-5 rounded-full
        border border-outline-variant/40
        bg-surface-container-low
        text-on-surface-variant
        cursor-default select-none shrink-0
        transition-all duration-150 ease-out
        hover:bg-surface hover:border-outline-variant
        hover:text-on-background hover:scale-[1.02]
      "
    >
      <Icon className="w-4 h-4 text-secondary shrink-0" />
      <span className="text-sm font-semibold whitespace-nowrap">{label}</span>
    </div>
  );
}

export function IndustryMarquee() {
  return (
    <section className="bg-surface-container-lowest py-6 lg:py-8">
      <style>{`
        @keyframes industry-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .industry-marquee-track {
          animation: industry-marquee 30s linear infinite;
        }
        .industry-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .industry-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-4xl border border-outline-variant/60 bg-surface/60 shadow-[0_16px_44px_rgba(24,29,25,0.06)] backdrop-blur-sm dark:border-primary/15 dark:bg-surface-container/72 dark:shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
          <div className="border-b border-outline-variant/45 px-5 py-5 md:px-7 md:py-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.26em] text-primary">
                  Trusted By Businesses Worldwide
                </p>
                <h2 className="text-2xl font-semibold leading-tight text-on-background md:text-3xl">
                  Proven across service businesses, local brands, and modern teams.
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant md:text-base">
                  From restaurants and clinics to finance, retail, and logistics, the same focus applies:
                  fast websites, clearer user journeys, and measurable business outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:min-w-md lg:max-w-136 lg:flex-1">
                {proofHighlights.map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-outline-variant/45 bg-surface/80 px-4 py-3 shadow-[0_10px_24px_rgba(24,29,25,0.04)] dark:border-primary/15 dark:bg-surface-container-high/74 dark:shadow-[0_12px_30px_rgba(0,0,0,0.24)]"
                  >
                    <div className="flex items-center gap-2 text-primary">
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                        {label}
                      </span>
                    </div>
                    <p className="mt-2 text-2xl font-bold leading-none text-on-background md:text-3xl">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-5 py-5 md:px-7 md:py-6">
            <div className="mb-4 flex items-center gap-2 text-sm text-on-surface-variant">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <p>
                Active across <span className="font-semibold text-primary">{INDUSTRIES.length}+ sectors</span> and expanding.
              </p>
            </div>

            <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="pointer-events-none absolute left-0 top-0
                       h-full w-16 lg:w-24 z-10
                       bg-linear-to-r from-surface to-transparent dark:from-surface-container"
          />

          <div
            className="pointer-events-none absolute right-0 top-0
                       h-full w-16 lg:w-24 z-10
                       bg-linear-to-l from-surface to-transparent dark:from-surface-container"
          />

          <div
            className="industry-marquee-track flex w-max gap-3"
          >
            {[...INDUSTRIES, ...INDUSTRIES].map((item, index) => (
              <PillItem key={index} label={item.label} Icon={item.Icon} />
            ))}
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
