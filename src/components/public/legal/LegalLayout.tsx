import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import TableOfContents from "@/components/public/legal/TableOfContents";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  summaryChips: string[];
  tocItems: { id: string; label: string }[];
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  effectiveDate,
  summaryChips,
  tocItems,
  children,
}: LegalLayoutProps) {
  return (
    <div className="bg-background">
      <section className="bg-surface-container-low py-16">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-sm text-on-surface-variant"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-on-background">{title}</span>
          </nav>

          <h1 className="mt-3 mb-6 text-display-small font-bold text-on-background">
            {title}
          </h1>

          <div className="mb-6 flex items-center gap-10">
            <div>
              <p className="mb-1 text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                Last Updated
              </p>
              <p className="text-sm font-semibold text-on-background">{lastUpdated}</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                Effective Date
              </p>
              <p className="text-sm font-semibold text-on-background">{effectiveDate}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {summaryChips.map((chip) => (
              <span
                key={chip}
                className="rounded-shape-full bg-primary-container px-4 py-1.5 text-sm font-semibold text-on-primary-container"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-background py-16">
        <div className="max-w-content mx-auto px-5 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <aside className="w-full lg:w-60 shrink-0 lg:sticky lg:top-8">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                On This Page
              </p>

              <TableOfContents items={tocItems} />

              <div className="mt-8 pt-8 border-t border-outline-variant">
                <div className="bg-surface rounded-shape-xl p-5 border border-outline-variant">
                  <p className="text-xs text-on-surface-variant mb-3">Questions about this?</p>
                  <a
                    href="mailto:support@sapnendra.tech"
                    className="text-sm font-semibold text-primary hover:underline block mb-2"
                  >
                    support@sapnendra.tech
                  </a>
                  <a
                    href="https://wa.me/919685238884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Or message on WhatsApp →
                  </a>
                </div>
              </div>
            </aside>

            <main className="flex-1 min-w-0">{children}</main>
          </div>
        </div>
      </div>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-content px-5 text-center">
          <h2 className="mb-2 text-2xl font-bold text-on-primary">
            Have questions about this policy?
          </h2>
          <p className="mb-8 text-sm text-on-primary/70">
            Send an email and I&apos;ll respond within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-shape-full bg-surface px-8 py-3.5 text-sm font-bold text-primary transition-opacity hover:opacity-90"
          >
            Contact Sapnendra
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
