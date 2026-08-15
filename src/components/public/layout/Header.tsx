"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navMenus = [
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "Home", href: "/" },
      { label: "About The Company", href: "/about" },
      { label: "Meet The Team", href: "/about" },
      { label: "Client Reviews", href: "/work" },
      { label: "Company Brochure", href: "/docs" },
      { label: "Career", href: "/contact" },
      { label: "Life@Edvixo", href: "/about" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        heading: "WEB DEVELOPMENT",
        items: [
          {
            label: "Website Development",
            href: "/services/business-websites",
          },
          {
            label: "PHP Development",
            href: "/services/business-websites",
          },
          {
            label: "WordPress Development",
            href: "/services/business-websites",
          },
          {
            label: "Website Redesign",
            href: "/services/business-websites",
          },
          {
            label: "Angular Development",
            href: "/services/business-websites",
          },
        ],
      },
      {
        heading: "APP DEVELOPMENT",
        items: [
          { label: "Mobile App Development", href: "/contact" },
          { label: "iOS App Development", href: "/contact" },
          { label: "Android App Development", href: "/contact" },
          { label: "Hybrid App Development", href: "/contact" },
        ],
      },
      {
        heading: "ECOM DEVELOPMENT",
        items: [
          {
            label: "E-Commerce Development",
            href: "/services/online-stores",
          },
          {
            label: "WooCommerce Development",
            href: "/services/online-stores",
          },
          {
            label: "Magento Development",
            href: "/services/online-stores",
          },
          {
            label: "OpenCart Development",
            href: "/services/online-stores",
          },
        ],
      },
      {
        heading: "DESIGN",
        items: [
          { label: "UI/UX Design", href: "/contact" },
          { label: "Graphic Design", href: "/contact" },
          { label: "App Prototype", href: "/contact" },
          {
            label: "Web Design",
            href: "/services/website-redesign",
          },
        ],
      },
      {
        heading: "MISCELLANEOUS",
        items: [
          {
            label: "Software Development",
            href: "/services/dashboards",
          },
          {
            label: "Digital Marketing",
            href: "/services/local-seo",
          },
          {
            label: "Technical Support",
            href: "/contact",
          },
        ],
      },
    ],
  },
  {
    label: "Games",
    href: "/games",
    items: [
      { label: "Game Development", href: "/services" },
      { label: "Game Design", href: "/services" },
      { label: "Mobile Games", href: "/services" },
      { label: "VR/AR Experiences", href: "/services" },
      { label: "QA & Testing", href: "/services" },
      { label: "Live Ops", href: "/services" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      {
        label: "Hire Dedicated Developers",
        href: "/services",
      },
      {
        label: "Startup Product Development",
        href: "/services",
      },
      {
        label: "Business Automation",
        href: "/services",
      },
      {
        label: "Cloud & DevOps Solutions",
        href: "/services",
      },
      {
        label: "Maintenance & Support",
        href: "/services",
      },
      {
        label: "Digital Transformation",
        href: "/services",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Healthcare", href: "/work" },
      { label: "Education", href: "/work" },
      { label: "SaaS", href: "/work" },
      { label: "Retail", href: "/work" },
      { label: "Real Estate", href: "/work" },
      { label: "Hospitality", href: "/work" },
    ],
  },
  {
    label: "Portfolio",
    href: "/work",
    items: [
      { label: "Case Studies", href: "/work" },
      { label: "Client Results", href: "/work" },
      { label: "Featured Projects", href: "/work" },
      { label: "Success Stories", href: "/work" },
      { label: "Industries", href: "/work" },
      { label: "Process", href: "/services" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (pathname === href) return true;

    return pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-[#071a2d]
        text-white
        shadow-[0_6px_30px_rgba(0,0,0,0.25)]
      "
      role="banner"
    >
      {/* MAIN HEADER */}
      <div className="mx-auto flex h-20 max-w-355 items-center justify-between px-4 md:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-0 lg:select-none"
          aria-label="Edvixo homepage"
        >
          <span
            className="
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              border
              border-[#ff8b2c]
              bg-[#1555a5]
              text-xl
              font-black
              text-white
              shadow-[0_10px_20px_rgba(255,139,44,0.25)]
            "
          >
            E
          </span>

          <span className="ml-3 text-3xl font-black tracking-tight text-white">
            EDVIXO
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {navMenus.map((menu) => (
            <div key={menu.label} className="group">

              {/* NAVIGATION LINK */}
              <Link
                href={menu.href}
                className={`
                  flex
                  items-center
                  gap-2
                  rounded-md
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    isActiveLink(menu.href)
                      ? "bg-white/10 text-white"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <span>{menu.label}</span>

                <ChevronDown
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:rotate-180
                  "
                />
              </Link>

              {/* DROPDOWN */}
              <div
                className="
                  pointer-events-none
                  invisible
                  fixed
                  left-1/2
                  top-20
                  z-50
                  w-[min(1180px,calc(100vw-48px))]
                  -translate-x-1/2
                  translate-y-3
                  pt-3
                  opacity-0
                  transition-all
                  duration-250
                  ease-out

                  group-hover:pointer-events-auto
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
                aria-hidden="true"
              >

                {/* DROPDOWN CONTAINER */}
                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-[#071a2d]
                    text-white
                    shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                  "
                >

                  {/* SERVICES MEGA MENU */}
                  {menu.label === "Services" && menu.columns ? (
                    <div className="grid gap-6 p-6 lg:grid-cols-5">

                      {menu.columns.map((column) => (
                        <div
                          key={column.heading}
                          className="space-y-3"
                        >
                          <h3
                            className="
                              text-xs
                              font-black
                              uppercase
                              tracking-[0.16em]
                              text-slate-400
                            "
                          >
                            {column.heading}
                          </h3>

                          <div className="space-y-1.5">

                            {column.items.map((item) => (
                              <Link
                                key={`${column.heading}-${item.label}`}
                                href={item.href}
                                className="
                                  group/service-item
                                  block
                                  rounded-md
                                  px-2
                                  py-2
                                  text-base
                                  font-medium
                                  text-slate-200
                                  transition-all
                                  duration-200
                                  hover:bg-white/10
                                  hover:text-white
                                "
                              >
                                <span
                                  className="
                                    inline-block
                                    transition-transform
                                    duration-200
                                    group-hover/service-item:translate-x-1
                                  "
                                >
                                  {item.label}
                                </span>
                              </Link>
                            ))}

                          </div>
                        </div>
                      ))}

                    </div>
                  ) : (

                    /* NORMAL DROPDOWN MENUS */
                    <div className="grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">

                      {menu.items?.map((item) => (
                        <Link
                          key={`${menu.label}-${item.label}`}
                          href={item.href}
                          className="
                            group/item
                            rounded-lg
                            px-3
                            py-2
                            text-base
                            font-medium
                            text-slate-200
                            transition-all
                            duration-200
                            hover:bg-white/10
                            hover:text-white
                          "
                        >
                          <span
                            className="
                              inline-block
                              transition-transform
                              duration-200
                              group-hover/item:translate-x-1
                            "
                          >
                            {item.label}
                          </span>
                        </Link>
                      ))}

                    </div>
                  )}

                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* CONSULTATION BUTTON */}
        <div className="flex items-center gap-2 sm:gap-3">

          <Button
            asChild
            className="
              hidden
              rounded-full
              bg-[#ff8b2c]
              px-5
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_20px_rgba(255,139,44,0.30)]
              hover:bg-[#ff9b41]
              md:inline-flex
            "
          >
            <Link href="/contact">
              Get Free Consultation
            </Link>
          </Button>

        </div>
      </div>
    </header>
  );
}