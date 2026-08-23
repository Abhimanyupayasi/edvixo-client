import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata: Metadata = {
  title: "Web Development Services | Edvixo",
  description:
    "Professional website and web development services from Edvixo.",
};

const services = [
  {
    title: "Website Development",
    description:
      "Professional, responsive websites designed for businesses and growth.",
    href: "/services/business-websites",
  },
  {
    title: "PHP Development",
    description:
      "Reliable PHP development for business applications and web platforms.",
    href: "/services/business-websites",
  },
  {
    title: "WordPress Development",
    description:
      "Flexible WordPress websites that are easy to manage and scale.",
    href: "/services/business-websites",
  },
  {
    title: "HTML Development",
    description:
      "Fast and responsive HTML-based websites with clean structure.",
    href: "/services/business-websites",
  },
  {
    title: "Angular Development",
    description:
      "Modern Angular applications built for performance and usability.",
    href: "/services/business-websites",
  },
];

export default function WebDevelopmentPage() {
  return (
    <ServiceCategoryPage
      category="Web Development"
      title="Web Development That Helps Businesses Grow"
      description="From business websites to modern web applications, we create fast, responsive and conversion-focused digital experiences."
      icon="web"
      services={services}
    />
  );
}