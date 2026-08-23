"use client";

import Link from "next/link";

/* =========================================================
   TYPES
========================================================= */

export type MegaMenuItem = {
  label: string;
  description: string;
  href: string;
};

export type MegaMenuColumn = {
  title: string;
  items: MegaMenuItem[];
};

type MegaMenuProps = {
  columns: MegaMenuColumn[];
  onNavigate?: () => void;
};

/* =========================================================
   MEGA MENU
========================================================= */

export function MegaMenu({
  columns,
  onNavigate,
}: MegaMenuProps) {
  /*
   * Each column becomes ONE clean card.
   *
   * The first item supplies:
   * - description
   * - destination URL
   *
   * This keeps the dropdown simple and attractive.
   */

  const cards = columns.map((column) => {
    const firstItem = column.items?.[0];

    return {
      title: column.title,
      description:
        firstItem?.description ||
        `Explore our ${column.title.toLowerCase()} services and solutions.`,
      href: firstItem?.href || "#",
    };
  });

  return (
    <div className="mega-menu">
      <div
        className="
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          lg:grid-cols-5
        "
      >
        {cards.map((card, index) => (
          <Link
            key={card.title}
            href={card.href}
            onClick={onNavigate}
            className="mega-card"
            style={
              {
                animationDelay: `${index * 55}ms`,
              } as React.CSSProperties
            }
          >
            {/* =================================================
                SUBTLE ORANGE GLOW
            ================================================= */}

            <span className="mega-card-glow" />

            {/* =================================================
                ORANGE ACCENT LINE
            ================================================= */}

            <span className="mega-card-line" />

            {/* =================================================
                TITLE
            ================================================= */}

            <h3
              className="
                relative
                text-[14px]
                font-extrabold
                uppercase
                leading-5
                tracking-[0.055em]
                text-white
                sm:text-[15px]
              "
            >
              {card.title}
            </h3>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                relative
                mt-3
                max-w-[220px]
                text-[12px]
                leading-5
                text-slate-400
                sm:text-[13px]
                sm:leading-6
              "
            >
              {card.description}
            </p>

            {/* =================================================
                EXPLORE
            ================================================= */}

            <span
              className="
                relative
                mt-auto
                inline-flex
                items-center
                gap-1
                pt-4
                text-[12px]
                font-bold
                text-[#ff8b2c]
                sm:text-[13px]
              "
            >
              Explore

              <span className="mega-card-arrow">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}