import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Sapnendra Jaiswal",
  description:
    "The page you're looking for doesn't exist. Head back to the homepage.",
};

export default function NotFoundPage() {
  return (
    <main
      className="relative min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center px-5 py-16 text-center"
    >
      {/* Layer 1: background animated shapes */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-container/25 blur-2xl animate-drift pointer-events-none z-0"
        style={{ animationDelay: "0s" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-tertiary-container/20 blur-2xl animate-drift pointer-events-none z-0"
        style={{ animationDelay: "2s" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-16 right-10 md:right-24 w-8 h-8 rounded-shape-md bg-primary-container/60 rotate-45 animate-drift pointer-events-none z-0"
        style={{ animationDelay: "1s" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-24 left-8 md:left-20 w-5 h-5 rounded-full bg-primary/40 animate-drift pointer-events-none z-0"
        style={{ animationDelay: "3.5s" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-12 left-1/2 -translate-x-1/2 w-6 h-6 rounded-shape-sm bg-secondary-container/50 rotate-45 animate-drift pointer-events-none z-0"
        style={{ animationDelay: "0.8s" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-125 h-32 rounded-full bg-primary-container/15 blur-3xl pointer-events-none z-0"
      />

      {/* Layer 2: orbital ring system */}
      <div className="relative flex items-center justify-center w-72 h-72 md:w-80 md:h-80 mx-auto mb-2 z-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow pointer-events-none"
        >
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/60 animate-pulse-glow" />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-6 rounded-full border border-solid border-primary-container/40 animate-spin-reverse pointer-events-none"
        >
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-shape-xs bg-tertiary/70 rotate-45" />
        </div>

        <div className="relative z-10 animate-float">
          <svg
            viewBox="0 0 280 120"
            className="w-56 md:w-64 h-auto select-none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="gradient404" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1B6E3F" stopOpacity="1" />
                <stop offset="100%" stopColor="#1B6E3F" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="url(#gradient404)"
              fontSize="110"
              fontWeight="900"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              letterSpacing="-4"
              className="animate-glitch"
            >
              404
            </text>
          </svg>
        </div>
      </div>

      {/* Layer 3: main content */}
      <h1
        className="opacity-0 animate-fade-up text-2xl md:text-4xl font-bold text-on-background mb-3 mt-4 z-10"
        style={{ animationDelay: "0.1s" }}
      >
        You Seem Lost
      </h1>

      <p
        className="opacity-0 animate-fade-up text-on-surface-variant text-base leading-relaxed max-w-sm mx-auto mb-8 z-10"
        style={{ animationDelay: "0.25s" }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
        you back on track.
      </p>

      <div
        className="opacity-0 animate-fade-up flex flex-col sm:flex-row gap-3 justify-center items-center z-10"
        style={{ animationDelay: "0.4s" }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-on-primary rounded-shape-full px-8 py-3.5 font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center"
        >
          <Home className="w-4 h-4" />
          Go to Homepage
        </Link>

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container rounded-shape-full px-8 py-3.5 font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center"
        >
          What are you looking for?
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div
        className="opacity-0 animate-fade-up mt-10 flex flex-wrap gap-2 justify-center z-10"
        style={{ animationDelay: "0.55s" }}
      >
        <p className="w-full text-xs text-on-surface-variant mb-2 uppercase tracking-widest font-bold">
          Or explore
        </p>
        {[
          { label: "Services", href: "/services" },
          { label: "Blog", href: "/blog" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ].map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="px-4 py-2 rounded-shape-full bg-surface border border-outline-variant text-sm text-on-surface-variant hover:border-primary hover:text-primary transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </div>
    </main>
  );
}
