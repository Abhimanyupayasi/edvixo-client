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
  const frameRef = useRef<number | null>(null);

  const targetRef = useRef({
    x: 0,
    y: 0,
  });

  const ringRef = useRef({
    x: 0,
    y: 0,
  });

  const [enabled, setEnabled] = useState(false);

  const [cursor, setCursor] = useState<CursorState>(
    INITIAL_CURSOR_STATE,
  );

  // Enable cursor only on desktop with a real mouse.
  useEffect(() => {
    if (typeof window === "undefined") {
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
        mediaQuery.matches && !reducedMotionQuery.matches;

      setEnabled(nextEnabled);

      document.documentElement.classList.toggle(
        "has-public-cursor",
        nextEnabled,
      );
    };

    updateEnabled();

    mediaQuery.addEventListener("change", updateEnabled);
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
  }, []);

  // Mouse movement and ring animation.
  useEffect(() => {
    if (!enabled || typeof window === "undefined") {
      return;
    }

    const animate = () => {
      // Smooth trailing effect for the ring.
      ringRef.current.x +=
        (targetRef.current.x - ringRef.current.x) * 0.18;

      ringRef.current.y +=
        (targetRef.current.y - ringRef.current.y) * 0.18;

      setCursor((current) => ({
        ...current,

        x: targetRef.current.x,
        y: targetRef.current.y,

        ringX: ringRef.current.x,
        ringY: ringRef.current.y,
      }));

      frameRef.current =
        window.requestAnimationFrame(animate);
    };

    const setTargetFromEvent = (event: PointerEvent) => {
      // Ignore touch and pen.
      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      targetRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      // Put ring directly under cursor on first movement.
      if (
        ringRef.current.x === 0 &&
        ringRef.current.y === 0
      ) {
        ringRef.current = {
          x: event.clientX,
          y: event.clientY,
        };
      }

      const target =
        event.target instanceof Element
          ? event.target
          : null;

      setCursor((current) => ({
        ...current,

        visible: true,

        interactive: Boolean(
          target?.closest(INTERACTIVE_SELECTOR),
        ),

        text: Boolean(
          target?.closest(TEXT_INPUT_SELECTOR),
        ),
      }));
    };

    const hideCursor = () => {
      setCursor((current) => ({
        ...current,

        visible: false,
        interactive: false,
        text: false,
      }));
    };

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

      setCursor((current) => ({
        ...current,

        interactive: Boolean(
          target?.closest(INTERACTIVE_SELECTOR),
        ),
      }));
    };

    const handlePointerLeave = () => {
      hideCursor();
    };

    frameRef.current =
      window.requestAnimationFrame(animate);

    window.addEventListener(
      "pointermove",
      setTargetFromEvent,
      { passive: true },
    );

    window.addEventListener(
      "blur",
      hideCursor,
    );

    window.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp,
    );

    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(
          frameRef.current,
        );
      }

      window.removeEventListener(
        "pointermove",
        setTargetFromEvent,
      );

      window.removeEventListener(
        "blur",
        hideCursor,
      );

      window.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp,
      );

      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, [enabled]);

  // Keep normal text-input cursor.
  if (!enabled || cursor.text) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-220"
    >
      {/* Outer ring */}
      <div
        className={`public-cursor-ring ${
          cursor.visible
            ? "opacity-100"
            : "opacity-0"
        } ${
          cursor.interactive
            ? "public-cursor-ring-active"
            : ""
        }`}
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

      {/* Center dot */}
      <div
        className={`public-cursor-dot ${
          cursor.visible
            ? "opacity-100"
            : "opacity-0"
        } ${
          cursor.interactive
            ? "public-cursor-dot-active"
            : ""
        }`}
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