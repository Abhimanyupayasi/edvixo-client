"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

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

   NEW COMPANY ROUTES:

   /company/about
   /company/team
   /company/why-edvixo
   /company/case-studies
   /company/client-reviews

   Old routes such as:
   /about
   /portfolio

   are NOT used by the Company menu.
========================================================= */

const companyColumns: MegaMenuColumn[] = [
  {
    title: "ABOUT EDVIXO",
    items: [
      {
        label: "About Edvixo",
        description:
          "Learn about Edvixo, our vision, team and digital expertise.",
        href: "/company/about",
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
        href: "/company/team",
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
        href: "/company/why-edvixo",
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
        href: "/company/case-studies",
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
        href: "/company/client-reviews",
      },
    ],
  },
];

/* =========================================================
   SERVICES

   ONLY THESE 5 SERVICE ROUTES ARE USED:

   /services/web-development
   /services/app-development
   /services/ecom-development
   /services/design
   /services/miscellaneous

   Old routes such as:

   /services/business-websites
   /services/online-stores
   /services/booking-systems
   /services/local-seo
   /services/website-redesign
   /services/dashboards

   ARE NOT USED BY THIS HEADER.
========================================================= */

const servicesColumns: MegaMenuColumn[] = [
  {
    title: "WEB DEVELOPMENT",
    items: [
      {
        label: "Web Development",
        description:
          "Modern websites, web applications and business platforms built for performance and growth.",
        href: "/services/web-development",
      },
    ],
  },

  {
    title: "APP DEVELOPMENT",
    items: [
      {
        label: "App Development",
        description:
          "Scalable mobile applications and digital experiences for modern businesses.",
        href: "/services/app-development",
      },
    ],
  },

  {
    title: "ECOM DEVELOPMENT",
    items: [
      {
        label: "Ecom Development",
        description:
          "High-performing ecommerce stores and shopping experiences designed to convert.",
        href: "/services/ecom-development",
      },
    ],
  },

  {
    title: "DESIGN",
    items: [
      {
        label: "Design",
        description:
          "Modern UI/UX and product design experiences that strengthen your brand.",
        href: "/services/design",
      },
    ],
  },

  {
    title: "MISCELLANEOUS",
    items: [
      {
        label: "Miscellaneous",
        description:
          "Booking systems, local SEO, dashboards and practical digital solutions for growing businesses.",
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
        label: "Development",
        description:
          "Build scalable websites, applications and custom software.",
        href: "/solutions/development",
      },
    ],
  },

  {
    title: "BUSINESS",
    items: [
      {
        label: "Business",
        description:
          "Improve business processes with practical digital solutions.",
        href: "/solutions/business",
      },
    ],
  },

  {
    title: "CLOUD",
    items: [
      {
        label: "Cloud",
        description:
          "Modern cloud infrastructure, deployment and DevOps solutions.",
        href: "/solutions/cloud",
      },
    ],
  },

  {
    title: "SUPPORT",
    items: [
      {
        label: "Support",
        description:
          "Maintenance, security, updates and ongoing technical support.",
        href: "/solutions/support",
      },
    ],
  },

  {
    title: "TRANSFORMATION",
    items: [
      {
        label: "Transformation",
        description:
          "Modernize business operations with scalable digital technology.",
        href: "/solutions/transformation",
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
          "Digital solutions for healthcare businesses and organizations.",
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
          "Digital platforms for schools, colleges and education businesses.",
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
          "Digital experiences that help retail businesses grow.",
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
          "Modern websites and platforms for property businesses.",
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
          "Flexible digital solutions for businesses across industries.",
        href: "/industries/other",
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
          "Explore our complete collection of digital projects.",
        href: "/portfolio",
      },
    ],
  },

  {
    title: "FEATURED WORK",
    items: [
      {
        label: "Featured Work",
        description:
          "Explore selected projects created by Edvixo.",
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
          "Discover the process and results behind selected projects.",
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
          "See outcomes delivered for our clients.",
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
  /* =======================================================
     COMPANY
  ======================================================= */

  {
    label: "Company",

    // IMPORTANT:
    // Company no longer points directly to /about.
    href: "/company/about",

    items: [
      {
        label: "About Edvixo",
        href: "/company/about",
      },
      {
        label: "Meet The Team",
        href: "/company/team",
      },
      {
        label: "Why Edvixo",
        href: "/company/why-edvixo",
      },
      {
        label: "Case Studies",
        href: "/company/case-studies",
      },
      {
        label: "Client Reviews",
        href: "/company/client-reviews",
      },
    ],

    megaColumns: companyColumns,
  },

  /* =======================================================
     SERVICES
  ======================================================= */

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

  /* =======================================================
     SOLUTIONS
  ======================================================= */

  {
    label: "Solutions",
    href: "/solutions",

    items: [
      {
        label: "Development",
        href: "/solutions/development",
      },
      {
        label: "Business",
        href: "/solutions/business",
      },
      {
        label: "Cloud",
        href: "/solutions/cloud",
      },
      {
        label: "Support",
        href: "/solutions/support",
      },
      {
        label: "Transformation",
        href: "/solutions/transformation",
      },
    ],

    megaColumns: solutionsColumns,
  },

  /* =======================================================
     INDUSTRIES
  ======================================================= */

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
        href: "/industries/other",
      },
    ],

    megaColumns: industriesColumns,
  },

  /* =======================================================
     PORTFOLIO
  ======================================================= */

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

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [openMobileMenu, setOpenMobileMenu] =
    useState<string | null>(null);

  /*
   * ONLY ONE desktop dropdown can be open at a time.
   */
  const [openDesktopMenu, setOpenDesktopMenu] =
    useState<string | null>(null);

  /* =======================================================
     CLOSE DESKTOP MENU WHEN CLICKING OUTSIDE HEADER
  ======================================================= */

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (!target.closest("[data-header-root]")) {
        setOpenDesktopMenu(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );
    };
  }, []);

  /* =======================================================
     CLOSE MENUS AFTER ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMobileMenu(null);
    setOpenDesktopMenu(null);
  }, [pathname]);

  /* =======================================================
     ACTIVE ROUTE HELPER
  ======================================================= */

  const isActiveLink = (href: string) => {
    const cleanHref = href.split("?")[0];

    if (cleanHref === "/") {
      return pathname === "/";
    }

    return (
      pathname === cleanHref ||
      pathname.startsWith(`${cleanHref}/`)
    );
  };

  /* =======================================================
     DESKTOP MENU TOGGLE
  ======================================================= */

  const toggleDesktopMenu = (label: string) => {
    setOpenDesktopMenu((current) => {
      if (current === label) {
        return null;
      }

      return label;
    });
  };

  /* =======================================================
     MOBILE MENU TOGGLE
  ======================================================= */

  const toggleMobileMenu = (label: string) => {
    setOpenMobileMenu((current) => {
      if (current === label) {
        return null;
      }

      return label;
    });
  };

  /* =======================================================
     CLOSE EVERYTHING
  ======================================================= */

  const closeAllMenus = () => {
    setOpenDesktopMenu(null);
    setOpenMobileMenu(null);
    setMobileMenuOpen(false);
  };

  /* =======================================================
     CURRENT DESKTOP DROPDOWN
  ======================================================= */

  const activeDesktopMenu = navMenus.find(
    (menu) => menu.label === openDesktopMenu,
  );

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <header
      data-header-root
      className="
        sticky
        top-0
        z-[100]
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
          HEADER BAR
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
          onClick={closeAllMenus}
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
            /*
             * Desktop active state is based ONLY on the
             * currently opened dropdown.
             *
             * This guarantees that only one header option
             * is highlighted at a time.
             */

            const isOpen =
              openDesktopMenu === menu.label;

            return (
              <button
                key={menu.label}
                type="button"
                onClick={() =>
                  toggleDesktopMenu(menu.label)
                }
                className={`
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-200

                  ${
                    isOpen
                      ? "bg-[#20364b] text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
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

                    ${
                      isOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>
            );
          })}
        </nav>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3
          "
        >
          {/* =================================================
              DESKTOP CTA
          ================================================= */}

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
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#ff9b41]
              md:inline-flex
              lg:px-7
            "
          >
            <Link
              href="/contact"
              onClick={closeAllMenus}
            >
              Get Free Consultation
            </Link>
          </Button>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(
                (current) => !current,
              );

              setOpenMobileMenu(null);
              setOpenDesktopMenu(null);
            }}
            className="
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              duration-200
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
          DESKTOP MEGA MENU
      ===================================================== */}

      {activeDesktopMenu && (
        <div
          className="
            fixed
            left-1/2
            top-20
            z-[999]
            w-[calc(100vw-32px)]
            max-w-[1480px]
            -translate-x-1/2
            pt-3
            lg:block
          "
        >
          <MegaMenu
            columns={
              activeDesktopMenu.megaColumns
            }
            onNavigate={() =>
              setOpenDesktopMenu(null)
            }
          />
        </div>
      )}

      {/* =====================================================
          MOBILE NAVIGATION
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
              py-3
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
                  {/* =========================================
                      MOBILE NAV ROW
                  ========================================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <Link
                      href={menu.href}
                      onClick={closeAllMenus}
                      className={`
                        flex-1
                        py-4
                        text-base
                        font-semibold
                        transition-colors

                        ${
                          isActiveLink(
                            menu.href,
                          )
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
                        toggleMobileMenu(
                          menu.label,
                        )
                      }
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
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

                          ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>
                  </div>

                  {/* =========================================
                      MOBILE DROPDOWN
                  ========================================= */}

                  {isOpen && (
                    <div
                      className="
                        overflow-hidden
                        pb-5
                        pl-1
                      "
                    >
                      <div
                        className="
                          grid
                          grid-cols-1
                          gap-2.5
                        "
                      >
                        {menu.megaColumns.map(
                          (column) => {
                            const item =
                              column.items[0];

                            if (!item) {
                              return null;
                            }

                            return (
                              <Link
                                key={`${menu.label}-${column.title}`}
                                href={item.href}
                                onClick={
                                  closeAllMenus
                                }
                                className="
                                  group
                                  rounded-xl
                                  border
                                  border-white/10
                                  bg-[#0d2237]
                                  px-4
                                  py-4
                                  transition-all
                                  duration-300
                                  hover:-translate-y-0.5
                                  hover:border-[#ff8b2c]/40
                                  hover:bg-[#102940]
                                "
                              >
                                <div
                                  className="
                                    mb-3
                                    h-1
                                    w-9
                                    rounded-full
                                    bg-[#ff8b2c]
                                    transition-all
                                    duration-300
                                    group-hover:w-14
                                  "
                                />

                                <h3
                                  className="
                                    text-sm
                                    font-extrabold
                                    uppercase
                                    tracking-[0.04em]
                                    text-white
                                  "
                                >
                                  {column.title}
                                </h3>

                                <p
                                  className="
                                    mt-2
                                    text-xs
                                    leading-5
                                    text-slate-400
                                  "
                                >
                                  {
                                    item.description
                                  }
                                </p>

                                <div
                                  className="
                                    mt-3
                                    text-xs
                                    font-bold
                                    text-[#ff8b2c]
                                    transition-transform
                                    duration-200
                                    group-hover:translate-x-1
                                  "
                                >
                                  Explore →
                                </div>
                              </Link>
                            );
                          },
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* ===============================================
                MOBILE CTA
            =============================================== */}

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
                  transition-all
                  duration-200
                  hover:bg-[#ff9b41]
                "
              >
                <Link
                  href="/contact"
                  onClick={closeAllMenus}
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