import { notFound } from "next/navigation";
import type { Metadata } from "next";

import portfolio from "@/data/portfolio.json";
import PortfolioDetail from "@/components/portfolio/PortfolioDetail";
import { SITE_URL } from "@/lib/site";

type PortfolioSlug = keyof typeof portfolio;

export function generateStaticParams() {
  return Object.keys(portfolio).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const item = portfolio[slug as PortfolioSlug];

  if (!item) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${item.title} - Edvixo Case Study`,
    description: item.tagline,
    alternates: {
      canonical: `${SITE_URL}/portfolio/${item.slug}`,
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = portfolio[slug as PortfolioSlug];

  if (!item) {
    notFound();
  }

  return <PortfolioDetail item={item} />;
}