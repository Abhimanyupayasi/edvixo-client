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
    We use only the first item from each column.

    Each header dropdown therefore becomes:

    1 card = 1 main category

    Example Services:
    Web Development
    App Development
    Ecom Development
    Design
    Miscellaneous
  */

  const cards = columns.map((column) => {
    const firstItem = column.items[0];

    return {
      title: column.title,
      description:
        firstItem?.description ||
        `Explore our ${column.title.toLowerCase()} services and solutions.`,
      href: firstItem?.href || "#",
    };
  });

  return (
    <div
      className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-[#071a2d]
        p-4
        shadow-[0_25px_70px_rgba(0,0,0,0.45)]
        sm:p-5
        lg:p-9
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          lg:grid-cols-5
        "
      >
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            onClick={onNavigate}
            className="
              group
              min-h-[280px]
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#0d2237]
              p-7
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[#ff8b2c]/40
              hover:bg-[#102940]
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]

              sm:min-h-[270px]
              lg:min-h-[280px]
            "
          >
            {/* =========================================
                ORANGE LINE
            ========================================= */}

            <div
              className="
                mb-7
                h-1
                w-14
                rounded-full
                bg-[#ff8b2c]
                transition-all
                duration-300
                group-hover:w-20
              "
            />

            {/* =========================================
                TITLE
            ========================================= */}

            <h3
              className="
                text-[16px]
                font-extrabold
                uppercase
                leading-6
                tracking-[0.06em]
                text-white
              "
            >
              {card.title}
            </h3>

            {/* =========================================
                DESCRIPTION
            ========================================= */}

            <p
              className="
                mt-6
                max-w-[260px]
                text-[15px]
                leading-7
                text-slate-400
              "
            >
              {card.description}
            </p>

            {/* =========================================
                EXPLORE
            ========================================= */}

            <div
              className="
                mt-7
                inline-flex
                items-center
                text-[15px]
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
        ))}
      </div>
    </div>
  );
}