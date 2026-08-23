"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { MegaMenu, type MegaMenuColumn } from "./MegaMenu";

/* =========================================================
   TYPES
========================================================= */

type NavItem = {
  label: string;
  href: string;
};

type NavMenu = {
  label: string;
  href: string;
  items: NavItem[];
  megaColumns: MegaMenuColumn[];
};

/* =========================================================
   COMPANY
========================================================= */

const companyColumns: MegaMenuColumn[] = [
  {
    title: "ABOUT EDVIXO",
    items: [
      {
        label: "About Edvixo",
        description:
          "Learn about Edvixo, our vision, team and digital expertise.",
        href: "/about",
      },
    ],
  },

  {
    title: "MEET OUR TEAM",
    items: [
      {
        label: "Meet The Team",
        description:
          "Meet the people behind our digital products and solutions.",
        href: "/about",
      },
    ],
  },

  {
    title: "WHY EDVIXO",
    items: [
      {
        label: "Why Edvixo",
        description:
          "Discover what makes Edvixo a reliable digital technology partner.",
        href: "/about",
      },
    ],
  },

  {
    title: "CASE STUDIES",
    items: [
      {
        label: "Case Studies",
        description:
          "Explore selected projects, experiences and successful client solutions.",
        href: "/portfolio",
      },
    ],
  },

  {
    title: "CLIENT REVIEWS",
    items: [
      {
        label: "Client Reviews",
        description:
          "See what our clients say about working with Edvixo.",
        href: "/portfolio",
      },
    ],
  },
];

/* =========================================================
   SERVICES
========================================================= */

const servicesColumns: MegaMenuColumn[] = [
  {
    title: "WEB DEVELOPMENT",
    items: [
      {
        label: "Website Development",
        description:
          "Modern websites, business platforms and web applications.",
        href: "/services/web-development",
      },
    ],
  },

  {
    title: "APP DEVELOPMENT",
    items: [
      {
        label: "Mobile App Development",
        description:
          "Mobile applications for iOS, Android and cross-platform.",
        href: "/services/app-development",
      },
    ],
  },

  {
    title: "ECOM DEVELOPMENT",
    items: [
      {
        label: "E-Commerce Development",
        description:
          "High-converting e-commerce stores and online shopping platforms.",
        href: "/services/ecom-development",
      },
    ],
  },

  {
    title: "DESIGN",
    items: [
      {
        label: "UI/UX Design",
        description:
          "UI/UX, graphic, web and product design experiences.",
        href: "/services/design",
      },
    ],
  },

  {
    title: "MISCELLANEOUS",
    items: [
      {
        label: "Software Development",
        description:
          "Software development, digital marketing and technical support.",
        href: "/services/miscellaneous",
      },
    ],
  },
];

/* =========================================================
   SOLUTIONS
========================================================= */

