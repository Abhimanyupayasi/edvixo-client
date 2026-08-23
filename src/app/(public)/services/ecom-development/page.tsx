import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata: Metadata = {
  title: "E-Commerce Development Services | Edvixo",
  description:
    "Professional e-commerce development services for online businesses.",
};

const services = [
  {
    title: "E-Commerce Development",
    description:
      "Complete online stores designed to make shopping simple and increase conversions.",
    href: "/services/online-stores",
  },
  {
    title: "WooCommerce Development",
    description:
      "Powerful WooCommerce stores with flexible product and checkout experiences.",
    href: "/services/online-stores",
  },
  {
    title: "Magento Development",
    description:
      "Scalable Magento solutions for growing online businesses.",
    href: "/services/online-stores",
  },
  {
    title: "OpenCart Development",
    description:
      "Cost-effective OpenCart stores designed around your products and customers.",
    href: "/services/online-stores",
  },
];

export default function EcomDevelopmentPage() {
  return (
    <ServiceCategoryPage
      category="Ecom Development"
      title="E-Commerce Experiences Designed to Convert"
      description="Build a professional online store that makes it easier for customers to discover, trust and purchase your products."
      icon="ecom"
      services={services}
    />
  );
}