"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  FolderSearch,
} from "lucide-react";

type PortfolioItem = {
  _id: string;
  isFeatured?: boolean;
  industries?: string[];
  title: string;
  slug: string;
  tagline: string;
  clientIndustry?: string;
  isClientConfidential?: boolean;
  clientName?: string;
  clientLocation?: string;
  coverImage?: string;
  thumbnailImage?: string;
  imageAlt?: string;
  liveUrl?: string;
  completedAt?: string;
  duration?: string;

  results?: Array<{
    value: string;
    label: string;
  }>;

  techStack?: Array<{
    name: string;
  }>;
};

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

type PortfolioView =
  | "case-studies"
  | "results"
  | "featured"
  | "success"
  | "industries";

export default function PortfolioSection({
  items,
}: PortfolioSectionProps) {
  const [view, setView] = useState<PortfolioView>("case-studies");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  /*
   * Read the Portfolio menu selection from the URL.
   *
   * Examples:
   * /portfolio?view=case-studies
   * /portfolio?view=results
   * /portfolio?view=featured
   * /portfolio?view=success
   * /portfolio?view=industries
   */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const currentView = params.get("view");

    if (
      currentView === "case-studies" ||
      currentView === "results" ||
      currentView === "featured" ||
      currentView === "success" ||
      currentView === "industries"
    ) {
      setView(currentView);
    } else {
      setView("case-studies");
    }

    const currentIndustry = params.get("industry");

    if (currentIndustry) {
      setSelectedIndustry(currentIndustry);
    }
  }, []);

  const industries = Array.from(
    new Set(items.flatMap((item) => item.industries ?? [])),
  ).sort();

  /*
   * First apply the selected Portfolio menu view.
   */
  let viewItems = items;

  if (view === "featured") {
    viewItems = items.filter((item) => item.isFeatured);
  }

  if (view === "results") {
    viewItems = items.filter(
      (item) => item.results && item.results.length > 0,
    );
  }

  if (view === "success") {
    viewItems = items.filter(
      (item) =>
        (item.results && item.results.length > 0) ||
        item.isFeatured,
    );
  }

  /*
   * Industries view shows all projects initially,
   * then allows filtering by industry.
   */
  if (view === "industries" && selectedIndustry !== "All") {
    viewItems = items.filter((item) =>
      item.industries?.includes(selectedIndustry),
    );
  }

  /*
   * If the user selects an industry from the filter bar,
   * apply it to every view.
   */
  const filteredItems =
    selectedIndustry === "All"
      ? viewItems
      : viewItems.filter((item) =>
          item.industries?.includes(selectedIndustry),
        );

  const featuredItem =
    view === "featured"
      ? filteredItems.find((item) => item.isFeatured)
      : filteredItems.find((item) => item.isFeatured);

  const regularItems = filteredItems.filter(
    (item) => item._id !== featuredItem?._id,
  );

  const getViewTitle = () => {
    switch (view) {
      case "results":
        return "Client Results";

      case "featured":
        return "Featured Projects";

      case "success":
        return "Success Stories";

      case "industries":
        return "Projects by Industry";

      case "case-studies":
      default:
        return "Case Studies";
    }
  };

  return (
    <section className="bg-surface">
      {/* VIEW TITLE */}
      <div className="border-b border-outline-variant bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </p>

          <h2 className="mt-2 text-3xl font-bold text-on-background">
            {getViewTitle()}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
            Explore Edvixo projects, case studies, client outcomes,
            and digital experiences built for real businesses.
          </p>
        </div>
      </div>

      {/* INDUSTRY FILTER */}
      <div className="sticky top-16 z-10 border-y border-outline-variant bg-surface">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <button
            type="button"
            onClick={() => {
              setSelectedIndustry("All");

              const url = new URL(window.location.href);
              url.searchParams.delete("industry");
              window.history.replaceState({}, "", url.toString());
            }}
            className={
              selectedIndustry === "All"
                ? "flex shrink-0 items-center gap-1.5 rounded-shape-full bg-primary-container px-5 py-2 text-sm font-semibold text-on-primary-container"
                : "shrink-0 rounded-shape-full border border-outline-variant px-5 py-2 text-sm font-semibold text-on-surface-variant transition-colors hover:bg-surface-container"
            }
          >
            {selectedIndustry === "All" && (
              <CheckCircle2 className="h-4 w-4" />
            )}

            All
          </button>

          {industries.map((industry) => (
            <button
              type="button"
              key={industry}
              onClick={() => {
                setSelectedIndustry(industry);

                const url = new URL(window.location.href);
                url.searchParams.set("industry", industry);
                window.history.replaceState({}, "", url.toString());
              }}
              className={
                selectedIndustry === industry
                  ? "flex shrink-0 items-center gap-1.5 rounded-shape-full bg-primary-container px-5 py-2 text-sm font-semibold text-on-primary-container"
                  : "shrink-0 rounded-shape-full border border-outline-variant px-5 py-2 text-sm font-semibold text-on-surface-variant transition-colors hover:bg-surface-container"
              }
            >
              {selectedIndustry === industry && (
                <CheckCircle2 className="h-4 w-4" />
              )}

              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* PORTFOLIO CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <FolderSearch className="mb-6 h-16 w-16 text-outline opacity-50" />

            <h3 className="mb-3 text-xl font-semibold text-on-surface-variant">
              No projects in this category yet
            </h3>

            <p className="mb-8 max-w-sm text-on-surface-variant">
              New projects are added regularly. Check back soon
              or browse all case studies.
            </p>

            <button
              type="button"
              onClick={() => {
                setView("case-studies");
                setSelectedIndustry("All");

                window.history.replaceState(
                  {},
                  "",
                  "/portfolio?view=case-studies",
                );
              }}
              className="rounded-shape-full bg-primary-container px-6 py-3 text-sm font-semibold text-on-primary-container transition-colors hover:bg-primary hover:text-on-primary"
            >
              See All Projects
            </button>
          </div>
        ) : (
          <>
            {/* FEATURED PROJECT */}
            {featuredItem && (
              <article className="mb-10 overflow-hidden rounded-shape-lg border border-outline-variant bg-surface-container-lowest shadow-sm">
                <div className="grid lg:grid-cols-2">
                  {/* IMAGE */}
                  <div className="relative min-h-[320px] lg:min-h-[430px]">
                    {featuredItem.coverImage && (
                      <Image
                        src={featuredItem.coverImage}
                        alt={
                          featuredItem.imageAlt ||
                          featuredItem.title
                        }
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                      Featured Project
                    </p>

                    <h2 className="mb-4 text-3xl font-bold leading-tight text-on-background">
                      {featuredItem.title}
                    </h2>

                    <p className="mb-6 leading-relaxed text-on-surface-variant">
                      {featuredItem.tagline}
                    </p>

                    {featuredItem.industries &&
                      featuredItem.industries.length > 0 && (
                        <div className="mb-6 flex flex-wrap gap-2">
                          {featuredItem.industries.map(
                            (industry) => (
                              <span
                                key={industry}
                                className="rounded-shape-full bg-secondary-container px-3 py-1 text-xs font-medium text-on-secondary-container"
                              >
                                {industry}
                              </span>
                            ),
                          )}
                        </div>
                      )}

                    {/* RESULTS */}
                    {featuredItem.results &&
                      featuredItem.results.length > 0 && (
                        <div className="mb-8 grid grid-cols-3 gap-3">
                          {featuredItem.results.map((result) => (
                            <div
                              key={result.label}
                              className="rounded-shape-md bg-surface-container p-3 text-center"
                            >
                              <p className="text-lg font-bold text-primary">
                                {result.value}
                              </p>

                              <p className="mt-1 text-xs text-on-surface-variant">
                                {result.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                    <Link
                      href={`/portfolio/${featuredItem.slug}`}
                      className="inline-flex w-fit items-center gap-2 rounded-shape-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* REGULAR PROJECTS */}
            {regularItems.length > 0 && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {regularItems.map((item) => (
                  <article
                    key={item._id}
                    className="group overflow-hidden rounded-shape-lg border border-outline-variant bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    {/* IMAGE */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {item.thumbnailImage && (
                        <Image
                          src={item.thumbnailImage}
                          alt={
                            item.imageAlt ||
                            item.title
                          }
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {item.industries?.map((industry) => (
                          <span
                            key={industry}
                            className="rounded-shape-full bg-secondary-container px-3 py-1 text-xs font-medium text-on-secondary-container"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>

                      <h3 className="mb-3 text-2xl font-semibold text-on-background">
                        {item.title}
                      </h3>

                      <p className="mb-6 leading-relaxed text-on-surface-variant">
                        {item.tagline}
                      </p>

                      {/* RESULTS */}
                      {item.results &&
                        item.results.length > 0 && (
                          <div className="mb-6 grid grid-cols-3 gap-2">
                            {item.results.map((result) => (
                              <div
                                key={result.label}
                                className="rounded-shape-md bg-surface-container p-3 text-center"
                              >
                                <p className="text-base font-bold text-primary">
                                  {result.value}
                                </p>

                                <p className="mt-1 text-[11px] text-on-surface-variant">
                                  {result.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                      {/* TECH STACK */}
                      {item.techStack &&
                        item.techStack.length > 0 && (
                          <div className="mb-6 flex flex-wrap gap-2">
                            {item.techStack.map((tech) => (
                              <span
                                key={tech.name}
                                className="rounded-shape-full border border-outline-variant px-3 py-1 text-xs text-on-surface-variant"
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        )}

                      <Link
                        href={`/portfolio/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-on-background"
                      >
                        View Case Study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}