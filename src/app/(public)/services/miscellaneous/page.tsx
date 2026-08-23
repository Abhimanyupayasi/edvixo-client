import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata: Metadata = {
  title: "Digital & Technical Services | Edvixo",
  description:
    "Software development, digital marketing and technical support services from Edvixo.",
};

const services = [
  {
    title: "Software Development",
    description:
      "Custom software solutions designed around your business processes.",
    href: "/services/dashboards",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital strategies that help businesses reach customers and generate growth.",
    href: "/services/local-seo",
  },
  {
    title: "Technical Support",
    description:
      "Practical technical assistance to keep your digital products running smoothly.",
    href: "/contact",
  },
];

export default function MiscellaneousPage() {
  return (
    <ServiceCategoryPage
      category="Miscellaneous"
      title="Digital Support Beyond Development"
      description="From custom software to digital marketing and technical support, we help businesses solve the technology challenges that come next."
      icon="misc"
      services={services}
    />
  );
}