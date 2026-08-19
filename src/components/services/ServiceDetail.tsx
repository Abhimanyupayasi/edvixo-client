import Link from "next/link";

type Service = {
  title: string;
  heroTitle?: string;
  heroDescription?: string;
  serviceLabel?: string;
  description: string;
  trustChips?: string[];
  heroCta?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;

  problems?: {
    title: string;
    body: string;
  }[];

  whatYouGet?: {
    label: string;
    title: string;
    points: string[];
  };

  features: {
    title: string;
    body: string;
  }[];

  process: {
    number: string;
    title: string;
    body: string;
  }[];

  inclusions?: {
    label: string;
    note: string;
  }[];

  results?: {
    stats: {
      stat: string;
      label: string;
    }[];
    testimonial?: {
      rating: number;
      quote: string;
      name: string;
      role: string;
      initials: string;
    };
  };

  consultation?: {
    title: string;
    description: string;
    includedTitle: string;
    included: string[];
    cta: string;
    whatsappCta: string;
    whatsappUrl: string;
  };

  faqs: {
    question: string;
    answer: string;
  }[];

  finalCta?: {
    title: string;
    description: string;
    primary: string;
    whatsapp: string;
  };

  cta: string;
};

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({
  service,
}: ServiceDetailProps) {
  return (
    <main>

      {/* HERO */}
      <section className="bg-surface-container-low py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <Link
            href="/services"
            className="mb-8 inline-flex text-sm text-on-surface-variant hover:text-primary"
          >
            ← Services
          </Link>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            <div>
              <div className="mb-6 inline-flex rounded-shape-full bg-primary px-4 py-1.5 text-sm font-semibold text-on-primary">
                {service.serviceLabel || service.title}
              </div>

              <h1 className="mb-5 text-3xl font-bold leading-tight text-on-background md:text-4xl lg:text-5xl">
                {service.heroTitle || service.title}
              </h1>

              <p className="mb-6 max-w-xl text-base leading-relaxed text-on-surface-variant md:text-lg">
                {service.heroDescription || service.description}
              </p>

              {service.trustChips && (
                <div className="mb-8 flex flex-wrap gap-3">
                  {service.trustChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-shape-full border border-outline-variant bg-surface px-4 py-2 text-sm font-medium text-on-background"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 rounded-shape-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
                >
                  {service.heroCta || service.cta}
                  →
                </Link>

                {service.secondaryCta && service.secondaryCtaLink && (
                  <Link
                    href={service.secondaryCtaLink}
                    className="inline-flex items-center gap-2 rounded-shape-full border border-outline-variant bg-surface px-6 py-3 text-sm font-semibold text-on-background hover:bg-surface-container"
                  >
                    {service.secondaryCta}
                  </Link>
                )}
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-md rounded-shape-md border border-outline-variant bg-surface p-8 shadow-lg">
                <div className="mb-6 h-3 w-24 rounded bg-primary" />
                <div className="mb-4 h-8 w-3/4 rounded bg-surface-container-high" />
                <div className="mb-8 h-4 w-full rounded bg-surface-container" />

                <div className="grid grid-cols-2 gap-4">
                  {service.features.slice(0, 4).map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-shape-md bg-surface-container-low p-4"
                    >
                      <div className="mb-3 h-8 w-8 rounded bg-primary-container" />
                      <p className="text-xs font-semibold text-on-background">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* PROBLEMS */}
      {service.problems && service.problems.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-on-background md:text-3xl">
                Why Most Business Owners Delay...
              </h2>

              <p className="mt-3 text-sm text-on-surface-variant">
                And how it&apos;s costing you more than a website cost.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {service.problems.map((problem) => (
                <article
                  key={problem.title}
                  className="rounded-shape-md border border-outline-variant bg-surface-container-low p-6 md:p-8"
                >
                  <div className="mb-4 h-10 w-10 rounded-shape-md bg-primary-container" />

                  <h3 className="mb-2 text-base font-semibold text-on-background">
                    {problem.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {problem.body}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* WHAT YOU GET */}
      {service.whatYouGet && (
        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

              <div className="lg:col-span-2">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                  {service.whatYouGet.label}
                </p>

                <h2 className="mb-5 text-2xl font-bold text-on-background md:text-3xl">
                  {service.whatYouGet.title}
                </h2>

                <div className="space-y-4">
                  {service.whatYouGet.points.map((point) => (
                    <div
                      key={point}
                      className="border-l-2 border-primary pl-4"
                    >
                      <p className="text-sm leading-relaxed text-on-background">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:col-span-3">
                {service.features.map((feature) => (
                  <article
                    key={feature.title}
                    className="rounded-shape-md border border-outline-variant bg-surface p-6 shadow-sm"
                  >
                    <div className="mb-4 h-10 w-10 rounded-shape-md bg-primary-container" />

                    <h3 className="mb-2 text-sm font-semibold text-on-background">
                      {feature.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      {feature.body}
                    </p>
                  </article>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}


      {/* FEATURES FOR SERVICES WITHOUT WHAT-YOU-GET */}
      {!service.whatYouGet && (
        <section className="bg-surface-container-low py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

            <h2 className="mb-10 text-2xl font-bold text-on-background md:text-3xl">
              What You Get
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-shape-md border border-outline-variant bg-surface p-6"
                >
                  <h3 className="mb-2 text-base font-semibold text-on-background">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {feature.body}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* PROCESS */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-on-primary md:text-3xl">
              How We Build Your Website
            </h2>

            <p className="mt-2 text-sm text-on-primary/80">
              A streamlined process designed for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5">
            {service.process.map((step) => (
              <div
                key={step.number}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-on-primary/30 bg-on-primary/10 font-bold text-on-primary">
                  {step.number}
                </div>

                <h3 className="mb-1 text-sm font-semibold text-on-primary">
                  {step.title}
                </h3>

                <p className="text-xs leading-relaxed text-on-primary/80">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* INCLUSIONS */}
      {service.inclusions && service.inclusions.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-on-background md:text-3xl">
                Everything Included.{" "}
                <span className="text-primary">No Add-Ons.</span>
              </h2>

              <p className="mt-2 text-sm text-on-surface-variant">
                One price for a complete, professional business setup.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {service.inclusions.map((item) => (
                <div
                  key={item.label}
                  className="rounded-shape-md border border-outline-variant bg-surface-container-low p-6"
                >
                  <div className="mb-3 h-5 w-5 rounded-full bg-primary-container" />

                  <p className="text-sm font-semibold text-on-background">
                    {item.label}
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* RESULTS */}
      {service.results && (
        <section className="bg-primary-container py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

            <div className="grid grid-cols-3 gap-6">
              {service.results.stats.map((item) => (
                <div
                  key={item.label}
                  className="text-center"
                >
                  <p className="mb-2 text-3xl font-black text-primary md:text-5xl">
                    {item.stat}
                  </p>

                  <p className="text-xs font-medium text-on-primary-container md:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {service.results.testimonial && (
              <div className="mx-auto mt-12 max-w-2xl rounded-shape-md bg-surface p-8 shadow-sm">

                <div className="mb-4 flex gap-1">
                  {"★".repeat(service.results.testimonial.rating)}
                </div>

                <p className="mb-6 text-sm italic leading-relaxed text-on-background md:text-base">
                  &ldquo;{service.results.testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container">
                    <span className="text-sm font-bold text-primary">
                      {service.results.testimonial.initials}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-on-background">
                      {service.results.testimonial.name}
                    </p>

                    <p className="text-xs text-on-surface-variant">
                      {service.results.testimonial.role}
                    </p>
                  </div>
                </div>

              </div>
            )}

          </div>
        </section>
      )}


      {/* CONSULTATION */}
      {service.consultation && (
        <section className="bg-background py-16">
          <div className="mx-auto max-w-2xl px-4 md:px-6 lg:px-8">

            <div className="rounded-shape-md border border-primary/20 bg-surface p-8 text-center shadow-sm md:p-12">

              <h2 className="mb-3 text-2xl font-bold text-on-background md:text-3xl">
                {service.consultation.title}
              </h2>

              <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-on-surface-variant">
                {service.consultation.description}
              </p>

              <div className="mb-8 rounded-shape-md bg-surface-container-low p-5 text-left">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                  {service.consultation.includedTitle}
                </p>

                <div className="space-y-3">
                  {service.consultation.included.map((item) => (
                    <p
                      key={item}
                      className="text-sm text-on-background"
                    >
                      ✓ {item}
                    </p>
                  ))}
                </div>
              </div>

              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="mb-3 block w-full rounded-shape-full bg-primary py-4 text-sm font-bold text-on-primary transition-opacity hover:opacity-90"
              >
                {service.consultation.cta}
              </Link>

              <a
                href={service.consultation.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-shape-full border border-outline-variant py-3 text-sm font-semibold text-on-surface-variant hover:bg-surface-container-low"
              >
                {service.consultation.whatsappCta}
              </a>

            </div>
          </div>
        </section>
      )}


      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">

            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-on-background md:text-3xl">
                Frequently Asked Questions
              </h2>

              <p className="mt-2 text-sm text-on-surface-variant">
                Everything you need to know before we start.
              </p>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-shape-md border border-outline-variant bg-surface-container-low"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold text-on-background md:text-base">
                    {faq.question}
                  </summary>

                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* FINAL CTA */}
      {service.finalCta && (
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">

            <h2 className="mb-4 text-3xl font-bold text-on-primary md:text-4xl">
              {service.finalCta.title}
            </h2>

            <p className="mb-8 text-base text-on-primary/80 md:text-lg">
              {service.finalCta.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 rounded-shape-full bg-surface px-8 py-4 font-bold text-primary transition-opacity hover:opacity-90"
              >
                {service.finalCta.primary}
              </Link>

              <a
                href="https://wa.me/919685238884"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-shape-full border-2 border-on-primary/40 px-8 py-4 font-bold text-on-primary hover:bg-on-primary/10"
              >
                {service.finalCta.whatsapp}
              </a>

            </div>

          </div>
        </section>
      )}

    </main>
  );
}