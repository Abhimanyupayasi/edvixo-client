"use client";

import { useState } from "react";
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

export default function PortfolioSection({
  items,
}: PortfolioSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = Array.from(
    new Set(items.flatMap((item) => item.industries ?? []))
  ).sort();

  const filteredItems =
    selectedIndustry === "All"
      ? items
      : items.filter((item) =>
          item.industries?.includes(selectedIndustry)
        );

  const featuredItem = filteredItems.find(
    (item) => item.isFeatured
  );

  const regularItems = filteredItems.filter(
    (item) => item._id !== featuredItem?._id
  );

  return (
    <section className="bg-surface">
      {/* Filter Bar */}
      <div className="sticky top-16 z-10 border-y border-outline-variant bg-surface">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setSelectedIndustry("All")}
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
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
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

      {/* Portfolio Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <FolderSearch className="mb-6 h-16 w-16 text-outline opacity-50" />

            <h3 className="mb-3 text-xl font-semibold text-on-surface-variant">
              No projects in this category yet
            </h3>

            <p className="mb-8 max-w-sm text-on-surface-variant">
              New projects are added regularly. Check back soon
              or browse all work to see what&apos;s available.
            </p>

            <button
              onClick={() => setSelectedIndustry("All")}
              className="rounded-shape-full bg-primary-container px-6 py-3 text-sm font-semibold text-on-primary-container transition-colors hover:bg-primary hover:text-on-primary"
            >
              See All Projects
            </button>
          </div>
        ) : (
          <>
            {/* Featured Project */}
            {featuredItem && (
              <article className="mb-10 overflow-hidden rounded-shape-lg border border-outline-variant bg-surface-container-lowest shadow-sm">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
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

                  {/* Content */}
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
                            )
                          )}
                        </div>
                      )}

                    {/* Results */}
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

            {/* Regular Projects */}
            {regularItems.length > 0 && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {regularItems.map((item) => (
                  <article
                    key={item._id}
                    className="group overflow-hidden rounded-shape-lg border border-outline-variant bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    {/* Image */}
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

                    {/* Content */}
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

                      {/* Results */}
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

                      {/* Tech Stack */}
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