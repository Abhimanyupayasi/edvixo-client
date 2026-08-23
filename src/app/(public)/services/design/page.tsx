import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata: Metadata = {
  title: "Design Services | Edvixo",
  description:
    "UI/UX, graphic, web and product design services from Edvixo.",
};

const services = [
  {
    title: "UI/UX Design",
    description:
      "User-focused interfaces designed to make digital products simple and enjoyable.",
    href: "/contact",
  },
  {
    title: "Graphic Design",
    description:
      "Professional visual assets that create a consistent and memorable brand.",
    href: "/contact",
  },
  {
    title: "App Prototype",
    description:
      "Interactive product prototypes that help validate ideas before development.",
    href: "/contact",
  },
  {
    title: "Web Design",
    description:
      "Modern website designs focused on usability, trust and conversion.",
    href: "/services/website-redesign",
  },
];

export default function DesignPage() {
  return (
    <ServiceCategoryPage
      category="Design"
      title="Design Experiences People Remember"
      description="We create clean, modern and user-focused designs that make your brand look professional and your products easier to use."
      icon="design"
      services={services}
    />
  );
}