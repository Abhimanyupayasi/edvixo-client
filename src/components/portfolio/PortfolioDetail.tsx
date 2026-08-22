import Image from "next/image";
import Link from "next/link";

interface PortfolioItem {
  title: string;
  tagline: string;
  clientName?: string;
  clientIndustry?: string;
  clientLocation?: string;
  completedAt?: string;
  duration?: string;
  coverImage?: string;
  imageAlt?: string;
  liveUrl?: string;
  overview?: string;
  challenge?: string;
  approach?: string;
  solution?: string;
  features?: string[];
  results?: {
    value: string;
    label: string;
  }[];
  techStack?: {
    name: string;
  }[];
  sections?: {
    heading: string;
    content: string;
  }[];
  gallery?: {
    image: string;
    alt: string;
  }[];
  testimonial?: {
    quote: string;
    name: string;
    role?: string;
  } | null;
}

interface PortfolioDetailProps {
  item: PortfolioItem;
}

export default function PortfolioDetail({
  item,
}: PortfolioDetailProps) {
  const year = item.completedAt
    ? new Date(item.completedAt).getFullYear()
    : "";

  return (
    <main className="bg-background text-on-background">

      {/* HERO */}
      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                {item.clientIndustry && (
                  <span className="rounded bg-secondary-container px-3 py-1 text-xs font-semibold text-on-secondary-container">
                    {item.clientIndustry}
                  </span>
                )}

                <span className="rounded bg-surface-container px-3 py-1 text-xs font-semibold text-on-surface-variant">
                  Case Study
                </span>

                {year && (
                  <span className="rounded bg-surface-container px-3 py-1 text-xs font-semibold text-on-surface-variant">
                    {year}
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {item.title}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-on-surface-variant">
                {item.tagline}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  ["CLIENT", item.clientName],
                  ["INDUSTRY", item.clientIndustry],
                  ["LOCATION", item.clientLocation],
                  ["DURATION", item.duration],
                ]
                  .filter((item) => item[1])
                  .map(([label, value]) => (
                    <div key={label}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        {value}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {item.coverImage && (
              <div className="relative overflow-hidden rounded-shape-md shadow-xl">
                <div className="relative h-80 w-full">
                  <Image
                    src={item.coverImage}
                    alt={item.imageAlt || item.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* RESULTS */}
      {item.results && item.results.length > 0 && (
        <section className="bg-primary py-10">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 px-4 md:px-6">
            {item.results.map((result) => (
              <div key={result.label} className="min-w-32 text-center">
                <p className="text-3xl font-bold text-white md:text-4xl">
                  {result.value}
                </p>

                <p className="mt-1 text-sm text-primary-container">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* OVERVIEW */}
      {item.overview && (
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              PROJECT OVERVIEW
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              About the Project
            </h2>

            <p className="text-lg leading-relaxed text-on-surface-variant">
              {item.overview}
            </p>

          </div>
        </section>
      )}

      {/* CHALLENGE */}
      {item.challenge && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              THE CHALLENGE
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Business Challenge
            </h2>

            <p className="text-base leading-relaxed text-on-surface-variant">
              {item.challenge}
            </p>

          </div>
        </section>
      )}

      {/* APPROACH */}
      {item.approach && (
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              OUR APPROACH
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              How We Approached the Project
            </h2>

            <p className="text-base leading-relaxed text-on-surface-variant">
              {item.approach}
            </p>

          </div>
        </section>
      )}

      {/* SOLUTION */}
      {item.solution && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              SOLUTION DELIVERED
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              What We Built
            </h2>

            <p className="text-base leading-relaxed text-on-surface-variant">
              {item.solution}
            </p>

          </div>
        </section>
      )}

      {/* FEATURES */}
      {item.features && item.features.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              KEY FEATURES
            </p>

            <h2 className="mb-10 text-3xl font-bold md:text-4xl">
              What Was Delivered
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {item.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-shape-md border border-outline-variant bg-surface-container-lowest p-6"
                >
                  <div className="mb-4 h-2 w-10 rounded-full bg-primary" />

                  <h3 className="font-semibold">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* TECHNOLOGIES */}
      {item.techStack && item.techStack.length > 0 && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8">

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              TECHNOLOGY
            </p>

            <h2 className="mb-8 text-3xl font-bold">
              Technologies Used
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {item.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="rounded-shape-full bg-surface-container px-5 py-2 text-sm font-medium text-on-surface-variant"
                >
                  {tech.name}
                </span>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* EXISTING CASE STUDY SECTIONS */}
      {item.sections && item.sections.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">

            {item.sections.map((section) => (
              <div key={section.heading} className="mb-12">

                <h2 className="mb-5 border-l-4 border-primary pl-4 text-2xl font-bold">
                  {section.heading}
                </h2>

                <p className="text-base leading-relaxed text-on-surface-variant">
                  {section.content}
                </p>

              </div>
            ))}

          </div>
        </section>
      )}

      {/* GALLERY */}
      {item.gallery && item.gallery.length > 0 && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              PROJECT GALLERY
            </p>

            <h2 className="mb-10 text-3xl font-bold md:text-4xl">
              Project Visuals
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {item.gallery.map((image) => (
                <div
                  key={image.image}
                  className="relative h-72 overflow-hidden rounded-shape-md"
                >
                  <Image
                    src={image.image}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* TESTIMONIAL */}
      {item.testimonial && (
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">

            <p className="text-lg italic leading-relaxed text-on-surface-variant">
              &ldquo;{item.testimonial.quote}&rdquo;
            </p>

            <p className="mt-5 font-semibold">
              {item.testimonial.name}
            </p>

            {item.testimonial.role && (
              <p className="mt-1 text-sm text-on-surface-variant">
                {item.testimonial.role}
              </p>
            )}

          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Need a project like this?
          </h2>

          <p className="mt-4 leading-relaxed text-primary-container">
            Let&apos;s discuss how Edvixo can build a digital solution for your
            business.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href={`/contact?project=${encodeURIComponent(item.title)}#contact-form`}
              className="rounded-shape-full bg-white px-8 py-4 font-semibold text-primary transition-colors hover:bg-primary-container"
            >
              Send Inquiry
            </Link>

            {item.liveUrl && item.liveUrl !== "https://example.com" && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-shape-full border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Visit Website
              </a>
            )}

            <Link
              href="/portfolio"
              className="rounded-shape-full border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse Portfolio
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}