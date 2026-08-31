import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Settings,
  Sparkles,
  Workflow,
  Rocket,
  Users,
  ShieldCheck,
  GitBranch,
  Monitor,
  Wrench,
  LockKeyhole,
  RefreshCw,
  Lightbulb,
  Layers3,
  Database,
  Server,
  Zap,
  ArrowDown,
  ArrowRightLeft,
} from "lucide-react";

import solutions from "@/data/solutions.json";

export const metadata: Metadata = {
  title: "Solutions - Edvixo Digital Solutions",
  description:
    "Explore Edvixo digital solutions including dedicated developers, startup product development, business automation, cloud and DevOps, maintenance, and digital transformation.",
};

/* =========================================================
   SOLUTION ICONS
========================================================= */

const icons = {
  "hire-dedicated-developers": BriefcaseBusiness,
  "startup-product-development": Code2,
  "business-automation": Bot,
  "cloud-devops-solutions": Cloud,
  "maintenance-support": Settings,
  "digital-transformation": Workflow,
} as const;

/* =========================================================
   ACCENTS
========================================================= */

const accentColors = [
  {
    icon: "text-[#ff8b2c]",
    glow: "bg-[#ff8b2c]/10",
    border: "hover:border-[#ff8b2c]/40",
    shadow:
      "hover:shadow-[0_20px_60px_rgba(255,139,44,0.12)]",
    line: "bg-[#ff8b2c]",
  },
  {
    icon: "text-cyan-400",
    glow: "bg-cyan-400/10",
    border: "hover:border-cyan-400/40",
    shadow:
      "hover:shadow-[0_20px_60px_rgba(34,211,238,0.10)]",
    line: "bg-cyan-400",
  },
  {
    icon: "text-violet-400",
    glow: "bg-violet-400/10",
    border: "hover:border-violet-400/40",
    shadow:
      "hover:shadow-[0_20px_60px_rgba(167,139,250,0.10)]",
    line: "bg-violet-400",
  },
  {
    icon: "text-emerald-400",
    glow: "bg-emerald-400/10",
    border: "hover:border-emerald-400/40",
    shadow:
      "hover:shadow-[0_20px_60px_rgba(52,211,153,0.10)]",
    line: "bg-emerald-400",
  },
  {
    icon: "text-pink-400",
    glow: "bg-pink-400/10",
    border: "hover:border-pink-400/40",
    shadow:
      "hover:shadow-[0_20px_60px_rgba(244,114,182,0.10)]",
    line: "bg-pink-400",
  },
  {
    icon: "text-amber-400",
    glow: "bg-amber-400/10",
    border: "hover:border-amber-400/40",
    shadow:
      "hover:shadow-[0_20px_60px_rgba(251,191,36,0.10)]",
    line: "bg-amber-400",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function SolutionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-on-background">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-surface-container-low py-20 md:py-28 lg:py-32">

        {/* Background glow */}

        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[110px]" />

        {/* Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-shape-full border border-outline-variant bg-secondary-container px-4 py-2 text-sm font-semibold text-on-secondary-container">

              <Sparkles className="h-4 w-4 text-primary" />

              <span>Digital Solutions</span>

            </div>

            {/* Heading */}

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">

              Solutions Built Around

              <span className="block text-primary">
                Your Business
              </span>

            </h1>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">

              From product development and dedicated teams to automation,
              cloud infrastructure, support and digital transformation,
              we build practical technology solutions around real business
              requirements.

            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap justify-center gap-3">

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-shape-full
                  bg-primary
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-on-primary
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                Discuss Your Project

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

              </Link>

              <Link
                href="/portfolio"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-shape-full
                  border
                  border-outline-variant
                  bg-surface
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-surface-container
                "
              >

                View Our Work

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="relative py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          {/* Section heading */}

          <div className="mb-14 max-w-3xl">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              WHAT WE OFFER
            </p>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
              Technology for Different Business Needs
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-on-surface-variant">
              Different challenges need different approaches. Explore the
              solution that matches what your business is trying to build,
              improve or change.
            </p>

          </div>


          {/* =================================================
              SOLUTION GRID
          ================================================= */}

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            {Object.entries(solutions).map(
              ([slug, solution], index) => {

                const Icon =
                  icons[slug as keyof typeof icons] ?? Code2;

                const accent =
                  accentColors[index % accentColors.length];

                return (
                  <Link
                    key={slug}
                    href={`/solutions/${slug}`}
                    className={`
                      group
                      relative
                      flex
                      min-h-[540px]
                      flex-col
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-outline-variant
                      bg-surface
                      p-6
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      ${accent.border}
                      ${accent.shadow}
                      md:p-8
                    `}
                  >

                    {/* Background glow */}

                    <div
                      className={`
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-64
                        w-64
                        rounded-full
                        ${accent.glow}
                        opacity-0
                        blur-3xl
                        transition-all
                        duration-700
                        group-hover:scale-150
                        group-hover:opacity-100
                      `}
                    />


                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div className="relative flex items-start justify-between">

                      <div className="flex items-center gap-4">

                        <div
                          className={`
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-surface-container
                            ${accent.icon}
                            transition-all
                            duration-500
                            group-hover:scale-110
                          `}
                        >

                          <Icon className="h-7 w-7" />

                        </div>

                        <div>

                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                            Solution
                          </p>

                          <h3 className="mt-1 text-xl font-black">
                            {solution.title}
                          </h3>

                        </div>

                      </div>


                      <span className="text-xs font-black tracking-[0.2em] text-on-surface-variant/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>


                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p className="relative mt-6 max-w-xl leading-7 text-on-surface-variant">
                      {solution.heroDescription}
                    </p>


                    {/* =================================================
                        TOPIC-SPECIFIC VISUAL
                    ================================================= */}

                    <div className="relative mt-7">

                      {slug === "hire-dedicated-developers" && (
                        <DeveloperTeamVisual
                          accent={accent.icon}
                        />
                      )}

                      {slug === "startup-product-development" && (
                        <StartupProductVisual
                          accent={accent.icon}
                        />
                      )}

                      {slug === "business-automation" && (
                        <AutomationVisual
                          accent={accent.icon}
                        />
                      )}

                      {slug === "cloud-devops-solutions" && (
                        <CloudVisual
                          accent={accent.icon}
                        />
                      )}

                      {slug === "maintenance-support" && (
                        <SupportVisual
                          accent={accent.icon}
                        />
                      )}

                      {slug === "digital-transformation" && (
                        <TransformationVisual
                          accent={accent.icon}
                        />
                      )}

                    </div>


                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div className="relative mt-7 grid gap-5 sm:grid-cols-2">

                      {/* Who it's for */}

                      <div>

                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                          BEST FOR
                        </p>

                        <div className="flex flex-wrap gap-2">

                          {solution.whoItsFor
                            .slice(0, 3)
                            .map((item) => (
                              <span
                                key={item}
                                className="
                                  rounded-full
                                  border
                                  border-outline-variant
                                  bg-surface-container
                                  px-3
                                  py-1.5
                                  text-[11px]
                                  font-medium
                                  text-on-surface-variant
                                "
                              >
                                {item}
                              </span>
                            ))}

                        </div>

                      </div>


                      {/* Capabilities */}

                      <div>

                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                          CAPABILITIES
                        </p>

                        <div className="space-y-2">

                          {solution.features
                            .slice(0, 2)
                            .map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-2 text-xs text-on-surface-variant"
                              >

                                <CheckCircle2
                                  className={`
                                    mt-0.5
                                    h-3.5
                                    w-3.5
                                    shrink-0
                                    ${accent.icon}
                                  `}
                                />

                                <span>{feature}</span>

                              </div>
                            ))}

                        </div>

                      </div>

                    </div>


                    {/* =================================================
                        CTA
                    ================================================= */}

                    <div className="relative mt-auto pt-8">

                      <div
                        className={`
                          flex
                          items-center
                          justify-between
                          border-t
                          border-outline-variant
                          pt-5
                          text-sm
                          font-bold
                          ${accent.icon}
                        `}
                      >

                        <span>
                          Explore Solution
                        </span>

                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-current
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                            group-hover:bg-current
                            group-hover:text-background
                          "
                        >

                          <ArrowRight className="h-4 w-4" />

                        </span>

                      </div>

                    </div>

                  </Link>
                );
              },
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-primary py-20 md:py-28">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">

          <Sparkles className="mx-auto h-8 w-8 text-white/80" />

          <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
            Not Sure Which Solution You Need?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-primary-container">
            Tell us about your business challenge and we can help identify
            the right digital approach.
          </p>

          <Link
            href="/contact"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-shape-full
              bg-white
              px-7
              py-3.5
              text-sm
              font-bold
              text-primary
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >

            Get a Free Consultation

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

          </Link>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   01 — DEDICATED DEVELOPERS
   STRUCTURE:
   PEOPLE → SKILLS → COLLABORATION
========================================================= */

function DeveloperTeamVisual({
  accent,
}: {
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Users className={`h-4 w-4 ${accent}`} />

          <span className="text-xs font-bold">
            DEVELOPMENT TEAM
          </span>

        </div>

        <span className={`text-[10px] font-bold ${accent}`}>
          COLLABORATE
        </span>

      </div>


      <div className="mt-5 grid grid-cols-3 gap-3">

        <TeamRole
          icon={<Code2 className="h-4 w-4" />}
          title="Frontend"
          text="Interfaces"
          accent={accent}
        />

        <TeamRole
          icon={<Server className="h-4 w-4" />}
          title="Backend"
          text="Systems"
          accent={accent}
        />

        <TeamRole
          icon={<GitBranch className="h-4 w-4" />}
          title="Integration"
          text="Connect"
          accent={accent}
        />

      </div>


      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-on-surface-variant">

        <span className="h-px flex-1 bg-outline-variant" />

        <span className="rounded-full border border-outline-variant px-3 py-1">
          Your Product
        </span>

        <span className="h-px flex-1 bg-outline-variant" />

      </div>

    </div>
  );
}


/* =========================================================
   02 — STARTUP PRODUCT
   STRUCTURE:
   IDEA → DESIGN → BUILD → LAUNCH
========================================================= */

function StartupProductVisual({
  accent,
}: {
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Lightbulb className={`h-4 w-4 ${accent}`} />

          <span className="text-xs font-bold">
            PRODUCT JOURNEY
          </span>

        </div>

        <Rocket className={`h-4 w-4 ${accent}`} />

      </div>


      <div className="mt-6 flex items-center justify-between gap-2">

        <ProductStep
          number="01"
          title="Idea"
          icon={<Lightbulb className="h-4 w-4" />}
          accent={accent}
        />

        <ArrowRight className={`h-4 w-4 shrink-0 ${accent}`} />

        <ProductStep
          number="02"
          title="Design"
          icon={<Layers3 className="h-4 w-4" />}
          accent={accent}
        />

        <ArrowRight className={`h-4 w-4 shrink-0 ${accent}`} />

        <ProductStep
          number="03"
          title="Build"
          icon={<Code2 className="h-4 w-4" />}
          accent={accent}
        />

        <ArrowRight className={`h-4 w-4 shrink-0 ${accent}`} />

        <ProductStep
          number="04"
          title="Launch"
          icon={<Rocket className="h-4 w-4" />}
          accent={accent}
        />

      </div>

    </div>
  );
}


/* =========================================================
   03 — BUSINESS AUTOMATION
   STRUCTURE:
   TRIGGER → WORKFLOW → ACTION
========================================================= */

function AutomationVisual({
  accent,
}: {
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5">

      <div className="flex items-center gap-2">

        <Bot className={`h-4 w-4 ${accent}`} />

        <span className="text-xs font-bold">
          AUTOMATED WORKFLOW
        </span>

      </div>


      <div className="mt-6 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">

        <WorkflowNode
          icon={<Zap className="h-4 w-4" />}
          title="Trigger"
          text="Event starts"
          accent={accent}
        />

        <ArrowRight className={`h-4 w-4 ${accent}`} />

        <WorkflowNode
          icon={<Workflow className="h-4 w-4" />}
          title="Workflow"
          text="Rules run"
          accent={accent}
        />

        <ArrowRight className={`h-4 w-4 ${accent}`} />

        <WorkflowNode
          icon={<CheckCircle2 className="h-4 w-4" />}
          title="Action"
          text="Task completed"
          accent={accent}
        />

      </div>


      <div className="mt-5 rounded-xl border border-dashed border-outline-variant px-4 py-3 text-center text-[10px] text-on-surface-variant">

        Less repetitive work • More consistent processes

      </div>

    </div>
  );
}


/* =========================================================
   04 — CLOUD & DEVOPS
   STRUCTURE:
   CODE → BUILD → DEPLOY → MONITOR
========================================================= */

function CloudVisual({
  accent,
}: {
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Cloud className={`h-4 w-4 ${accent}`} />

          <span className="text-xs font-bold">
            CLOUD DELIVERY
          </span>

        </div>

        <span className="text-[10px] text-on-surface-variant">
          DEPLOYMENT FLOW
        </span>

      </div>


      <div className="mt-6 grid grid-cols-4 gap-2">

        <CloudNode
          icon={<Code2 className="h-4 w-4" />}
          title="Code"
          accent={accent}
        />

        <CloudNode
          icon={<GitBranch className="h-4 w-4" />}
          title="Build"
          accent={accent}
        />

        <CloudNode
          icon={<Cloud className="h-4 w-4" />}
          title="Deploy"
          accent={accent}
        />

        <CloudNode
          icon={<Monitor className="h-4 w-4" />}
          title="Monitor"
          accent={accent}
        />

      </div>


      <div className="mt-4 flex items-center justify-center gap-2">

        <span className="h-px flex-1 bg-outline-variant" />

        <Database className={`h-4 w-4 ${accent}`} />

        <span className="h-px flex-1 bg-outline-variant" />

      </div>

    </div>
  );
}


/* =========================================================
   05 — MAINTENANCE & SUPPORT
   STRUCTURE:
   MONITOR → MAINTAIN → UPDATE → SECURE
========================================================= */

function SupportVisual({
  accent,
}: {
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <ShieldCheck className={`h-4 w-4 ${accent}`} />

          <span className="text-xs font-bold">
            SYSTEM CARE
          </span>

        </div>

        <span className={`text-[10px] font-bold ${accent}`}>
          ONGOING
        </span>

      </div>


      <div className="mt-5 space-y-2">

        <SupportRow
          icon={<Monitor className="h-4 w-4" />}
          title="Monitor"
          text="Watch system health"
          accent={accent}
        />

        <SupportRow
          icon={<Wrench className="h-4 w-4" />}
          title="Maintain"
          text="Keep systems working"
          accent={accent}
        />

        <SupportRow
          icon={<RefreshCw className="h-4 w-4" />}
          title="Update"
          text="Keep technology current"
          accent={accent}
        />

        <SupportRow
          icon={<LockKeyhole className="h-4 w-4" />}
          title="Secure"
          text="Protect digital systems"
          accent={accent}
        />

      </div>

    </div>
  );
}


/* =========================================================
   06 — DIGITAL TRANSFORMATION
   STRUCTURE:
   CURRENT → DIGITAL → AUTOMATED → SCALABLE
========================================================= */

function TransformationVisual({
  accent,
}: {
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Workflow className={`h-4 w-4 ${accent}`} />

          <span className="text-xs font-bold">
            TRANSFORMATION PATH
          </span>

        </div>

        <ArrowRightLeft className={`h-4 w-4 ${accent}`} />

      </div>


      <div className="mt-6 space-y-2">

        <TransformRow
          number="01"
          title="Current"
          text="Understand existing processes"
          accent={accent}
        />

        <TransformConnector accent={accent} />

        <TransformRow
          number="02"
          title="Digital"
          text="Move processes into digital workflows"
          accent={accent}
        />

        <TransformConnector accent={accent} />

        <TransformRow
          number="03"
          title="Automated"
          text="Reduce repetitive manual work"
          accent={accent}
        />

        <TransformConnector accent={accent} />

        <TransformRow
          number="04"
          title="Scalable"
          text="Create a foundation for growth"
          accent={accent}
        />

      </div>

    </div>
  );
}


/* =========================================================
   SMALL VISUAL COMPONENTS
========================================================= */

function TeamRole({
  icon,
  title,
  text,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface p-3">

      <div className={`mb-3 ${accent}`}>
        {icon}
      </div>

      <p className="text-xs font-bold">
        {title}
      </p>

      <p className="mt-1 text-[10px] text-on-surface-variant">
        {text}
      </p>

    </div>
  );
}


function ProductStep({
  number,
  title,
  icon,
  accent,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <div className="min-w-0 flex-1">

      <div
        className={`
          flex
          aspect-square
          items-center
          justify-center
          rounded-xl
          border
          border-outline-variant
          bg-surface
          ${accent}
        `}
      >
        {icon}
      </div>

      <div className="mt-2 text-center">

        <span className={`text-[8px] font-bold ${accent}`}>
          {number}
        </span>

        <p className="mt-0.5 truncate text-[10px] font-bold">
          {title}
        </p>

      </div>

    </div>
  );
}


function WorkflowNode({
  icon,
  title,
  text,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface p-3 text-center">

      <div className={`mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container ${accent}`}>
        {icon}
      </div>

      <p className="mt-2 text-[10px] font-bold">
        {title}
      </p>

      <p className="mt-1 text-[8px] text-on-surface-variant">
        {text}
      </p>

    </div>
  );
}


function CloudNode({
  icon,
  title,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  accent: string;
}) {
  return (
    <div className="relative rounded-xl border border-outline-variant bg-surface p-3 text-center">

      <div className={`mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container ${accent}`}>
        {icon}
      </div>

      <p className="mt-2 text-[10px] font-bold">
        {title}
      </p>

    </div>
  );
}


function SupportRow({
  icon,
  title,
  text,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-outline-variant bg-surface p-3">

      <div
        className={`
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-surface-container
          ${accent}
        `}
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-xs font-bold">
          {title}
        </p>

        <p className="truncate text-[9px] text-on-surface-variant">
          {text}
        </p>

      </div>

      <CheckCircle2
        className={`ml-auto h-4 w-4 shrink-0 ${accent}`}
      />

    </div>
  );
}


function TransformRow({
  number,
  title,
  text,
  accent,
}: {
  number: string;
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-outline-variant bg-surface p-3">

      <span
        className={`
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-surface-container
          text-[9px]
          font-black
          ${accent}
        `}
      >
        {number}
      </span>

      <div>

        <p className="text-xs font-bold">
          {title}
        </p>

        <p className="mt-0.5 text-[9px] text-on-surface-variant">
          {text}
        </p>

      </div>

    </div>
  );
}


function TransformConnector({
  accent,
}: {
  accent: string;
}) {
  return (
    <div className="flex h-3 items-center pl-3.5">

      <ArrowDown className={`h-3 w-3 ${accent}`} />

    </div>
  );
}