"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="space-y-0.5" aria-label="Table of contents">
      {items.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className={`block rounded-shape-sm py-2 pr-3 pl-3 text-sm transition-all duration-150 ${
            activeId === id
              ? "bg-surface-container-low text-primary font-semibold border-l-2 border-primary"
              : "text-on-surface-variant hover:text-on-background hover:bg-surface-container-low/50"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
