"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
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
          { label: "Website Development", href: "/services/business-websites" },
          { label: "PHP Development", href: "/services/business-websites" },
          { label: "WordPress Development", href: "/services/business-websites" },
          { label: "HTML Development", href: "/services/business-websites" },
          { label: "Angular Development", href: "/services/business-websites" },
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
          { label: "E-Commerce Development", href: "/services/online-stores" },
          { label: "WooCommerce Development", href: "/services/online-stores" },
          { label: "Magento Development", href: "/services/online-stores" },
          { label: "OpenCart Development", href: "/services/online-stores" },
        ],
      },
      {
        heading: "DESIGN",
        items: [
          { label: "UI/UX Design", href: "/contact" },
          { label: "Graphic Design", href: "/contact" },
          { label: "App Prototype", href: "/contact" },
          { label: "Web Design", href: "/services/website-redesign" },
        ],
      },
      {
        heading: "MISCELLANEOUS",
        items: [
          { label: "Software Development", href: "/services/dashboards" },
          { label: "Digital Marketing", href: "/services/local-seo" },
          { label: "Technical Support", href: "/contact" },
        ],
      },
    ],
  },
  {
  label: "Solutions",
  href: "/solutions",
  items: [
    {
      label: "Hire Dedicated Developers",
      href: "/solutions/hire-dedicated-developers",
    },
    {
      label: "Startup Product Development",
      href: "/solutions/startup-product-development",
    },
    {
      label: "Business Automation",
      href: "/solutions/business-automation",
    },
    {
      label: "Cloud & DevOps Solutions",
      href: "/solutions/cloud-devops-solutions",
    },
    {
      label: "Maintenance & Support",
      href: "/solutions/maintenance-support",
    },
    {
      label: "Digital Transformation",
      href: "/solutions/digital-transformation",
    },
  ],
},
 {
  label: "Industries",
  href: "/industries",
  items: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Education", href: "/industries/education" },
    { label: "SaaS", href: "/industries/saas" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Hospitality", href: "/industries/hospitality" },
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const isActiveLink = (href: string) => {
    if (pathname === href) return true;
    return pathname.startsWith(`${href}/`);
  };

  const toggleMobileMenu = (label: string) => {
    setOpenMobileMenu((current) =>
      current === label ? null : label
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileMenu(null);
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
          className="flex items-center"
          aria-label="Edvixo homepage"
        >
          <Image
            src="/images/edvixo-logo.png"
            alt="Edvixo"
            width={190}
            height={42}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {navMenus.map((menu) => (
            <div key={menu.label} className="group">

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

              {/* DESKTOP DROPDOWN */}
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
              >
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

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* DESKTOP CONSULTATION */}
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

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen((current) => !current);
              setOpenMobileMenu(null);
            }}
            className="
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              border
              border-white/10
              bg-white/5
              text-white
              transition-colors
              hover:bg-white/10
              lg:hidden
            "
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#071a2d] lg:hidden">
          <nav
            className="
              mx-auto
              max-h-[calc(100vh-5rem)]
              max-w-355
              overflow-y-auto
              px-4
              py-4
              md:px-6
            "
            aria-label="Mobile navigation"
          >
            {navMenus.map((menu) => {
              const hasDropdown =
                Boolean(menu.items?.length) ||
                Boolean(menu.columns?.length);

              const isOpen = openMobileMenu === menu.label;

              return (
                <div
                  key={menu.label}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <div className="flex items-center justify-between">

                    <Link
                      href={menu.href}
                      onClick={closeMobileMenu}
                      className={`
                        flex-1
                        py-4
                        text-base
                        font-medium
                        transition-colors
                        ${
                          isActiveLink(menu.href)
                            ? "text-[#ff8b2c]"
                            : "text-slate-200 hover:text-white"
                        }
                      `}
                    >
                      {menu.label}
                    </Link>

                    {hasDropdown && (
                      <button
                        type="button"
                        onClick={() => toggleMobileMenu(menu.label)}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-md
                          text-slate-300
                          transition-colors
                          hover:bg-white/5
                          hover:text-white
                        "
                        aria-label={`Toggle ${menu.label} submenu`}
                        aria-expanded={isOpen}
                      >
                        <ChevronDown
                          className={`
                            h-5
                            w-5
                            transition-transform
                            duration-200
                            ${isOpen ? "rotate-180" : ""}
                          `}
                        />
                      </button>
                    )}
                  </div>

                  {/* MOBILE SUBMENU */}
                  {hasDropdown && isOpen && (
                    <div className="pb-4 pl-3">

                      {menu.label === "Services" &&
                      menu.columns ? (
                        <div className="space-y-5">

                          {menu.columns.map((column) => (
                            <div key={column.heading}>

                              <h3
                                className="
                                  mb-2
                                  text-xs
                                  font-bold
                                  uppercase
                                  tracking-[0.14em]
                                  text-slate-500
                                "
                              >
                                {column.heading}
                              </h3>

                              <div className="space-y-1">
                                {column.items.map((item) => (
                                  <Link
                                    key={`${column.heading}-${item.label}`}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="
                                      block
                                      rounded-md
                                      px-3
                                      py-2.5
                                      text-sm
                                      text-slate-300
                                      transition-colors
                                      hover:bg-white/5
                                      hover:text-white
                                    "
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>

                            </div>
                          ))}

                        </div>
                      ) : (
                        <div className="space-y-1">

                          {menu.items?.map((item) => (
                            <Link
                              key={`${menu.label}-${item.label}`}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="
                                block
                                rounded-md
                                px-3
                                py-2.5
                                text-sm
                                text-slate-300
                                transition-colors
                                hover:bg-white/5
                                hover:text-white
                              "
                            >
                              {item.label}
                            </Link>
                          ))}

                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}

            {/* MOBILE CONSULTATION */}
            <div className="pt-5">
              <Button
                asChild
                className="
                  w-full
                  rounded-full
                  bg-[#ff8b2c]
                  py-6
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_20px_rgba(255,139,44,0.25)]
                  hover:bg-[#ff9b41]
                "
              >
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                >
                  Get Free Consultation
                </Link>
              </Button>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}