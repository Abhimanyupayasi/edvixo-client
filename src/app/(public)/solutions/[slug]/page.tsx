import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers3,
  Settings,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

type Solution = {
  slug: string;
  title: string;
  label: string;
  icon: any;
  heroTitle: string;
  description: string;
  overview: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
};

const solutions: Solution[] = [
  {
    slug: "custom-web-development",
    title: "Custom Web Development",
    label: "Web Development",
    icon: Globe,
    heroTitle: "Websites That Turn Visitors Into Customers",
    description:
      "Modern, responsive, and high-performing websites designed around your business goals.",
    overview:
      "A professional website is more than an online presence. It should communicate your value clearly, build trust, work smoothly on every device, and guide visitors toward taking action.",
    benefits: [
      "Professional digital presence",
      "Responsive across all devices",
      "SEO-friendly architecture",
      "Fast and performance-focused",
      "Easy to maintain and scale",
      "Conversion-focused user experience",
    ],
    features: [
      {
        title: "Responsive Design",
        description:
          "Your website works smoothly across mobile, tablet, laptop, and desktop screens.",
      },
      {
        title: "SEO-Friendly Structure",
        description:
          "Clean page structure and technical foundations that make your website easier to discover.",
      },
      {
        title: "Performance Optimisation",
        description:
          "Fast-loading pages designed to provide a better experience for your visitors.",
      },
      {
        title: "Conversion-Focused UX",
        description:
          "Clear content, calls to action, and user journeys designed around your business objectives.",
      },
    ],
  },

  {
    slug: "web-application-development",
    title: "Web Application Development",
    label: "Web Applications",
    icon: Code2,
    heroTitle: "Powerful Web Applications Built For Your Workflow",
    description:
      "Custom web applications that simplify operations and provide better digital experiences.",
    overview:
      "When a normal website is not enough, a web application can help automate business processes, manage information, connect systems, and provide users with powerful functionality.",
    benefits: [
      "Custom business workflows",
      "Secure authentication",
      "Database-driven applications",
      "API integrations",
      "Scalable architecture",
      "Role-based access",
    ],
    features: [
      {
        title: "Custom Functionality",
        description:
          "Features are designed around the actual requirements of your business instead of forcing your workflow into a generic platform.",
      },
      {
        title: "Secure Authentication",
        description:
          "User authentication and access control can be built according to your application requirements.",
      },
      {
        title: "API Integration",
        description:
          "Connect your application with external services, platforms, payment systems, or internal tools.",
      },
      {
        title: "Scalable Architecture",
        description:
          "The application can be structured so that new features can be added as your business grows.",
      },
    ],
  },

  {
    slug: "business-automation",
    title: "Business Automation",
    label: "Automation",
    icon: Bot,
    heroTitle: "Automate Repetitive Work And Save Time",
    description:
      "Smart business automation that reduces manual tasks and connects your digital workflow.",
    overview:
      "Many businesses spend valuable time repeating the same tasks every day. Automation can reduce unnecessary manual work and create more consistent processes.",
    benefits: [
      "Reduce repetitive tasks",
      "Improve workflow efficiency",
      "Automated notifications",
      "Connect multiple systems",
      "Reduce manual errors",
      "Save employee time",
    ],
    features: [
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive processes that currently require manual intervention.",
      },
      {
        title: "Notifications & Alerts",
        description:
          "Send useful notifications when important events or business actions occur.",
      },
      {
        title: "System Integration",
        description:
          "Connect different tools and services so information can move between them more efficiently.",
      },
      {
        title: "Process Optimisation",
        description:
          "Analyse the existing workflow and identify opportunities to simplify and automate it.",
      },
    ],
  },

  {
    slug: "business-dashboards",
    title: "Business Dashboards",
    label: "Business Intelligence",
    icon: BarChart3,
    heroTitle: "See Your Business Data In One Place",
    description:
      "Clear dashboards that help you monitor sales, operations, inventory, and performance.",
    overview:
      "Business information is often spread across spreadsheets, applications, and different systems. A central dashboard can bring important information together and make it easier to understand.",
    benefits: [
      "Centralised business data",
      "Sales and revenue tracking",
      "Visual performance reports",
      "Inventory monitoring",
      "Operational insights",
      "Better decision making",
    ],
    features: [
      {
        title: "Revenue Tracking",
        description:
          "Monitor important sales and revenue information through a simple visual interface.",
      },
      {
        title: "Performance Charts",
        description:
          "Convert raw business information into easy-to-understand charts and metrics.",
      },
      {
        title: "Inventory Monitoring",
        description:
          "Track stock information and identify important inventory changes.",
      },
      {
        title: "Business Reports",
        description:
          "Present important business information in structured reports that are easier to analyse.",
      },
    ],
  },

  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    label: "Cloud & Infrastructure",
    icon: Cloud,
    heroTitle: "Reliable Cloud Infrastructure For Modern Applications",
    description:
      "Scalable cloud solutions designed for application deployment, reliability, and performance.",
    overview:
      "Modern applications need reliable infrastructure to run smoothly. Cloud solutions provide flexible environments where applications, databases, and services can be deployed and managed.",
    benefits: [
      "Scalable infrastructure",
      "Reliable application hosting",
      "Cloud deployment",
      "Database configuration",
      "Performance optimisation",
      "Flexible infrastructure",
    ],
    features: [
      {
        title: "Application Deployment",
        description:
          "Deploy modern applications to suitable cloud environments and keep them accessible to users.",
      },
      {
        title: "Cloud Hosting",
        description:
          "Use cloud infrastructure that can scale according to the needs of the application.",
      },
      {
        title: "Database Setup",
        description:
          "Configure and connect application databases according to the project requirements.",
      },
      {
        title: "Performance Optimisation",
        description:
          "Identify infrastructure bottlenecks and improve application performance where required.",
      },
    ],
  },

  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    label: "Support & Maintenance",
    icon: Settings,
    heroTitle: "Keep Your Digital Product Running Smoothly",
    description:
      "Ongoing technical support, updates, monitoring, and improvements after launch.",
    overview:
      "Launching a website or application is only the beginning. Regular maintenance helps keep your digital product secure, updated, reliable, and ready for future improvements.",
    benefits: [
      "Bug fixing",
      "Security updates",
      "Performance monitoring",
      "Technical support",
      "Feature improvements",
      "Ongoing maintenance",
    ],
    features: [
      {
        title: "Bug Fixing",
        description:
          "Identify and resolve issues that affect the functionality or user experience of your website or application.",
      },
      {
        title: "Security Updates",
        description:
          "Keep project dependencies and important technical components updated where required.",
      },
      {
        title: "Performance Monitoring",
        description:
          "Monitor the application and identify areas where performance can be improved.",
      },
      {
        title: "Technical Support",
        description:
          "Get ongoing assistance when technical issues or new requirements appear.",
      },
    ],
  },
];

