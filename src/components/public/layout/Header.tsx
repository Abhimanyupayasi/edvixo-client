"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const navMenus = [
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About Edvixo", href: "/about" },
      { label: "Meet Team", href: "/contact" },
      { label: "Why Edvixo", href: "/about" },
      { label: "Case Studies", href: "/about" },
      { label: "Client Reviews", href: "/about" },
      { label: "Life @ Edvixo", href: "/about" },
      { label: "Careers", href: "/contact" },
      { label: "Company Brochure", href: "/about" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        heading: "WEB DEVELOPMENT",
        items: [
          { label: "Business Website Development", href: "/about" },
          { label: "Web Application Development", href: "/about" },
          { label: "Custom Website Development", href: "/about" },
          { label: "WordPress Development", href: "/about" },
          { label: "Website Redesign", href: "/about" },
        ],
      },
      {
        heading: "MOBILE APP DEVELOPMENT",
        items: [
          { label: "Android App Development", href: "/contact" },
          { label: "iOS App Development", href: "/contact" },
          { label: "Cross-Platform App Development", href: "/contact" },
          { label: "App UI/UX Development", href: "/contact" },
          { label: "App Maintenance", href: "/contact" },
        ],
      },
      {
        heading: "ECOMMERCE",
        items: [
          { label: "Ecommerce Website Development", href: "/contact" },
          { label: "Shopify Development", href: "/contact" },
          { label: "WooCommerce Development", href: "/contact" },
          { label: "Custom Ecommerce", href: "/contact" },
          { label: "Ecommerce Maintenance", href: "/contact" },
        ],
      },
      {
        heading: "DESIGN",
        items: [
          { label: "UI/UX Design", href: "/contact" },
          { label: "Website Design", href: "/about" },
          { label: "App Design", href: "/contact" },
          { label: "Graphic Design", href: "/contact" },
          { label: "Branding & Identity", href: "/about" },
        ],
      },
      {
        heading: "SOFTWARE & DIGITAL",
        items: [
          { label: "Custom Software Development", href: "/contact" },
          { label: "CRM & ERP Development", href: "/contact" },
          { label: "SaaS Development", href: "/contact" },
          { label: "AI & Automation", href: "/contact" },
          { label: "Digital Marketing & SEO", href: "/contact" },
        ],
      },
    ],
  },
  {
    label: "Games",
    href: "/contact",
    items: [
      { label: "Game Development", href: "/contact" },
      { label: "Game Design", href: "/contact" },
      { label: "Mobile Games", href: "/contact" },
      { label: "VR/AR Experiences", href: "/contact" },
      { label: "QA & Testing", href: "/contact" },
      { label: "Live Ops", href: "/contact" },
    ],
  },
  {
    label: "Solutions",
    href: "/contact",
    items: [
      { label: "Business Automation", href: "/contact" },
      { label: "Digital Transformation", href: "/contact" },
      { label: "Cloud & DevOps Solutions", href: "/contact" },
      { label: "Startup Product Development", href: "/contact" },
      { label: "Maintenance & Support", href: "/contact" },
      { label: "Dedicated Development Teams", href: "/contact" },
    ],
  },
  {
    label: "Industries",
    href: "/about",
    columns: [
      {
        heading: "HEALTHCARE & FINANCE",
        items: [
          { label: "Healthcare", href: "/about" },
          { label: "FinTech & Banking", href: "/about" },
          { label: "Insurance", href: "/about" },
        ],
      },
      {
        heading: "EDUCATION & TECHNOLOGY",
        items: [
          { label: "Education & EdTech", href: "/about" },
          { label: "Technology & SaaS", href: "/about" },
          { label: "Media & Entertainment", href: "/about" },
        ],
      },
      {
        heading: "COMMERCE & PROPERTY",
        items: [
          { label: "Retail & E-Commerce", href: "/about" },
          { label: "Real Estate & PropTech", href: "/about" },
          { label: "Manufacturing", href: "/about" },
        ],
      },
      {
        heading: "TRAVEL, LOGISTICS & ENTERTAINMENT",
        items: [
          { label: "Logistics & Transportation", href: "/about" },
          { label: "Travel & Hospitality", href: "/about" },
          { label: "Sports & Gaming", href: "/about" },
        ],
      },
    ],
  },
  {
    label: "Portfolio",
    href: "/about",
    items: [
      { label: "Case Studies", href: "/about" },
      { label: "Client Results", href: "/about" },
      { label: "Featured Projects", href: "/about" },
      { label: "Success Stories", href: "/about" },
      { label: "Industries", href: "/about" },
      { label: "Process", href: "/contact" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);

  const desktopNavRef = useRef<HTMLElement>(null);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target as Node)
      ) {
        setOpenDesktopMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        ref={desktopNavRef}
        className="hidden items-center gap-1 lg:flex"
        role="navigation"
        aria-label="Main navigation"
      >
        {navMenus.map((menu) => {
          const hasDropdown =
            Boolean(menu.items?.length) || Boolean(menu.columns?.length);

          const isOpen = openDesktopMenu === menu.label;

          return (
            <div key={menu.label} className="relative">
              {/* TEXT + ARROW */}
              <div className="flex items-center">
                {/* MENU TEXT */}
                <Link
                  href={menu.href}
                  className={`
                    flex
                    items-center
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
                  {menu.label}
                </Link>

                {/* ARROW */}
                {hasDropdown && (
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDesktopMenu((current) =>
                        current === menu.label ? null : menu.label
                      );
                    }}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-md
                      text-slate-300
                      transition-colors
                      hover:bg-white/10
                      hover:text-white
                    "
                    aria-label={`Toggle ${menu.label} dropdown`}
                    aria-expanded={isOpen}
                  >
                    <ChevronDown
                      className={`
                        h-4
                        w-4
                        transition-transform
                        duration-200
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>
                )}
            </div>

              {/* DROPDOWN */}
              {isOpen && (
                <div
                  className="
                    fixed
                    left-1/2
                    top-20
                    z-[100]
                    w-[min(1180px,calc(100vw-48px))]
                    -translate-x-1/2
                    pt-3
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
                    {/* SERVICES */}
                    {menu.columns ? (
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
                                  {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                              /* OTHER DROPDOWNS */
                    <div className="grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">
                      {menu.items?.map((item) => (
                        <Link
                          key={`${menu.label}-${item.label}`}
                          href={item.href}
                          className="
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
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
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

                      {menu.columns ? (
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