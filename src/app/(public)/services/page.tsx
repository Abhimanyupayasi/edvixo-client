import type { Metadata } from "next";
import Link from "next/link";

import services from "@/data/services.json";

import { ArrowRight } from "lucide-react";

import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceListSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
 title: "Digital Solutions & Software Development Services",

  description:
    "Explore Edvixo digital services including web development, application development, e-commerce, design, and business-focused technology solutions.",

  alternates: {
    canonical: `${SITE_URL}/services`,
  },

  openGraph: {
    title: "Digital Solutions & Software Development Services",
    description:
      "Web development, applications, e-commerce, design, and digital solutions built around growing businesses.",
    url: `${SITE_URL}/services`,
    siteName: "Edvixo",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Edvixo Digital Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions & Software Development Services | Edvixo",
    description:
      "Explore Edvixo digital services for growing businesses.",
    images: ["/og-services.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  const serviceList = Object.values(services);

  return (
  <main className="min-h-screen bg-[#061827] text-white">
    <JsonLd
      data={getServiceListSchema(
        serviceList.map((service) => ({
          title: service.title,
          slug: service.slug,
          description: service.card.description,
        })),
      )}
    />

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#ff8b2c]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">

          <div className="mx-auto max-w-4xl">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#ff8b2c]">
              OUR SERVICES
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Digital Solutions
              <span className="block text-[#ff8b2c]">
                Built Around Your Business
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              From websites and applications to ecommerce, design and
              specialized digital solutions, we build technology that helps
              businesses move forward.
            </p>

          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {serviceList.map((service, index) => (

              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b2235] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff8b2c]/50 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
              >

                {/* Glow */}

                <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-[#ff8b2c]/5 blur-3xl transition duration-500 group-hover:bg-[#ff8b2c]/20" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-black text-[#ff8b2c]">
                      0{index + 1}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-[#ff8b2c]/40 group-hover:bg-[#ff8b2c]">
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>

                  </div>

                  <h2 className="mt-10 text-2xl font-black uppercase tracking-tight">
                    {service.title}
                  </h2>

                  <p className="mt-5 min-h-[100px] leading-7 text-slate-400">
                    {service.card.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#ff8b2c]">
                    Explore Service

                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>

                  <div className="mt-7 h-1 w-12 rounded-full bg-[#ff8b2c] transition-all duration-500 group-hover:w-full" />

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}