function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: `${solution.title} | Edvixo`,
    description: solution.description,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return (
      <main className="min-h-screen bg-background px-4 py-24 text-on-background">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            404
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Solution Not Found
          </h1>

          <p className="mt-4 text-on-surface-variant">
            The solution you are looking for does not exist.
          </p>

          <Link
            href="/solutions"
            className="mt-8 inline-flex items-center gap-2 rounded-shape-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Solutions
          </Link>
        </div>
      </main>
    );
  }

  const Icon = solution.icon;

  return (
    <main className="bg-background text-on-background">

      {/* HERO */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          {/* BREADCRUMB */}
          <nav className="mb-10 flex items-center gap-2 text-sm text-on-surface-variant">
            <Link
              href="/solutions"
              className="transition-colors hover:text-primary"
            >
              Solutions
            </Link>

            <span>/</span>

            <span className="font-medium text-on-background">
              {solution.title}
            </span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-shape-full bg-secondary-container px-4 py-2 text-sm font-semibold text-on-secondary-container">
                <Icon className="h-4 w-4" />
                {solution.label}
              </div>

              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {solution.heroTitle}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-on-surface-variant md:text-lg">
                {solution.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-shape-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
                >
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 rounded-shape-full border border-outline-variant bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface-container"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All Solutions
                </Link>

              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="flex justify-center">
              <div className="relative flex h-80 w-full max-w-md items-center justify-center overflow-hidden rounded-shape-md border border-outline-variant bg-surface shadow-lg">

                <div className="absolute h-64 w-64 rounded-full border border-primary/20" />

                <div className="absolute h-48 w-48 rounded-full border border-primary/20" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary-container text-on-primary-container shadow-lg">
                  <Icon className="h-12 w-12" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">

          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            OVERVIEW
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Built Around Your Business
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
            {solution.overview}
          </p>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-surface-container-low py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              BENEFITS
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              What You Get
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {solution.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-shape-md border border-outline-variant bg-surface p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <span className="text-sm font-medium">
                  {benefit}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              FEATURES
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Everything You Need
            </h2>

            <p className="mt-4 text-on-surface-variant">
              The solution can be adapted to your exact business requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {solution.features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-shape-md border border-outline-variant bg-surface p-7"
              >

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-shape-md bg-primary-container text-on-primary-container">
                  {index === 0 && <Zap className="h-5 w-5" />}
                  {index === 1 && <Layers3 className="h-5 w-5" />}
                  {index === 2 && <Database className="h-5 w-5" />}
                  {index === 3 && <Smartphone className="h-5 w-5" />}
                </div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-container-low py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              OUR PROCESS
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              From Idea To Solution
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-shape-md border border-outline-variant bg-surface p-6">
              <span className="text-sm font-bold text-primary">
                01
              </span>

              <h3 className="mt-4 font-bold">
                Understand
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                We understand your business, requirements, users, and goals.
              </p>
            </div>

            <div className="rounded-shape-md border border-outline-variant bg-surface p-6">
              <span className="text-sm font-bold text-primary">
                02
              </span>

              <h3 className="mt-4 font-bold">
                Build
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                We design and develop the solution around the agreed
                requirements.
              </p>
            </div>

            <div className="rounded-shape-md border border-outline-variant bg-surface p-6">
              <span className="text-sm font-bold text-primary">
                03
              </span>

              <h3 className="mt-4 font-bold">
                Improve
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                We test, optimise, launch, and continue improving the
                solution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <Sparkles className="mx-auto h-8 w-8 text-white" />

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Ready To Build Your Solution?
          </h2>

          <p className="mt-4 leading-relaxed text-primary-container">
            Tell us about your business requirement and let's discuss the
            right approach for your project.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-shape-full bg-white px-7 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </section>

    </main>
  );
}