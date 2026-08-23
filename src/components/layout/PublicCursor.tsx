"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  ringX: number;
  ringY: number;
  visible: boolean;
  interactive: boolean;
  text: boolean;
};

const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button",
  "summary",
  "label[for]",
  "[role='button']",
  "[role='link']",
  "[data-cursor='interactive']",
].join(",");

const TEXT_INPUT_SELECTOR = [
  "input",
  "textarea",
  "select",
  "[contenteditable='true']",
].join(",");

const INITIAL_CURSOR_STATE: CursorState = {
  x: 0,
  y: 0,
  ringX: 0,
  ringY: 0,
  visible: false,
  interactive: false,
  text: false,
};

export function PublicCursor() {
  /* =========================================================
     REFS
  ========================================================= */

  const frameRef = useRef<number | null>(null);

  const targetRef = useRef({
    x: 0,
    y: 0,
  });

  const ringRef = useRef({
    x: 0,
    y: 0,
  });

  const hasPointerRef = useRef(false);

  /* =========================================================
     STATE
  ========================================================= */

  const [mounted, setMounted] = useState(false);

  const [enabled, setEnabled] = useState(false);

  const [cursor, setCursor] =
    useState<CursorState>(INITIAL_CURSOR_STATE);

  /* =========================================================
     CLIENT MOUNT
     
     Important for React hydration.
     Server render = null
     First client render = null
     Cursor appears only after hydration.
  ========================================================= */

  useEffect(() => {
    setMounted(true);
  }, []);

  /* =========================================================
     ENABLE CURSOR
     
     Only enable on:
     - Desktop
     - Real mouse
     - No reduced-motion preference
  ========================================================= */

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateEnabled = () => {
      const nextEnabled =
        mediaQuery.matches &&
        !reducedMotionQuery.matches;

      setEnabled(nextEnabled);

      document.documentElement.classList.toggle(
        "has-public-cursor",
        nextEnabled,
      );

      if (!nextEnabled) {
        setCursor(INITIAL_CURSOR_STATE);
        hasPointerRef.current = false;
      }
    };

    updateEnabled();

    mediaQuery.addEventListener(
      "change",
      updateEnabled,
    );

    reducedMotionQuery.addEventListener(
      "change",
      updateEnabled,
    );

    return () => {
      document.documentElement.classList.remove(
        "has-public-cursor",
      );

      mediaQuery.removeEventListener(
        "change",
        updateEnabled,
      );

      reducedMotionQuery.removeEventListener(
        "change",
        updateEnabled,
      );
    };
  }, [mounted]);

  /* =========================================================
     CURSOR / RING ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!mounted || !enabled) {
      return;
    }

    const animate = () => {
      const target = targetRef.current;
      const ring = ringRef.current;

      /*
       * Smooth trailing ring.
       */
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;

      setCursor((current) => ({
        ...current,
        x: target.x,
        y: target.y,
        ringX: ring.x,
        ringY: ring.y,
      }));

      frameRef.current =
        window.requestAnimationFrame(animate);
    };

    /* =======================================================
       POINTER MOVE
    ======================================================= */

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      /*
       * Ignore touch and pen.
       */
      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      const x = event.clientX;
      const y = event.clientY;

      targetRef.current = {
        x,
        y,
      };

      /*
       * Put ring directly on cursor
       * on first movement.
       */
      if (!hasPointerRef.current) {
        ringRef.current = {
          x,
          y,
        };

        hasPointerRef.current = true;
      }

      const target =
        event.target instanceof Element
          ? event.target
          : null;

      const interactive =
        Boolean(
          target?.closest(
            INTERACTIVE_SELECTOR,
          ),
        );

      const text =
        Boolean(
          target?.closest(
            TEXT_INPUT_SELECTOR,
          ),
        );

      setCursor((current) => ({
        ...current,
        x,
        y,
        ringX: ringRef.current.x,
        ringY: ringRef.current.y,
        visible: true,
        interactive,
        text,
      }));
    };

    /* =======================================================
       POINTER DOWN
    ======================================================= */

    const handlePointerDown = (
      event: PointerEvent,
    ) => {
      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      setCursor((current) => ({
        ...current,
        interactive: true,
      }));
    };

    /* =======================================================
       POINTER UP
    ======================================================= */

    const handlePointerUp = (
      event: PointerEvent,
    ) => {
      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      const target =
        event.target instanceof Element
          ? event.target
          : null;

      const interactive =
        Boolean(
          target?.closest(
            INTERACTIVE_SELECTOR,
          ),
        );

      setCursor((current) => ({
        ...current,
        interactive,
      }));
    };

    /* =======================================================
       HIDE
    ======================================================= */

    const hideCursor = () => {
      setCursor((current) => ({
        ...current,
        visible: false,
        interactive: false,
        text: false,
      }));
    };

    /* =======================================================
       START ANIMATION
    ======================================================= */

    frameRef.current =
      window.requestAnimationFrame(animate);

    /* =======================================================
       EVENT LISTENERS
    ======================================================= */

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp,
    );

    window.addEventListener(
      "blur",
      hideCursor,
    );

    document.documentElement.addEventListener(
      "pointerleave",
      hideCursor,
    );

    /* =======================================================
       CLEANUP
    ======================================================= */

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(
          frameRef.current,
        );

        frameRef.current = null;
      }

      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      window.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp,
      );

      window.removeEventListener(
        "blur",
        hideCursor,
      );

      document.documentElement.removeEventListener(
        "pointerleave",
        hideCursor,
      );
    };
  }, [mounted, enabled]);

  /* =========================================================
     IMPORTANT:
     Never render cursor during SSR or before hydration.
  ========================================================= */

  if (!mounted || !enabled || cursor.text) {
    return null;
  }

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-[220]
      "
    >
      {/* =====================================================
          OUTER RING
      ===================================================== */}

      <div
        className={`
          public-cursor-ring
          ${
            cursor.visible
              ? "opacity-100"
              : "opacity-0"
          }
          ${
            cursor.interactive
              ? "public-cursor-ring-active"
              : ""
          }
        `}
        style={{
          transform: `
            translate3d(
              ${cursor.ringX}px,
              ${cursor.ringY}px,
              0
            )
            translate(-50%, -50%)
          `,
        }}
      />

      {/* =====================================================
          CENTER DOT
      ===================================================== */}

      <div
        className={`
          public-cursor-dot
          ${
            cursor.visible
              ? "opacity-100"
              : "opacity-0"
          }
          ${
            cursor.interactive
              ? "public-cursor-dot-active"
              : ""
          }
        `}
        style={{
          transform: `
            translate3d(
              ${cursor.x}px,
              ${cursor.y}px,
              0
            )
            translate(-50%, -50%)
          `,
        }}
      />
    </div>
  );
}