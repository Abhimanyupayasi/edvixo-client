"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type ProjectMetric = {
  value: string;
  label: string;
};

type Project = {
  _id?: string;
  clientName?: string;
  isClientConfidential?: boolean;
  industry: string;
  title: string;
  description: string;
  metrics: ProjectMetric[];
  tech: string[];
  slug: string;
  coverImage?: string;
  thumbnailImage?: string;
  imageAlt?: string;
};

type FeaturedWorkSectionProps = {
  projects?: Project[];
};

function optimizedImage(
  url?: string,
  width = 1000,
) {
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

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const image = optimizedImage(
    project.coverImage ?? project.thumbnailImage,
    1000,
  );

  return (
    <article
      className="
        group
        relative
        h-[620px]
        w-full
        overflow-hidden
        rounded-[20px]
        border
        border-white/15
        bg-[#061a29]
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-400/40
      "
    >
      {/* =====================================================
          PROJECT IMAGE
          ===================================================== */}

      {image ? (
        <Image
          src={image}
          alt={project.imageAlt ?? project.title}
          fill
          sizes="
            (max-width: 767px) 88vw,
            (max-width: 1023px) 45vw,
            33vw
          "
          className="
            object-cover
            object-center
            transition-transform
            duration-700
            group-hover:scale-[1.02]
          "
        />
      ) : (
        <div className="absolute inset-0 bg-[#061a29]" />
      )}

      {/* =====================================================
          SOFT IMAGE GRADIENT
          Keeps the upper image clear and readable.
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#061a29]
          via-[#061a29]/20
          via-[58%]
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT AREA
          ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          px-5
          pb-5
          pt-24
        "
      >
        {/* ===================================================
            CONTENT-ONLY BLUR

            No separate glass rectangle.
            The blur fades naturally into the image.
            =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[85%]
            bg-gradient-to-t
            from-[#061a29]/95
            via-[#061a29]/65
            to-transparent
            backdrop-blur-[2px]
          "
        />

        {/* ===================================================
            ACTUAL CARD CONTENT
            =================================================== */}

        <div className="relative z-10">

          {/* CATEGORY + CLIENT */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span
              className="
                rounded-full
                border
                border-sky-400
                bg-[#061a29]/45
                px-3
                py-1.5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-sky-300
                backdrop-blur-sm
              "
            >
              {project.industry}
            </span>

            {project.isClientConfidential ? (
              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[#061a29]/60
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-sm
                "
              >
                <Shield className="h-3.5 w-3.5" />
                Confidential
              </span>
            ) : project.clientName ? (
              <span
                className="
                  rounded-full
                  bg-[#061a29]/60
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-sm
                "
              >
                {project.clientName}
              </span>
            ) : null}
          </div>

          {/* TITLE */}
          <h3
            className="
              max-w-[95%]
              text-[25px]
              font-bold
              leading-[1.15]
              tracking-tight
              text-white
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
            "
          >
            {project.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3
              max-w-[95%]
              text-[14px]
              leading-6
              text-white/90
              drop-shadow-[0_2px_7px_rgba(0,0,0,0.9)]
            "
          >
            {project.description}
          </p>

          {/* =================================================
              METRICS
              ================================================= */}

          {project.metrics?.length > 0 && (
            <div className="mt-5 grid grid-cols-3 gap-2">
              {project.metrics
                .slice(0, 3)
                .map((metric) => (
                  <div
                    key={`${metric.value}-${metric.label}`}
                    className="
                      min-w-0
                      rounded-[15px]
                      bg-[#ff7900]
                      px-3
                      py-3
                      text-white
                      shadow-[0_8px_22px_rgba(255,121,0,0.20)]
                    "
                  >
                    <p
                      className="
                        text-[20px]
                        font-bold
                        leading-none
                      "
                    >
                      {metric.value}
                    </p>

                    <p
                      className="
                        mt-1.5
                        line-clamp-2
                        text-[9px]
                        font-bold
                        uppercase
                        leading-[1.3]
                        tracking-[0.06em]
                      "
                    >
                      {metric.label}
                    </p>
                  </div>
                ))}
            </div>
          )}

          {/* =================================================
              TECHNOLOGY TAGS
              ================================================= */}

          {project.tech?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech
                .slice(0, 3)
                .map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/25
                      bg-[#061a29]/50
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-white
                      backdrop-blur-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
            </div>
          )}

          {/* =================================================
              ACTION BUTTONS
              ================================================= */}

          <div className="mt-5 flex items-center gap-5">
            <Button
              asChild
              className="
                h-11
                rounded-full
                bg-[#ff7900]
                px-5
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(255,121,0,0.25)]
                transition-all
                hover:bg-[#ff8b1f]
              "
            >
              <Link
                href={`/portfolio/${project.slug}`}
              >
                View Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Link
              href={`/contact?project=${encodeURIComponent(
                project.title,
              )}#contact-form`}
              className="
                text-sm
                font-semibold
                text-[#ff7900]
                transition-colors
                hover:text-orange-300
              "
            >
              Send Inquiry
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export function FeaturedWorkSection({
  projects = [],
}: FeaturedWorkSectionProps) {
  const carouselRef =
    useRef<HTMLDivElement>(null);

  if (!projects.length) {
    return null;
  }

  const scrollCarousel = (
    direction: "left" | "right",
  ) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstCard =
      carousel.querySelector<HTMLElement>(
        "[data-project-card]",
      );

    if (!firstCard) {
      return;
    }

    const cardWidth =
      firstCard.getBoundingClientRect().width;

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
    <section
      className="
        relative
        overflow-hidden
        bg-[#061a29]
        py-16
        lg:py-20
      "
      aria-label="Recent work"
    >
      {/* =====================================================
          BACKGROUND GLOW
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* ===================================================
            SECTION HEADER
            =================================================== */}

        <div
          className="
            mb-9
            flex
            flex-col
            gap-6
            md:mb-10
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p
              className="
                mb-2
                text-sm
                font-bold
                uppercase
                tracking-[0.04em]
                text-[#ff7900]
              "
            >
              Our Work
            </p>

            <h2
              className="
                text-4xl
                font-bold
                tracking-tight
                text-white
                md:text-5xl
                lg:text-[48px]
              "
            >
              Recent Work
            </h2>

            <p
              className="
                mt-3
                max-w-3xl
                text-base
                leading-relaxed
                text-white/70
                md:text-[16px]
              "
            >
              A closer look at the strategy, craft,
              and measurable outcomes behind selected
              Edvixo projects.
            </p>
          </div>

          {/* EXPLORE ALL PROJECTS */}
          <Button
            asChild
            variant="outline"
            className="
              h-12
              shrink-0
              rounded-full
              border-white/25
              bg-transparent
              px-6
              text-white
              hover:border-[#ff7900]
              hover:bg-transparent
              hover:text-white
            "
          >
            <Link href="/portfolio">
              Explore All Projects
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* ===================================================
            CAROUSEL
            =================================================== */}

        <div className="relative">

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={() =>
              scrollCarousel("left")
            }
            aria-label="Previous projects"
            className="
              absolute
              left-0
              top-1/2
              z-30
              hidden
              h-14
              w-14
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-[#061a29]/95
              text-white
              shadow-xl
              backdrop-blur-sm
              transition-all
              hover:border-[#ff7900]/60
              hover:bg-[#10283b]
              lg:flex
            "
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          {/* PROJECT CARDS */}
          <div
            ref={carouselRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-6
              overflow-x-auto
              scroll-smooth
              pb-2
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
            aria-label="Project carousel"
          >
            {projects
              .slice(0, 3)
              .map((project) => (
                <div
                  key={
                    project._id ??
                    project.slug
                  }
                  data-project-card
                  className="
                    w-[88vw]
                    shrink-0
                    snap-start
                    sm:w-[80vw]
                    md:w-[calc((100%-24px)/2)]
                    lg:w-[calc((100%-48px)/3)]
                  "
                >
                  <ProjectCard
                    project={project}
                  />
                </div>
              ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={() =>
              scrollCarousel("right")
            }
            aria-label="Next projects"
            className="
              absolute
              right-0
              top-1/2
              z-30
              hidden
              h-14
              w-14
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-[#061a29]/95
              text-white
              shadow-xl
              backdrop-blur-sm
              transition-all
              hover:border-[#ff7900]/60
              hover:bg-[#10283b]
              lg:flex
            "
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>

        {/* ===================================================
            DOTS
            =================================================== */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-3
              w-3
              rounded-full
              bg-[#ff7900]
            "
          />

          <span
            className="
              h-3
              w-3
              rounded-full
              bg-[#27415a]
            "
          />

          <span
            className="
              h-3
              w-3
              rounded-full
              bg-[#27415a]
            "
          />
        </div>

        {/* ===================================================
            MOBILE CONTROLS
            =================================================== */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            lg:hidden
          "
        >
          <p className="text-sm text-white/50">
            Swipe to explore projects
          </p>

          <div className="flex gap-2">

            <button
              type="button"
              onClick={() =>
                scrollCarousel("left")
              }
              aria-label="Previous projects"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-[#061a29]
                text-white
              "
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() =>
                scrollCarousel("right")
              }
              aria-label="Next projects"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-[#061a29]
                text-white
              "
            >
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}