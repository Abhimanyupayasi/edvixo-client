import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Monitor, Star, TrendingUp } from "lucide-react";
import { HeroInteractiveShell } from "@/components/public/home/HeroInteractiveShell";

const trustStats: { value: string; label: string }[] = [
  { value: "15+", label: "BUSINESSES SERVED" },
  { value: "Global", label: "DELIVERY" },
  { value: "5-Star", label: "RATED SERVICE" },
];

const trustSignals = ["Free 30-min call", "No tech jargon", "Custom Quote in 24 Hours"];

export function HeroSection() {
  return (
    <HeroInteractiveShell className="pt-16 pb-10 lg:pt-20 lg:pb-14 bg-surface-container-lowest">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="text-center lg:text-left">
            <div className="hero-reveal hero-reveal-delay-1 mb-6 mx-auto inline-flex items-center gap-2 rounded-full border border-outline-variant/80 bg-surface/70 px-4 py-2 shadow-[0_10px_30px_rgba(24,29,25,0.08)] backdrop-blur-sm lg:mx-0 dark:border-primary/20 dark:bg-surface-container-high/70 dark:shadow-[0_18px_44px_rgba(0,0,0,0.32)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm text-on-surface-variant sm:label-medium">
                Trusted digital partner for growing businesses
              </span>
            </div>

            <h1 className="hero-reveal hero-reveal-delay-2 mb-6 text-4xl font-black leading-[0.95] text-on-background md:text-5xl lg:text-[3.8rem]">
              Empowering Businesses with
              <span className="mt-3 block text-on-background">
                Tech Talent & <span className="text-primary">Digital Solutions</span>
              </span>
            </h1>

            <p className="hero-reveal hero-reveal-delay-3 mb-8 mx-auto max-w-xl text-base leading-relaxed text-on-surface-variant lg:mx-0">
              Edvixo helps companies launch faster, design better experiences, and scale
              with dependable digital products, web solutions, and technical support.
            </p>

            <div className="hero-reveal hero-reveal-delay-4 mb-6 flex flex-col items-center gap-3 md:flex-row md:justify-center lg:justify-start">
              <Button
                asChild
                className="hero-cta-primary group relative h-12 w-full overflow-hidden rounded-2xl border border-primary/10 bg-primary px-8 text-base font-semibold text-on-primary shadow-[0_18px_40px_rgba(255,139,44,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary md:w-auto"
              >
                <Link href="/contact">
                  <span className="relative z-10">Book a Free Call</span>
                </Link>
              </Button>
              <Button
                asChild
                className="hero-cta-secondary group relative h-12 w-full overflow-hidden rounded-2xl border border-outline-variant/80 bg-surface/72 px-8 text-base font-semibold text-on-background shadow-[0_12px_30px_rgba(24,29,25,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface md:w-auto dark:border-primary/20 dark:bg-surface-container-high/70 dark:shadow-[0_16px_34px_rgba(0,0,0,0.28)] dark:hover:bg-surface-container-highest"
              >
                <Link href="/work">
                  <span className="relative z-10">View Case Studies</span>
                </Link>
              </Button>
            </div>

            <div className="hero-reveal hero-reveal-delay-5 mb-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/70 bg-surface/60 px-3 py-2 text-sm text-on-surface-variant shadow-[0_8px_20px_rgba(24,29,25,0.05)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 dark:border-primary/15 dark:bg-surface-container/70 dark:shadow-[0_12px_28px_rgba(0,0,0,0.24)]"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <span>{signal}</span>
                </span>
              ))}
            </div>

            <div className="hero-reveal hero-reveal-delay-6 grid grid-cols-3 gap-4 text-center lg:text-left">
              {trustStats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-3xl border border-outline-variant/50 bg-surface/56 px-3 py-4 shadow-[0_16px_35px_rgba(24,29,25,0.06)] backdrop-blur-sm dark:border-primary/15 dark:bg-surface-container/76 dark:shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                >
                  <p className="text-2xl font-bold leading-tight text-primary sm:text-5xl lg:text-headline-large">
                    {value}
                  </p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant sm:label-medium">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-reveal hero-reveal-delay-4 relative flex h-72 w-full items-center justify-center md:h-88 lg:h-136">
            <div className="pointer-events-none absolute inset-x-12 top-10 h-48 rounded-full bg-primary/10 blur-3xl" />

            <div
              className="relative z-10 w-full max-w-lg transition-transform duration-500 ease-out motion-reduce:transform-none"
              style={{
                transform:
                  "translate3d(var(--hero-card-x), calc(var(--hero-card-y) + var(--hero-scroll-y)), 0)",
              }}
            >
              <div className="hero-preview-card overflow-hidden rounded-4xl border border-white/60 bg-[linear-gradient(180deg,rgba(44,50,45,0.98),rgba(31,38,33,0.98))] shadow-[0_30px_80px_rgba(15,20,16,0.28)] ring-1 ring-black/6 dark:border-primary/20 dark:shadow-[0_34px_90px_rgba(0,0,0,0.48)]">
                <div className="flex h-10 items-center gap-2 border-b border-inverse-on-surface/10 bg-black/20 px-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-tertiary/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  </div>
                  <div className="ml-2 h-4 flex-1 rounded-full bg-inverse-on-surface/10" />
                </div>

                <div className="relative overflow-hidden p-4 md:p-5">
                  <div className="absolute inset-0 bg-primary/10" />

                  <div className="relative z-10 space-y-3">
                    <div className="space-y-2">
                      <div className="h-3.5 w-2/3 rounded-full bg-inverse-on-surface/30" />
                      <div className="h-2.5 w-1/3 rounded-full bg-inverse-on-surface/15" />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <span className="h-8 rounded-2xl border border-inverse-primary/30 bg-inverse-primary/18" />
                      <span className="h-8 rounded-2xl border border-inverse-on-surface/12 bg-inverse-on-surface/8" />
                      <span className="h-8 rounded-2xl border border-inverse-on-surface/12 bg-inverse-on-surface/8" />
                    </div>

                    <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
                      <div className="space-y-3 rounded-[1.4rem] border border-inverse-on-surface/10 bg-white/4 p-3">
                        <div className="h-24 rounded-[1.1rem] bg-[linear-gradient(180deg,rgba(141,213,164,0.2),rgba(141,213,164,0.04))] p-3">
                          <div className="flex h-full items-end gap-2">
                            <span className="w-3 rounded-t-md bg-inverse-primary/40" style={{ height: "28%" }} />
                            <span className="w-3 rounded-t-md bg-inverse-primary/55" style={{ height: "52%" }} />
                            <span className="w-3 rounded-t-md bg-inverse-primary/45" style={{ height: "36%" }} />
                            <span className="w-3 rounded-t-md bg-inverse-primary/70" style={{ height: "72%" }} />
                            <span className="w-3 rounded-t-md bg-inverse-primary/52" style={{ height: "44%" }} />
                            <span className="w-3 rounded-t-md bg-inverse-primary/75" style={{ height: "84%" }} />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-2.5 w-4/5 rounded-full bg-inverse-on-surface/18" />
                          <div className="h-2.5 w-full rounded-full bg-inverse-on-surface/12" />
                          <div className="h-2.5 w-3/5 rounded-full bg-inverse-on-surface/12" />
                        </div>
                      </div>

                      <div className="space-y-3 rounded-[1.4rem] border border-inverse-on-surface/10 bg-white/4 p-3">
                        <div className="rounded-2xl border border-inverse-on-surface/10 bg-black/10 p-3">
                          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-inverse-primary/75">
                            Conversion Flow
                          </p>
                          <div className="mt-3 space-y-2">
                            <div className="h-2.5 w-5/6 rounded-full bg-inverse-on-surface/18" />
                            <div className="h-9 rounded-2xl bg-inverse-primary/18" />
                            <div className="h-2.5 w-3/5 rounded-full bg-inverse-on-surface/12" />
                          </div>
                        </div>

                        <div className="rounded-2xl border border-inverse-on-surface/10 bg-inverse-on-surface/6 p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[0.58rem] uppercase tracking-[0.22em] text-inverse-on-surface/55">
                                Live Dashboard
                              </p>
                              <p className="mt-1 text-sm font-semibold text-inverse-on-surface">
                                Book Your Table
                              </p>
                            </div>
                            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-inverse-primary/20">
                              <Monitor className="h-4 w-4 text-inverse-primary" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hero-float-slow absolute left-0 top-8 z-20 hidden w-64 items-center gap-3 rounded-[1.6rem] border border-outline-variant/70 bg-surface/84 px-4 py-3 shadow-[0_18px_40px_rgba(24,29,25,0.1)] backdrop-blur-md lg:flex motion-reduce:animate-none dark:border-primary/20 dark:bg-surface-container-high/86 dark:shadow-[0_20px_52px_rgba(0,0,0,0.36)]"
              style={{
                transform:
                  "translate3d(var(--hero-chip-a-x), calc(var(--hero-chip-a-y) + var(--hero-scroll-y)), 0)",
              }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-snug text-on-background">
                  127 new customer enquiries
                </p>
                <p className="text-xs text-on-surface-variant">in the first 3 months</p>
              </div>
            </div>

            <div
              className="hero-float-medium absolute bottom-12 right-0 z-20 hidden w-60 rounded-[1.6rem] border border-tertiary/10 bg-tertiary-container/92 p-4 shadow-[0_18px_42px_rgba(123,88,0,0.14)] backdrop-blur-md lg:block motion-reduce:animate-none dark:border-tertiary/25 dark:bg-tertiary-container/88 dark:shadow-[0_22px_54px_rgba(0,0,0,0.36)]"
              style={{
                transform:
                  "translate3d(var(--hero-chip-b-x), calc(var(--hero-chip-b-y) + var(--hero-scroll-y)), 0)",
              }}
            >
              <div className="mb-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-tertiary text-tertiary" />
                ))}
              </div>
              <p className="mb-2 text-sm italic leading-snug text-on-tertiary-container">
                &ldquo;Edvixo transformed our clinic&apos;s online presence. We saw bookings
                double within weeks!&rdquo;
              </p>
              <p className="text-xs font-semibold text-on-tertiary-container">- Dr. Sunita K.</p>
            </div>

            <div
              className="hero-float-slow absolute -bottom-1 left-14 z-20 hidden rounded-full border border-outline-variant/60 bg-surface/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-on-surface-variant shadow-[0_14px_32px_rgba(24,29,25,0.08)] backdrop-blur-sm md:block lg:left-20 motion-reduce:animate-none dark:border-primary/20 dark:bg-surface-container-high/82 dark:shadow-[0_16px_38px_rgba(0,0,0,0.30)]"
              style={{
                transform:
                  "translate3d(var(--hero-chip-c-x), calc(var(--hero-chip-c-y) + var(--hero-scroll-y)), 0)",
              }}
            >
              Fixed Scope. Fast Delivery. Better Conversions.
            </div>
          </div>
        </div>
      </div>
    </HeroInteractiveShell>
  );
}