const solutionsColumns: MegaMenuColumn[] = [
  {
    title: "DEVELOPMENT",
    items: [
      {
        label: "Hire Dedicated Developers",
        description:
          "Build your product with dedicated developers and experienced technology teams.",
        href: "/solutions/hire-dedicated-developers",
      },
    ],
  },

  {
    title: "BUSINESS",
    items: [
      {
        label: "Business Automation",
        description:
          "Improve business operations with practical digital automation solutions.",
        href: "/solutions/business-automation",
      },
    ],
  },

  {
    title: "CLOUD",
    items: [
      {
        label: "Cloud & DevOps",
        description:
          "Reliable cloud and DevOps solutions for modern digital products.",
        href: "/solutions/cloud-devops-solutions",
      },
    ],
  },

  {
    title: "SUPPORT",
    items: [
      {
        label: "Maintenance & Support",
        description:
          "Keep your website and digital products secure, updated and reliable.",
        href: "/solutions/maintenance-support",
      },
    ],
  },

  {
    title: "TRANSFORMATION",
    items: [
      {
        label: "Digital Transformation",
        description:
          "Modernize your business through scalable digital technology solutions.",
        href: "/solutions/digital-transformation",
      },
    ],
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industriesColumns: MegaMenuColumn[] = [
  {
    title: "HEALTHCARE",
    items: [
      {
        label: "Healthcare",
        description:
          "Digital websites and platforms designed for healthcare businesses.",
        href: "/industries/healthcare",
      },
    ],
  },

  {
    title: "EDUCATION",
    items: [
      {
        label: "Education",
        description:
          "Digital platforms and websites for schools, colleges and education businesses.",
        href: "/industries/education",
      },
    ],
  },

  {
    title: "RETAIL",
    items: [
      {
        label: "Retail",
        description:
          "Digital solutions that help retail businesses grow and connect with customers.",
        href: "/industries/retail",
      },
    ],
  },

  {
    title: "REAL ESTATE",
    items: [
      {
        label: "Real Estate",
        description:
          "Modern websites and digital platforms for property businesses.",
        href: "/industries/real-estate",
      },
    ],
  },

  {
    title: "OTHER INDUSTRIES",
    items: [
      {
        label: "Other Industries",
        description:
          "Flexible digital solutions for SaaS, hospitality, restaurants and more.",
        href: "/industries",
      },
    ],
  },
];

/* =========================================================
   PORTFOLIO
========================================================= */

const portfolioColumns: MegaMenuColumn[] = [
  {
    title: "ALL PROJECTS",
    items: [
      {
        label: "All Projects",
        description:
          "Explore our complete collection of digital projects and solutions.",
        href: "/portfolio",
      },
    ],
  },

  {
    title: "FEATURED WORK",
    items: [
      {
        label: "Featured Projects",
        description:
          "Explore selected projects and highlighted work created by Edvixo.",
        href: "/portfolio?view=featured",
      },
    ],
  },

  {
    title: "CASE STUDIES",
    items: [
      {
        label: "Case Studies",
        description:
          "Discover the story, process and results behind selected projects.",
        href: "/portfolio?view=case-studies",
      },
    ],
  },

  {
    title: "CLIENT RESULTS",
    items: [
      {
        label: "Client Results",
        description:
          "See the results and outcomes delivered for our clients.",
        href: "/portfolio?view=results",
      },
    ],
  },

  {
    title: "SUCCESS STORIES",
    items: [
      {
        label: "Success Stories",
        description:
          "Explore successful digital experiences delivered by Edvixo.",
        href: "/portfolio?view=success",
      },
    ],
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const navMenus: NavMenu[] = [
  {
    label: "Company",
    href: "/about",

    items: [
      {
        label: "About Edvixo",
        href: "/about",
      },
      {
        label: "Meet The Team",
        href: "/about",
      },
      {
        label: "Why Edvixo",
        href: "/about",
      },
      {
        label: "Case Studies",
        href: "/portfolio",
      },
      {
        label: "Client Reviews",
        href: "/portfolio",
      },
    ],

    megaColumns: companyColumns,
  },

  {
    label: "Services",
    href: "/services",

    items: [
      {
        label: "Web Development",
        href: "/services/web-development",
      },
      {
        label: "App Development",
        href: "/services/app-development",
      },
      {
        label: "Ecom Development",
        href: "/services/ecom-development",
      },
      {
        label: "Design",
        href: "/services/design",
      },
      {
        label: "Miscellaneous",
        href: "/services/miscellaneous",
      },
    ],

    megaColumns: servicesColumns,
  },

  {
    label: "Solutions",
    href: "/solutions",

    items: [
      {
        label: "Development",
        href: "/solutions/hire-dedicated-developers",
      },
      {
        label: "Business",
        href: "/solutions/business-automation",
      },
      {
        label: "Cloud",
        href: "/solutions/cloud-devops-solutions",
      },
      {
        label: "Support",
        href: "/solutions/maintenance-support",
      },
      {
        label: "Transformation",
        href: "/solutions/digital-transformation",
      },
    ],

    megaColumns: solutionsColumns,
  },

  {
    label: "Industries",
    href: "/industries",

    items: [
      {
        label: "Healthcare",
        href: "/industries/healthcare",
      },
      {
        label: "Education",
        href: "/industries/education",
      },
      {
        label: "Retail",
        href: "/industries/retail",
      },
      {
        label: "Real Estate",
        href: "/industries/real-estate",
      },
      {
        label: "Other Industries",
        href: "/industries",
      },
    ],

    megaColumns: industriesColumns,
  },

  {
    label: "Portfolio",
    href: "/portfolio",

    items: [
      {
        label: "All Projects",
        href: "/portfolio",
      },
      {
        label: "Featured Work",
        href: "/portfolio?view=featured",
      },
      {
        label: "Case Studies",
        href: "/portfolio?view=case-studies",
      },
      {
        label: "Client Results",
        href: "/portfolio?view=results",
      },
      {
        label: "Success Stories",
        href: "/portfolio?view=success",
      },
    ],

    megaColumns: portfolioColumns,
  },
];

/* =========================================================
   HEADER
========================================================= */

export function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [openMobileMenu, setOpenMobileMenu] =
    useState<string | null>(null);

  const [openDesktopMenu, setOpenDesktopMenu] =
    useState<string | null>(null);

  const desktopNavRef = useRef<HTMLElement>(null);

  /* =======================================================
     CLOSE DESKTOP MENU WHEN CLICKING OUTSIDE
  ======================================================= */

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
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* =======================================================
     HELPERS
  ======================================================= */

  const isActiveLink = (href: string) => {
    const cleanHref = href.split("?")[0];

    if (pathname === cleanHref) {
      return true;
    }

    return pathname.startsWith(`${cleanHref}/`);
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

  const closeDesktopMenu = () => {
    setOpenDesktopMenu(null);
  };

  /* =======================================================
     RENDER
  ======================================================= */

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
      {/* ===================================================
          MAIN HEADER
      =================================================== */}

      <div
        className="
          mx-auto
          flex
          h-20
          max-w-[1480px]
          items-center
          justify-between
          px-4
          md:px-6
          lg:px-8
        "
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Edvixo homepage"
        >
          <Image
            src="/images/edvixo-logo.png"
            alt="Edvixo"
            width={190}
            height={42}
            priority
            className="
              h-9
              w-auto
              object-contain
              sm:h-10
            "
          />
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          ref={desktopNavRef}
          className="
            hidden
            items-center
            gap-1
            lg:flex
          "
          role="navigation"
          aria-label="Main navigation"
        >
          {navMenus.map((menu) => {
            const isOpen =
              openDesktopMenu === menu.label;

            return (
              <div
                key={menu.label}
                className="relative"
              >
                {/* HEADER BUTTON */}

                <button
                  type="button"
                  onClick={() => {
                    setOpenDesktopMenu((current) =>
                      current === menu.label
                        ? null
                        : menu.label
                    );
                  }}
                  className={`
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-200

                    ${
                      isOpen || isActiveLink(menu.href)
                        ? "bg-white/10 text-white"
                        : "text-slate-200 hover:bg-white/5 hover:text-white"
                    }
                  `}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  <span>{menu.label}</span>

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

                {/* =================================================
                    DESKTOP MEGA MENU
                ================================================= */}

                {isOpen && (
                  <div
                    className="
                      fixed
                      left-0
                      right-0
                      top-20
                      z-50
                      px-3
                      pt-4
                      sm:px-5
                      lg:px-8
                    "
                  >
                    <div
                      className="
                        mx-auto
                        max-w-[1480px]
                      "
                    >
                      <MegaMenu
                        columns={menu.megaColumns}
                        onNavigate={closeDesktopMenu}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

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
              lg:px-7
            "
          >
            <Link href="/contact">
              Get Free Consultation
            </Link>
          </Button>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen((current) => !current);
              setOpenMobileMenu(null);
              setOpenDesktopMenu(null);
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

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenuOpen && (
        <div
          className="
            border-t
            border-white/10
            bg-[#071a2d]
            lg:hidden
          "
        >
          <nav
            className="
              mx-auto
              max-h-[calc(100vh-5rem)]
              max-w-[1480px]
              overflow-y-auto
              px-4
              py-4
              md:px-6
            "
            aria-label="Mobile navigation"
          >
            {navMenus.map((menu) => {
              const isOpen =
                openMobileMenu === menu.label;

              return (
                <div
                  key={menu.label}
                  className="
                    border-b
                    border-white/10
                    last:border-b-0
                  "
                >
                  {/* MOBILE HEADER */}

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

                    <button
                      type="button"
                      onClick={() =>
                        toggleMobileMenu(menu.label)
                      }
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
                  </div>

                  {/* MOBILE SUBMENU */}

                  {isOpen && (
                    <div className="pb-5 pl-1">
                      <div
                        className="
                          grid
                          grid-cols-1
                          gap-3
                        "
                      >
                        {menu.megaColumns.map(
                          (column) => {
                            const item =
                              column.items[0];

                            return (
                              <Link
                                key={`${menu.label}-${column.title}`}
                                href={
                                  item?.href || "#"
                                }
                                onClick={
                                  closeMobileMenu
                                }
                                className="
                                  group
                                  rounded-xl
                                  border
                                  border-white/10
                                  bg-[#0d2237]
                                  p-5
                                  transition-all
                                  duration-200
                                  hover:border-[#ff8b2c]/40
                                  hover:bg-[#102940]
                                "
                              >
                                {/* Orange line */}

                                <div
                                  className="
                                    mb-4
                                    h-1
                                    w-10
                                    rounded-full
                                    bg-[#ff8b2c]
                                  "
                                />

                                {/* Title */}

                                <h3
                                  className="
                                    text-sm
                                    font-extrabold
                                    uppercase
                                    tracking-[0.05em]
                                    text-white
                                  "
                                >
                                  {column.title}
                                </h3>

                                {/* Description */}

                                <p
                                  className="
                                    mt-3
                                    text-sm
                                    leading-6
                                    text-slate-400
                                  "
                                >
                                  {item?.description}
                                </p>

                                {/* Explore */}

                                <div
                                  className="
                                    mt-4
                                    text-sm
                                    font-bold
                                    text-[#ff8b2c]
                                  "
                                >
                                  Explore →
                                </div>
                              </Link>
                            );
                          }
                        )}
                      </div>
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