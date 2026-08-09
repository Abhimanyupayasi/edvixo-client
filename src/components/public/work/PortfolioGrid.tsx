"use client";

import { useState } from "react";
import { CheckCircle2, FolderSearch } from "lucide-react";
import Link from "next/link";
import PortfolioCard from "./PortfolioCard";

type PortfolioItem = {
  _id: string | { toString(): string };
  isFeatured?: boolean;
  industries?: string[];
  title: string;
  slug: string;
  tagline: string;
  clientIndustry?: string;
  isClientConfidential?: boolean;
  clientName?: string;
  coverImage?: string;
  thumbnailImage?: string;
  imageAlt?: string;
  liveUrl?: string;
  completedAt?: string | Date;
  results?: Array<{ value: string; label: string }>;
  techStack?: Array<{ name: string }>;
};

interface PortfolioGridProps {
  items: PortfolioItem[];
  industries: string[];
}

export default function PortfolioGrid({ items, industries }: PortfolioGridProps) {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredItems =
    selectedIndustry === "All"
      ? items
      : items.filter((item) => item.industries?.includes(selectedIndustry));

  const featuredItems = filteredItems.filter((item) => item.isFeatured);
  const featuredItem = featuredItems[0];
  const regularItems = [
    ...featuredItems.slice(1),
    ...filteredItems.filter((item) => !item.isFeatured),
  ];

  return (
    <div>
      {/* ── Filter chip bar ─────────────────────────────────────────────── */}
      <div className="sticky top-16 z-10 bg-surface border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* "All" chip */}
          <button
            onClick={() => setSelectedIndustry("All")}
            className={
              selectedIndustry === "All"
                ? "px-5 py-2 rounded-shape-full bg-primary-container text-on-primary-container text-sm font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors duration-200"
                : "px-5 py-2 rounded-shape-full border border-outline-variant text-on-surface-variant text-sm font-semibold whitespace-nowrap hover:bg-surface-container transition-colors duration-200"
            }
          >
            {selectedIndustry === "All" && (
              <CheckCircle2 className="w-4 h-4" />
            )}
            All
          </button>

          {/* Industry chips */}
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={
                selectedIndustry === industry
                  ? "px-5 py-2 rounded-shape-full bg-primary-container text-on-primary-container text-sm font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors duration-200"
                  : "px-5 py-2 rounded-shape-full border border-outline-variant text-on-surface-variant text-sm font-semibold whitespace-nowrap hover:bg-surface-container transition-colors duration-200"
              }
            >
              {selectedIndustry === industry && (
                <CheckCircle2 className="w-4 h-4" />
              )}
              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid content ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredItems.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <FolderSearch className="w-16 h-16 text-outline opacity-50 mb-6" />
            <h3 className="text-xl font-semibold text-on-surface-variant mb-3">
              No projects in this category yet
            </h3>
            <p className="text-on-surface-variant mb-8 max-w-sm">
              New projects are added regularly. Check back soon or browse all
              work to see what&apos;s available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setSelectedIndustry("All")}
                className="px-6 py-3 rounded-shape-full bg-primary-container text-on-primary-container font-semibold text-sm hover:bg-primary hover:text-on-primary transition-colors duration-200 cursor-pointer"
              >
                See All Projects
              </button>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-shape-full bg-primary text-on-primary font-semibold text-sm text-center hover:opacity-90 transition-opacity duration-200"
              >
                Get in Touch &rarr;
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Featured card */}
            {featuredItem && (
              <PortfolioCard item={featuredItem} featured={true} />
            )}

            {/* Regular cards grid */}
            {regularItems.length > 0 && (
              <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 mt-8">
                {regularItems.map((item) => (
                  <PortfolioCard key={String(item._id)} item={item} featured={false} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
