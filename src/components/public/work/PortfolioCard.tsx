import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Monitor,
  Shield,
  Smartphone,
  Star,
} from "lucide-react";

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

interface PortfolioCardProps {
  item: PortfolioItem;
  featured?: boolean;
}

const DEVICE_ICONS = [Monitor, Smartphone, BookOpen] as const;
const IMAGE_BACKGROUNDS = [
  "from-[#EFF7F0] via-[#E5F1E8] to-[#DCEDE2]",
  "from-[#F6F2EA] via-[#EEF4EC] to-[#DFEEE6]",
  "from-[#EDF6F4] via-[#E3F0E9] to-[#F3EFE5]",
] as const;

function getOptimizedCloudinaryUrl(url?: string, width = 1200) {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }

  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,dpr_auto,c_limit,w_${width}/`
  );
}

function getCompletedYear(date?: string | Date) {
  if (!date) return null;

  const year = new Date(date).getFullYear();
  return Number.isFinite(year) ? year : null;
}

function getPreviewUrl(item: PortfolioItem, width: number) {
  return getOptimizedCloudinaryUrl(item.coverImage || item.thumbnailImage, width);
}

function getClientLabel(item: PortfolioItem) {
  if (item.isClientConfidential) {
    return {
      text: "Confidential Client",
      icon: Shield,
      className: "bg-surface-container text-on-surface-variant",
    };
  }

  if (item.clientName) {
    return {
      text: item.clientName,
      icon: null,
      className: "bg-primary-container text-on-primary-container",
    };
  }

  return null;
}

function PreviewFrame({
  item,
  hostname,
  width,
  iconIndex = 0,
  className = "",
}: {
  item: PortfolioItem;
  hostname: string;
  width: number;
  iconIndex?: number;
  className?: string;
}) {
  const previewUrl = getPreviewUrl(item, width);
  const DeviceIcon = DEVICE_ICONS[iconIndex % DEVICE_ICONS.length];
  const imageBg = IMAGE_BACKGROUNDS[iconIndex % IMAGE_BACKGROUNDS.length];

  return (
    <div className={`relative overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#121714] shadow-[0_22px_48px_rgba(10,16,13,0.24)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#06D6A0]" />
        <span className="ml-3 truncate rounded-full bg-white/8 px-3 py-1 text-[0.66rem] font-medium tracking-[0.18em] text-white/75">
          {hostname}
        </span>
      </div>

      {previewUrl ? (
        <div className="relative aspect-16/10 overflow-hidden bg-[#0F1410]">
          <Image
            src={previewUrl}
            alt={item.imageAlt ?? item.title}
            fill
            className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
          />
        </div>
      ) : (
        <div className={`relative flex aspect-16/10 items-center justify-center bg-linear-to-br ${imageBg}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,124,65,0.14),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.82),transparent_32%)]" />
          <div className="relative flex flex-col items-center gap-4 p-8 text-center">
            <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-primary text-on-primary shadow-[0_14px_30px_rgba(16,124,65,0.2)]">
              <DeviceIcon className="h-9 w-9" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                {item.clientIndustry ?? "Project"}
              </p>
              <p className="mt-2 text-xl font-bold text-on-background">{item.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Featured Card ─────────────────────────────────────────────────────────────
function FeaturedCard({ item }: { item: PortfolioItem }) {
  const year = getCompletedYear(item.completedAt);
  const clientLabel = getClientLabel(item);
  const hostname = item.liveUrl
    ? new URL(item.liveUrl).hostname.replace(/^www\./, "")
    : `${item.slug}.case-study`;

  return (
    <article className="overflow-hidden rounded-4xl border border-outline-variant/60 bg-surface-container-lowest shadow-[0_18px_48px_rgba(19,33,24,0.08)]">
      <div className="grid gap-0 lg:min-h-128 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)]">
        <div className="relative overflow-hidden border-outline-variant/50 bg-linear-to-br from-[#EFF7F0] via-[#E5F1E8] to-[#DCEDE2] px-5 py-5 sm:px-7 sm:py-7 lg:border-r lg:px-8 lg:py-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,124,65,0.14),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.82),transparent_32%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-primary" />
                Featured Project
              </span>
              {year ? <span>{year}</span> : null}
            </div>

            <div className="mt-6">
              <PreviewFrame item={item} hostname={hostname} width={1600} className="mt-0" />
            </div>

            {item.techStack && item.techStack.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech.name}
                    className="rounded-full border border-outline-variant/45 bg-white/70 px-3 py-1 text-xs font-semibold text-on-surface-variant backdrop-blur-sm"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {item.clientIndustry ? (
                <span className="inline-flex items-center rounded-full border border-outline-variant/60 bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
                  {item.clientIndustry}
                </span>
              ) : null}
              {clientLabel ? (
                <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${clientLabel.className}`}>
                  {clientLabel.icon ? <clientLabel.icon className="h-3.5 w-3.5" /> : null}
                  {clientLabel.text}
                </span>
              ) : null}
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-on-background sm:text-[2.2rem]">
              {item.title}
            </h2>

            <p className="mt-4 max-w-xl text-base leading-8 text-on-surface-variant">
              {item.tagline}
            </p>

            {item.results && item.results.length > 0 ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {item.results.slice(0, 3).map((result) => (
                  <div
                    key={result.label}
                    className="rounded-[1.4rem] bg-primary px-4 py-4 text-on-primary shadow-[0_14px_28px_rgba(16,124,65,0.16)]"
                  >
                    <p className="text-2xl font-bold leading-none">{result.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-on-primary/80">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {item.techStack && item.techStack.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2.5">
                {item.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech.name}
                    className="rounded-full border border-outline-variant/55 bg-surface px-3 py-1.5 text-sm font-medium text-on-surface-variant"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-outline-variant/45 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/work/${item.slug}`}
                className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-on-primary hover:bg-primary/90"
              >
                View Case Study
              </Link>
              {item.liveUrl ? (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full px-1 text-sm font-semibold text-on-surface-variant hover:text-on-background"
                >
                  Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80"
            >
              Browse full portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

// ── Regular Card ──────────────────────────────────────────────────────────────
function RegularCard({ item }: { item: PortfolioItem }) {
  const year = getCompletedYear(item.completedAt);
  const clientLabel = getClientLabel(item);
  const hostname = item.liveUrl
    ? new URL(item.liveUrl).hostname.replace(/^www\./, "")
    : `${item.slug}.case-study`;

  return (
    <article className="overflow-hidden rounded-[1.9rem] border border-outline-variant/60 bg-surface-container-lowest shadow-[0_16px_36px_rgba(19,33,24,0.07)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(19,33,24,0.1)]">
      <div className="relative overflow-hidden border-b border-outline-variant/45 bg-linear-to-br from-[#EFF7F0] via-[#E8F0EA] to-[#F6F1E7] p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,124,65,0.12),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.8),transparent_30%)]" />
        <div className="relative">
          <div className="mb-3 flex items-center justify-between gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
            <span>{item.clientIndustry ?? "Project"}</span>
            {year ? <span>{year}</span> : null}
          </div>
          <PreviewFrame item={item} hostname={hostname} width={1000} iconIndex={1} />
        </div>
      </div>

      <div className="flex h-full flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          {item.clientIndustry ? (
            <span className="inline-flex items-center rounded-full border border-outline-variant/60 bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
              {item.clientIndustry}
            </span>
          ) : null}
          {clientLabel ? (
            <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${clientLabel.className}`}>
              {clientLabel.icon ? <clientLabel.icon className="h-3.5 w-3.5" /> : null}
              {clientLabel.text}
            </span>
          ) : null}
        </div>

        <h3 className="text-[1.65rem] font-bold leading-tight text-on-background">
          {item.title}
        </h3>

        <p className="text-sm leading-7 text-on-surface-variant">
          {item.tagline}
        </p>

        {item.results && item.results.length > 0 ? (
          <div className="grid gap-2 sm:grid-cols-3">
            {item.results.slice(0, 3).map((result) => (
              <div
                key={result.label}
                className="rounded-3xl bg-primary px-4 py-3 text-on-primary shadow-[0_12px_24px_rgba(16,124,65,0.14)]"
              >
                <p className="text-xl font-bold leading-none">{result.value}</p>
                <p className="mt-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-on-primary/80">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {item.techStack && item.techStack.length > 0 ? (
          <div className="flex flex-wrap gap-2.5">
            {item.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech.name}
                className="rounded-full border border-outline-variant/55 bg-surface px-3 py-1.5 text-sm font-medium text-on-surface-variant"
              >
                {tech.name}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-outline-variant/40 pt-4">
          <Link
            href={`/work/${item.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
          >
            Read Case Study
            <ArrowRight className="h-4 w-4" />
          </Link>
          {item.liveUrl ? (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-on-surface-variant hover:text-on-background"
            >
              Live Site
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────
export default function PortfolioCard({ item, featured = false }: PortfolioCardProps) {
  if (featured) return <FeaturedCard item={item} />;
  return <RegularCard item={item} />;
}
