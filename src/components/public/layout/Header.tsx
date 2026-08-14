"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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
            label: "HTML Development",
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const btn = mobileToggleRef.current;
    console.log("[Header] mounted. mobileToggle present:", !!btn);
    if (btn && typeof window !== "undefined") {
      const cs = window.getComputedStyle(btn);
      console.log("[Header] mobileToggle computed:", {
        display: cs.display,
        visibility: cs.visibility,
        className: btn.className,
      });
    }

    const observer = new MutationObserver(() => {
      const b = mobileToggleRef.current;
      if (b && typeof window !== "undefined") {
        const cs = window.getComputedStyle(b);
        console.log("[Header] mutation - mobileToggle:", {
          present: !!b,
          display: cs.display,
          visibility: cs.visibility,
          className: b.className,
        });
      }
    });

    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = (label: string) => {
    setOpenMobileMenu((current) =>
      current === label ? null : label
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileMenu(null);
  };

  const isActiveLink = (href: string) => {
    if (pathname === href) return true;

    return pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111b2a] text-white shadow-[0_6px_30px_rgba(0,0,0,0.18)]"
      role="banner"
    >
      {/* Main Header Container */}
      <div className="mx-auto flex h-20 max-w-355 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-0 lg:select-none"
          aria-label="Edvixo homepage"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ff8b2c] text-xl font-black text-white shadow-[0_10px_20px_rgba(255,139,44,0.35)]">
            E
          </span>

          <span className="ml-3 text-3xl font-black tracking-tight text-white">
            EDVIXO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {navMenus.map((menu) => (
            /*
             * IMPORTANT:
             * Do NOT use "relative" here.
             *
             * The dropdown is fixed to the viewport and centered.
             */
            <div key={menu.label} className="group">
              {/* Navigation Button */}
              <Link
                href={menu.href}
                className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActiveLink(menu.href)
                    ? "bg-white/8 text-white"
                    : "text-slate-200/90 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{menu.label}</span>

                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* 
               * MEGA DROPDOWN
               *
               * fixed:
               *   Positions dropdown relative to viewport.
               *
               * left-1/2:
               *   Moves its left edge to center of viewport.
               *
               * -translate-x-1/2:
               *   Moves dropdown back by half its own width.
               *
               * This keeps ALL dropdowns centered.
               */}
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
                {/* Dropdown Background */}
                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-[#f4f5f3]
                    text-[#111827]
                    shadow-[0_18px_42px_rgba(15,23,42,0.28)]
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
                              text-slate-500
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
                                  text-slate-700
                                  transition-all
                                  duration-200
                                  hover:bg-[#edf3ee]
                                  hover:text-[#0f172a]
                                "
                              >
                                <span
                                  className="
                                    inline-block
                                    transition-transform
                                    duration-200
                                    hover:translate-x-1
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
                            text-slate-700
                            transition-all
                            duration-200
                            hover:bg-[#edf3ee]
                            hover:text-[#0f172a]
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

        {/* Consultation Button */}
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

          <button
            ref={mobileToggleRef}
            type="button"
            onClick={() => {
              setMobileMenuOpen((current) => !current);
              setOpenMobileMenu(null);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#111b2a] lg:hidden">
          <nav
            className="mx-auto max-h-[calc(100vh-5rem)] max-w-355 overflow-y-auto px-4 py-4 md:px-6"
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
                      className={`flex-1 py-4 text-base font-medium transition-colors ${
                        isActiveLink(menu.href)
                          ? "text-[#ff8b2c]"
                          : "text-slate-200 hover:text-white"
                      }`}
                    >
                      {menu.label}
                    </Link>
                    {hasDropdown && (
                      <button
                        type="button"
                        onClick={() => toggleMobileMenu(menu.label)}
                        className="flex h-10 w-10 items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                        aria-label={`Toggle ${menu.label} submenu`}
                        aria-expanded={isOpen}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {hasDropdown && isOpen && (
                    <div className="pb-4 pl-3">
                      {menu.label === "Services" &&
                      menu.columns ? (
                        <div className="space-y-5">
                          {menu.columns.map((column) => (
                            <div key={column.heading}>
                              <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                {column.heading}
                              </h3>
                              <div className="space-y-1">
                                {column.items.map((item) => (
                                  <Link
                                    key={`${column.heading}-${item.label}`}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="block rounded-md px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
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
                              className="block rounded-md px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
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
            <div className="pt-5">
              <Button
                asChild
                className="w-full rounded-full bg-[#ff8b2c] py-6 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(255,139,44,0.25)] hover:bg-[#ff9b41]"
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