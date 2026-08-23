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
   * One card is created for every main dropdown category.
   *
   * Example:
   *
   * COMPANY
   * ├── About Edvixo
   * ├── Meet Our Team
   * ├── Why Edvixo
   * ├── Case Studies
   * └── Client Reviews
   *
   * SERVICES
   * ├── Web Development
   * ├── App Development
   * ├── Ecom Development
   * ├── Design
   * └── Miscellaneous
   *
   * The first item supplies the description and URL.
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
    <div
      className="
        w-full

        rounded-[18px]

        border
        border-white/[0.08]

        bg-[#071a2d]/[0.98]

        p-3

        shadow-[0_25px_70px_rgba(0,0,0,0.45)]

        backdrop-blur-xl

        animate-[megaMenuIn_220ms_ease-out]
      "
    >
      {/* =====================================================
          CARDS
      ===================================================== */}

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
            style={{
              animationDelay: `${index * 55}ms`,
            }}
            className="
              group
              relative
              flex
              min-h-[190px]
              flex-col
              overflow-hidden

              rounded-[14px]

              border
              border-white/[0.075]

              bg-[#0d2237]

              p-5

              opacity-0

              animate-[megaCardIn_360ms_cubic-bezier(0.22,1,0.36,1)_forwards]

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1

              hover:border-[#ff8b2c]/45

              hover:bg-[#102940]

              hover:shadow-[0_15px_35px_rgba(0,0,0,0.28)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#ff8b2c]/60
            "
          >
            {/* =================================================
                BACKGROUND ORANGE GLOW
            ================================================= */}

            <span
              className="
                pointer-events-none
                absolute
                -right-12
                -top-12

                h-32
                w-32

                rounded-full

                bg-[#ff8b2c]/0

                blur-3xl

                transition-all
                duration-500

                group-hover:bg-[#ff8b2c]/20
                group-hover:scale-110
              "
            />

            {/* =================================================
                TOP ORANGE LINE
            ================================================= */}

            <span
              className="
                relative
                z-10

                mb-5

                block

                h-[4px]
                w-11

                rounded-full

                bg-[#ff8b2c]

                shadow-[0_0_0_rgba(255,139,44,0)]

                transition-all
                duration-300

                group-hover:w-16

                group-hover:shadow-[0_0_14px_rgba(255,139,44,0.45)]
              "
            />

            {/* =================================================
                TITLE
            ================================================= */}

            <h3
              className="
                relative
                z-10

                text-[14px]
                font-extrabold
                uppercase

                leading-5

                tracking-[0.055em]

                text-white

                transition-colors
                duration-300

                group-hover:text-[#ff9d52]

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
                z-10

                mt-3

                line-clamp-3

                max-w-[230px]

                text-[12px]

                leading-5

                text-slate-400

                transition-colors
                duration-300

                group-hover:text-slate-300

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
                z-10

                mt-auto

                inline-flex
                items-center
                gap-1

                pt-4

                text-[12px]
                font-bold

                text-[#ff8b2c]

                transition-all
                duration-300

                sm:text-[13px]
              "
            >
              <span>Explore</span>

              <span
                className="
                  inline-block

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </span>

            {/* =================================================
                BOTTOM HOVER LINE
            ================================================= */}

            <span
              className="
                absolute
                bottom-0
                left-0

                h-[2px]
                w-0

                bg-[#ff8b2c]

                transition-all
                duration-500

                group-hover:w-full
              "
            />
          </Link>
        ))}
      </div>
    </div>
  );
}