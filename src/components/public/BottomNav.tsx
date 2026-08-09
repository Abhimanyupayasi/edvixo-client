"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  House,
  FolderOpen,
  BookOpen,
  Sparkles,
  MoreHorizontal,
  Mail,
  ChevronRight,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: House, href: "/" },
  { id: "services", label: "Services", icon: Sparkles, href: "/services" },
  { id: "docs", label: "Docs", icon: BookOpen, href: "/docs" },
  { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
  { id: "more", label: "More", icon: MoreHorizontal, href: null },
] as const;

const MORE_ITEMS = [
  {
    label: "Portfolio",
    description: "Showcase of my work",
    icon: FolderOpen,
    href: "/work",
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (moreOpen) return;

      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 0) {
        // Always show at the very top
        setIsVisible(true);
      } else if (diff > 8) {
        // Scrolling down more than threshold - hide
        setIsVisible(false);
      } else if (diff < -8) {
        // Scrolling up more than threshold - show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [moreOpen]);

  const isActive = (href: string | null): boolean => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleNavClick = () => setMoreOpen(false);

  return (
    <>
      {moreOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMoreOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`
          fixed bottom-24 left-1/2 -translate-x-1/2 z-41 lg:hidden
          w-[calc(100%-48px)] max-w-110
          bg-surface rounded-shape-md border border-outline-variant/50
          transition-transform duration-300 ease-out
          ${moreOpen ? "translate-y-0" : "translate-y-[calc(100%+7rem)]"}
        `}
        style={{ boxShadow: "0 -4px 24px rgba(0,0,0,0.10)" }}
        aria-label="More navigation options"
      >
        <div className="flex justify-center pt-3 pb-4">
          <div className="w-8 h-1 rounded-shape-md bg-outline-variant" />
        </div>

        <div className="px-5 pb-3">
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
            More Pages
          </p>
        </div>

        <div className="px-4">
          {MORE_ITEMS.map((item, index) => (
            // Keep More-sheet item active when current path starts with the item href.
            // This ensures /blog and nested blog routes are visually indicated.
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className={`
                flex items-center gap-4 py-4 px-2
                ${
                  index < MORE_ITEMS.length - 1
                    ? "border-b border-outline-variant"
                    : ""
                }
                ${isActive(item.href) ? "bg-surface-container-low" : ""}
                hover:bg-surface-container-low rounded-shape-md
                transition-colors
              `}
            >
              <div className="w-10 h-10 rounded-shape-md bg-primary-container flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-base font-medium text-on-background leading-tight">
                  {item.label}
                </p>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  {item.description}
                </p>
              </div>

              <ChevronRight className="w-4 h-4 text-on-surface-variant shrink-0" />
            </Link>
          ))}
        </div>

        <div className="pb-4" />
      </div>

      <nav
        className={`fixed bottom-2 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-48px)] max-w-110 rounded-shape-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-[calc(100%+2rem)]"
        }`}
        style={{
          boxShadow:
            "0 8px 32px rgba(27, 110, 63, 0.12), 0 4px 16px rgba(0, 0, 0, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.90)",
        }}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="bg-surface rounded-shape-md border border-outline-variant/50 flex items-center justify-around h-18 px-2">
          {NAV_ITEMS.map((item) => {
            const active = item.href ? isActive(item.href) : false;
            const isMore = item.id === "more";

            const wrapperClass = `
              relative flex items-center justify-center
              flex-1 h-full
              cursor-pointer select-none
            `;

            const innerPillClass = `
              absolute inset-y-[10px] inset-x-0 mx-auto rounded-shape-md
              flex flex-col items-center justify-center gap-[2px]
              px-4 transition-all duration-200 ease-out
              ${
                active
                  ? "bg-primary opacity-100 scale-100"
                  : "bg-transparent opacity-0 scale-90 pointer-events-none"
              }
            `;

            const iconClass = `
              w-[22px] h-[22px] transition-colors duration-150
              ${active ? "text-on-primary" : "text-on-surface-variant"}
            `;

            const labelClass = `
              text-[11px] font-semibold leading-none transition-colors duration-150
              ${active ? "text-on-primary" : "text-on-surface-variant"}
            `;

            if (!isMore) {
              const ariaLabels: { [key: string]: string } = {
                "home": "Go to Homepage",
                "contact": "Get a free consultation",
                "docs": "Read documentation",
                "services": "See services"
              };
              return (
                <Link
                  key={item.id}
                  href={item.href!}
                  className={wrapperClass}
                  aria-current={active ? "page" : undefined}
                  aria-label={ariaLabels[item.id] || item.label}
                >
                  <div className={innerPillClass} aria-hidden="true" />

                  <div className="relative z-10 flex flex-col items-center gap-0.75">
                    <item.icon className={iconClass} strokeWidth={active ? 2.5 : 1.8} />
                    <span className={labelClass}>{item.label}</span>
                  </div>
                </Link>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                className={wrapperClass}
                onClick={() => setMoreOpen((prev) => !prev)}
                aria-expanded={moreOpen}
                aria-label="More navigation options (Blog, About, Contact)"
              >
                <div
                  className={`
                    absolute inset-y-2.5 inset-x-0 mx-auto rounded-shape-md
                    flex flex-col items-center justify-center gap-0.5
                    px-4 transition-all duration-200 ease-out
                    ${
                      moreOpen
                        ? "bg-primary-container opacity-100 scale-100"
                        : "bg-transparent opacity-0 scale-90"
                    }
                  `}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col items-center gap-0.75">
                  <item.icon
                    className={`
                      w-5.5 h-5.5 transition-colors duration-150
                      ${
                        moreOpen
                          ? "text-on-primary-container"
                          : "text-on-surface-variant"
                      }
                    `}
                    strokeWidth={1.8}
                  />
                  <span
                    className={`
                      text-[11px] font-semibold leading-none
                      ${
                        moreOpen
                          ? "text-on-primary-container"
                          : "text-on-surface-variant"
                      }
                    `}
                  >
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
