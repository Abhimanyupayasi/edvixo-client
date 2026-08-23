import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata: Metadata = {
  title: "App Development Services | Edvixo",
  description:
    "Mobile application development services for iOS, Android and cross-platform apps.",
};

const services = [
  {
    title: "Mobile App Development",
    description:
      "Complete mobile applications designed around your users and business goals.",
    href: "/contact",
  },
  {
    title: "iOS App Development",
    description:
      "Modern iOS applications with polished interfaces and reliable performance.",
    href: "/contact",
  },
  {
    title: "Android App Development",
    description:
      "Scalable Android applications built for real-world users and businesses.",
    href: "/contact",
  },
  {
    title: "Hybrid App Development",
    description:
      "Cross-platform applications that reduce development time and cost.",
    href: "/contact",
  },
];

export default function AppDevelopmentPage() {
  return (
    <ServiceCategoryPage
      category="App Development"
      title="Mobile Apps Built for Real Users"
      description="We design and develop mobile applications that combine smooth experiences, reliable technology and business-focused functionality."
      icon="app"
      services={services}
    />
  );
}