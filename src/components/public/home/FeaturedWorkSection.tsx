import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ExternalLink,
  Monitor,
  Shield,
  Smartphone,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FeaturedProject = {
  _id?: string;
  clientName?: string;
  isClientConfidential?: boolean;
  industry: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  slug: string;
  liveUrl?: string;
  coverImage?: string;
  thumbnailImage?: string;
  imageAlt?: string;
  completedAt?: string;
  imageLeft?: boolean;
  DeviceIcon?: LucideIcon;
  imageBg?: string;
};

type FeaturedWorkSectionProps = {
  projects?: FeaturedProject[];
};

const DEVICE_ICONS: LucideIcon[] = [Monitor, Smartphone, BookOpen];
const IMAGE_BACKGROUNDS = [
  "from-[#EFF7F0] via-[#E5F1E8] to-[#DCEDE2]",
  "from-[#F6F2EA] via-[#EEF4EC] to-[#DFEEE6]",
  "from-[#EDF6F4] via-[#E3F0E9] to-[#F3EFE5]",
];

function getOptimizedCloudinaryUrl(url?: string, width = 1200) {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }

  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,dpr_auto,c_limit,w_${width}/`
  );
}

function getCompletedYear(date?: string) {
  if (!date) return null;

  const year = new Date(date).getFullYear();
  return Number.isFinite(year) ? year : null;
}

export function FeaturedWorkSection({ projects = [] }: FeaturedWorkSectionProps) {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-medium text-primary uppercase tracking-widest mb-2">
              RECENT WORK
            </p>
            <h2 className="text-headline-large text-on-background font-bold leading-tight">
              Results for Real Businesses
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-on-surface-variant">
              Featured case studies with the same public details visible on the full work page, rebuilt as cleaner
              homepage banners.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden sm:inline-flex border-outline-variant text-on-background hover:bg-surface-container rounded-shape-sm h-10 px-5 label-large"
          >
            <Link 
              href="/work"
              title="View all web development portfolio projects and case studies"
            >
              See All Projects →
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => {
            const DeviceIcon = project.DeviceIcon ?? DEVICE_ICONS[index % DEVICE_ICONS.length];
            const imageBg = project.imageBg ?? IMAGE_BACKGROUNDS[index % IMAGE_BACKGROUNDS.length];
            const imageLeft =
              typeof project.imageLeft === "boolean" ? project.imageLeft : index % 2 === 0;
            const completedYear = getCompletedYear(project.completedAt);
            const projectPreview = getOptimizedCloudinaryUrl(
              project.coverImage ?? project.thumbnailImage,
              1400
            );

            return (
              <article
                key={project._id ?? project.slug}
                className={`overflow-hidden rounded-4xl border border-outline-variant/60 bg-surface-container-lowest shadow-[0_18px_48px_rgba(19,33,24,0.08)] ${
                  !imageLeft ? "" : ""
                }`}
              >
                <div
                  className={`grid gap-0 lg:min-h-128 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] ${
                    imageLeft ? "" : "lg:grid-cols-[minmax(22rem,0.92fr)_minmax(0,1.08fr)]"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden border-outline-variant/50 bg-linear-to-br ${imageBg} px-5 py-5 sm:px-7 sm:py-7 lg:px-8 lg:py-8 ${
                      imageLeft ? "lg:border-r" : "lg:order-2 lg:border-l"
                    }`}
                  >
                    <div className="absolute inset-0 bg-surface-container-lowest" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
                        <span>Featured Project {String(index + 1).padStart(2, "0")}</span>
                        {completedYear ? <span>{completedYear}</span> : null}
                      </div>

                      {projectPreview ? (
                        <div className="relative mt-6 overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#121714] shadow-[0_22px_48px_rgba(10,16,13,0.24)]">
                          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#06D6A0]" />
                            <span className="ml-3 truncate rounded-full bg-white/8 px-3 py-1 text-[0.66rem] font-medium tracking-[0.18em] text-white/75">
                              {project.liveUrl ? new URL(project.liveUrl).hostname.replace(/^www\./, "") : `${project.slug}.case-study`}
                            </span>
                          </div>
                          <div className="relative aspect-16/10 overflow-hidden bg-[#0F1410]">
                            <Image
                              src={projectPreview}
                              alt={project.imageAlt ?? project.title}
                              fill
                              loading={index === 0 ? "eager" : "lazy"}
                              fetchPriority={index === 0 ? "high" : undefined}
                              className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                              sizes="(max-width: 1024px) 100vw, 56vw"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative mt-6 flex aspect-16/10 items-center justify-center overflow-hidden rounded-[1.6rem] border border-outline-variant/40 bg-surface/85 shadow-[0_18px_44px_rgba(18,23,20,0.1)]">
                          <div className="flex flex-col items-center gap-4 p-8 text-center">
                            <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-primary text-on-primary shadow-[0_14px_30px_rgba(16,124,65,0.2)]">
                              <DeviceIcon className="h-9 w-9" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                                {project.industry}
                              </p>
                              <p className="mt-2 text-xl font-bold text-on-background">{project.title}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-outline-variant/45 bg-white/70 px-3 py-1 text-xs font-semibold text-on-surface-variant backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`flex flex-col justify-between p-6 sm:p-8 lg:p-10 ${imageLeft ? "" : "lg:order-1"}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-full border border-outline-variant/60 bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
                          {project.industry}
                        </span>
                        {project.isClientConfidential ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-surface-container px-3 py-1 text-xs font-semibold text-on-surface-variant">
                            <Shield className="h-3.5 w-3.5" />
                            Confidential Client
                          </span>
                        ) : project.clientName ? (
                          <span className="inline-flex items-center rounded-full bg-primary-container px-3 py-1 text-xs font-semibold text-on-primary-container">
                            {project.clientName}
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-5 text-3xl font-bold leading-tight text-on-background sm:text-[2.2rem]">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-base leading-8 text-on-surface-variant">
                        {project.description}
                      </p>

                      {project.metrics.length > 0 ? (
                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                          {project.metrics.map(({ value, label }) => (
                            <div
                              key={label}
                              className="rounded-[1.4rem] bg-primary px-4 py-4 text-on-primary shadow-[0_14px_28px_rgba(16,124,65,0.16)]"
                            >
                              <p className="text-2xl font-bold leading-none">{value}</p>
                              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-on-primary/80">
                                {label}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {project.tech.length > 0 ? (
                        <div className="mt-6 flex flex-wrap gap-2.5">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-outline-variant/55 bg-surface px-3 py-1.5 text-sm font-medium text-on-surface-variant"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-8 flex flex-col gap-4 border-t border-outline-variant/45 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap items-center gap-3">
                        <Button
                          asChild
                          className="h-11 rounded-full bg-primary px-6 text-sm font-semibold text-on-primary hover:bg-primary/90"
                        >
                          <Link
                            href={`/work/${project.slug}`}
                            title={`View ${project.title} case study - Web development project by Sapnendra`}
                          >
                            View Case Study
                          </Link>
                        </Button>

                        {project.liveUrl ? (
                          <Button
                            asChild
                            variant="ghost"
                            className="h-11 rounded-full px-1 text-sm font-semibold text-on-surface-variant hover:bg-transparent hover:text-on-background"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`Visit ${project.title} live website`}
                              className="inline-flex items-center gap-1.5"
                            >
                              Live Site
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
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
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 flex sm:hidden justify-center">
          <Button
            asChild
            variant="outline"
            className="border-outline-variant text-on-background hover:bg-surface-container rounded-shape-sm h-10 px-5 label-large"
          >
            <Link 
              href="/work"
              title="View all web development projects"
            >
              See All Projects →
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
