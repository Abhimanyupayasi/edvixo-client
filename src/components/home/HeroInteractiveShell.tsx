"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type HeroInteractiveShellProps = {
  children: ReactNode;
  className?: string;
};

const initialStyle: CSSProperties = {
  "--hero-glow-x": "50%",
  "--hero-glow-y": "34%",
  "--hero-card-x": "0px",
  "--hero-card-y": "0px",
  "--hero-chip-a-x": "0px",
  "--hero-chip-a-y": "0px",
  "--hero-chip-b-x": "0px",
  "--hero-chip-b-y": "0px",
  "--hero-chip-c-x": "0px",
  "--hero-chip-c-y": "0px",
  "--hero-orb-a-x": "0px",
  "--hero-orb-a-y": "0px",
  "--hero-orb-b-x": "0px",
  "--hero-orb-b-y": "0px",
  "--hero-scroll-y": "0px",
} as CSSProperties;

export function HeroInteractiveShell({
  children,
  className = "",
}: HeroInteractiveShellProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reduceMotionMedia = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const coarsePointerMedia = window.matchMedia(
      "(pointer: coarse)",
    );

    /*
     * If the user prefers reduced motion,
     * don't attach animation listeners.
     */
    if (reduceMotionMedia.matches) {
      return;
    }

    let pointerX = 0;
    let pointerY = 0;
    let scrollProgress = 0;

    let frameId: number | null = null;

    /*
     * Cache the section position.
     *
     * The old implementation called
     * getBoundingClientRect() on every scroll event.
     * That can force layout calculations repeatedly.
     */
    let sectionTop = 0;
    let sectionHeight = 0;

    const updateSectionBounds = () => {
      const rect = section.getBoundingClientRect();

      sectionTop = rect.top + window.scrollY;
      sectionHeight = rect.height;
    };

    /*
     * Calculate scroll position without repeatedly
     * calling getBoundingClientRect().
     */
    const updateScrollProgress = () => {
      const viewportHeight = window.innerHeight || 1;
      const currentScroll = window.scrollY;

      const sectionPosition =
        sectionTop - currentScroll;

      const normalized =
        (viewportHeight * 0.65 - sectionPosition) /
        viewportHeight;

      scrollProgress = Math.max(
        -1,
        Math.min(1, normalized),
      );
    };

    /*
     * Apply all visual changes once per animation frame.
     */
    const applyMotion = () => {
      frameId = null;

      const cardX = pointerX * 18;
      const cardY = pointerY * 14;

      const chipAX = pointerX * -24;
      const chipAY = pointerY * -18;

      const chipBX = pointerX * 28;
      const chipBY = pointerY * 20;

      const chipCX = pointerX * -14;
      const chipCY = pointerY * 10;

      const orbAX = pointerX * -32;
      const orbAY = pointerY * -20;

      const orbBX = pointerX * 34;
      const orbBY = pointerY * 26;

      const scrollY = scrollProgress * 20;

      section.style.setProperty(
        "--hero-glow-x",
        `${50 + pointerX * 12}%`,
      );

      section.style.setProperty(
        "--hero-glow-y",
        `${34 + pointerY * 10}%`,
      );

      section.style.setProperty(
        "--hero-card-x",
        `${cardX}px`,
      );

      section.style.setProperty(
        "--hero-card-y",
        `${cardY}px`,
      );

      section.style.setProperty(
        "--hero-chip-a-x",
        `${chipAX}px`,
      );

      section.style.setProperty(
        "--hero-chip-a-y",
        `${chipAY}px`,
      );

      section.style.setProperty(
        "--hero-chip-b-x",
        `${chipBX}px`,
      );

      section.style.setProperty(
        "--hero-chip-b-y",
        `${chipBY}px`,
      );

      section.style.setProperty(
        "--hero-chip-c-x",
        `${chipCX}px`,
      );

      section.style.setProperty(
        "--hero-chip-c-y",
        `${chipCY}px`,
      );

      section.style.setProperty(
        "--hero-orb-a-x",
        `${orbAX}px`,
      );

      section.style.setProperty(
        "--hero-orb-a-y",
        `${orbAY}px`,
      );

      section.style.setProperty(
        "--hero-orb-b-x",
        `${orbBX}px`,
      );

      section.style.setProperty(
        "--hero-orb-b-y",
        `${orbBY}px`,
      );

      section.style.setProperty(
        "--hero-scroll-y",
        `${scrollY}px`,
      );
    };

    const scheduleMotion = () => {
      if (frameId !== null) {
        return;
      }

      frameId =
        window.requestAnimationFrame(applyMotion);
    };

    /*
     * Mouse movement:
     * Only run this on devices that actually have
     * a precise pointer.
     */
    const handleMouseMove = (
      event: MouseEvent,
    ) => {
      if (coarsePointerMedia.matches) {
        return;
      }

      const width = section.clientWidth;
      const height = section.clientHeight;

      if (!width || !height) {
        return;
      }

      const rect =
        section.getBoundingClientRect();

      pointerX =
        (event.clientX - rect.left) /
          width -
        0.5;

      pointerY =
        (event.clientY - rect.top) /
          height -
        0.5;

      scheduleMotion();
    };

    const handleMouseLeave = () => {
      pointerX = 0;
      pointerY = 0;

      scheduleMotion();
    };

    /*
     * Scroll handler.
     *
     * IMPORTANT:
     * No getBoundingClientRect() here.
     */
    const handleScroll = () => {
      updateScrollProgress();
      scheduleMotion();
    };

    /*
     * Resize:
     * Recalculate the cached section position only
     * when the layout actually changes.
     */
    const handleResize = () => {
      updateSectionBounds();
      updateScrollProgress();
      scheduleMotion();
    };

    /*
     * Initial measurements.
     */
    updateSectionBounds();
    updateScrollProgress();
    applyMotion();

    section.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true },
    );

    section.addEventListener(
      "mouseleave",
      handleMouseLeave,
      { passive: true },
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      handleResize,
      { passive: true },
    );

    return () => {
      section.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      section.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleResize,
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`hero-shell relative overflow-hidden ${className}`}
      style={initialStyle}
    >
      {children}
    </section>
  );
}