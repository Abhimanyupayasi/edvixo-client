"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  _id?: string;
  clientName?: string;
  isClientConfidential?: boolean;
  industry: string;
  title: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
  tech: string[];
  slug: string;
  coverImage?: string;
  thumbnailImage?: string;
  imageAlt?: string;
};

type FeaturedWorkSectionProps = {
  projects?: Project[];
};

function optimizedImage(url?: string, width = 900) {
  if (
    !url ||
    !url.includes("res.cloudinary.com") ||
    !url.includes("/upload/")
  ) {
    return url;
  }

  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,dpr_auto,c_limit,w_${width}/`,
  );
}

function ProjectCard({ project }: { project: Project }) {
  const image = optimizedImage(
    project.coverImage ?? project.thumbnailImage,
    900,
  );

  return (
    <article className="flex h-full min-h-[620px] flex-col overflow-hidden rounded-4xl border border-outline-variant/60 bg-surface-container-lowest shadow-[0_14px_34px_rgba(19,33,24,0.1)]">
      {/* Project Image */}
      <div className="relative aspect-16/10 shrink-0 overflow-hidden bg-surface-container">
        {image ? (
          <Image
            src={image}
            alt={project.imageAlt ?? project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 767px) 88vw, (max-width: 1023px) 45vw, 30vw"
          />
        ) : null}
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category + Client */}
        <div className="flex min-h-7 flex-wrap items-center gap-2">
          <span className="rounded-full border border-outline-variant/60 bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
            {project.industry}
          </span>

          {project.isClientConfidential ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-surface-container px-3 py-1 text-xs font-semibold text-on-surface-variant">
              <Shield className="h-3.5 w-3.5" />
              Confidential client
            </span>
          ) : project.clientName ? (
            <span className="rounded-full bg-primary-container px-3 py-1 text-xs font-semibold text-on-primary-container">
              {project.clientName}
            </span>
          ) : null}
        </div>

        {/* Title */}
        <h3 className="mt-5 line-clamp-2 min-h-[4rem] text-2xl font-bold leading-tight text-on-background">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 min-h-[5.25rem] text-sm leading-7 text-on-surface-variant">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="mt-5 min-h-[72px]">
          {project.metrics.length > 0 ? (
            <div className="grid grid-cols-3 gap-2">
              {project.metrics.slice(0, 3).map((metric) => (
                <div
                  key={metric.label}
                  className="min-w-0 rounded-2xl bg-primary px-3 py-3 text-on-primary"
                >
                  <p className="truncate text-lg font-bold leading-none">
                    {metric.value}
                  </p>

                  <p className="mt-1.5 line-clamp-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-on-primary/80">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Technology Tags */}
        <div className="mt-5 min-h-[40px]">
          {project.tech.length > 0 ? (
            <div className="flex flex-wrap content-start gap-2">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-outline-variant/55 bg-surface px-2.5 py-1 text-xs font-medium text-on-surface-variant"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap gap-3 border-t border-outline-variant/45 pt-5">
          <Button
            asChild
            className="h-10 rounded-full bg-primary px-5 text-sm font-semibold text-on-primary hover:bg-primary/90"
          >
            <Link href={`/portfolio/${project.slug}`}>View Project</Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="h-10 rounded-full px-3 text-sm font-semibold text-primary hover:bg-primary/10 hover:text-primary"
          >
            <Link
              href={`/contact?project=${encodeURIComponent(
                project.title,
              )}#contact-form`}
            >
              Send Inquiry
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function FeaturedWorkSection({
  projects = [],
}: FeaturedWorkSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!projects.length) {
    return null;
  }

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstCard =
      carousel.querySelector<HTMLElement>("[data-project-card]");

    if (!firstCard) {
      return;
    }

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 24;

    carousel.scrollBy({
      left:
        direction === "right"
          ? cardWidth + gap
          : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-surface py-24" aria-label="Recent work">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-medium mb-2 uppercase tracking-widest text-primary">
              Recent Work
            </p>

            <h2 className="text-headline-large font-bold leading-tight text-on-background">
              Results for Real Businesses
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-on-surface-variant">
              A closer look at the strategy, craft, and measurable outcomes
              behind selected Edvixo projects.
            </p>
          </div>

          {/* Desktop Explore Button */}
          <Button
            asChild
            variant="outline"
            className="hidden h-10 rounded-shape-sm border-outline-variant px-5 text-on-background hover:bg-surface-container sm:inline-flex"
          >
            <Link href="/portfolio">
              Explore All Projects
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Project Carousel */}
        <div className="relative">
          {/* Desktop Previous */}
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            aria-label="Previous projects"
            className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant bg-surface text-on-background shadow-md transition hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:flex"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* Cards */}
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Project carousel"
          >
            {projects.map((project) => (
              <div
                key={project._id ?? project.slug}
                data-project-card
                className="w-[88vw] shrink-0 snap-start md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Desktop Next */}
          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            aria-label="Next projects"
            className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant bg-surface text-on-background shadow-md transition hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:flex"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="mt-5 flex items-center justify-between gap-4 lg:hidden">
          <p className="text-sm text-on-surface-variant">
            Swipe to explore projects
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              aria-label="Previous projects"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-surface text-on-background transition hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              aria-label="Next projects"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-surface text-on-background transition hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile Explore Button */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Button
            asChild
            variant="outline"
            className="h-10 rounded-shape-sm border-outline-variant px-5 text-on-background hover:bg-surface-container"
          >
            <Link href="/portfolio">
              Explore All Projects
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}