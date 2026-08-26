"use client";

import { useEffect, useRef } from "react";

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

export function PublicCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  const frameRef = useRef<number | null>(null);

  const targetRef = useRef({
    x: 0,
    y: 0,
  });

  const ringPositionRef = useRef({
    x: 0,
    y: 0,
  });

  const visibleRef = useRef(false);
  const interactiveRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (
      !mediaQuery.matches ||
      reducedMotionQuery.matches
    ) {
      return;
    }

    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!ring || !dot) {
      return;
    }

    /*
     * Enable the custom cursor immediately.
     *
     * No React state is required here.
     */
    document.documentElement.classList.add(
      "has-public-cursor",
    );

    const setVisible = (visible: boolean) => {
      if (visibleRef.current === visible) {
        return;
      }

      visibleRef.current = visible;

      ring.classList.toggle(
        "opacity-100",
        visible,
      );

      ring.classList.toggle(
        "opacity-0",
        !visible,
      );

      dot.classList.toggle(
        "opacity-100",
        visible,
      );

      dot.classList.toggle(
        "opacity-0",
        !visible,
      );
    };

    const setInteractive = (
      interactive: boolean,
    ) => {
      if (
        interactiveRef.current === interactive
      ) {
        return;
      }

      interactiveRef.current = interactive;

      ring.classList.toggle(
        "public-cursor-ring-active",
        interactive,
      );

      dot.classList.toggle(
        "public-cursor-dot-active",
        interactive,
      );
    };

    /*
     * Update the cursor position directly through
     * transform instead of React state.
     *
     * This prevents a React render on every mouse move.
     */
    const updateCursor = () => {
      frameRef.current = null;

      const target = targetRef.current;
      const ringPosition =
        ringPositionRef.current;

      /*
       * Smooth trailing ring.
       */
      ringPosition.x +=
        (target.x - ringPosition.x) * 0.2;

      ringPosition.y +=
        (target.y - ringPosition.y) * 0.2;

      ring.style.transform = `
        translate3d(
          ${ringPosition.x}px,
          ${ringPosition.y}px,
          0
        )
        translate(-50%, -50%)
      `;

      dot.style.transform = `
        translate3d(
          ${target.x}px,
          ${target.y}px,
          0
        )
        translate(-50%, -50%)
      `;

      /*
       * Continue only while the cursor is active.
       */
      if (visibleRef.current) {
        frameRef.current =
          window.requestAnimationFrame(
            updateCursor,
          );
      }
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current =
        window.requestAnimationFrame(
          updateCursor,
        );
    };

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      /*
       * Only respond to a real mouse.
       */
      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      const x = event.clientX;
      const y = event.clientY;

      targetRef.current.x = x;
      targetRef.current.y = y;

      /*
       * First movement:
       * Put the ring directly on the pointer.
       * This prevents the initial visible lag.
       */
      if (!visibleRef.current) {
        ringPositionRef.current.x = x;
        ringPositionRef.current.y = y;

        ring.style.transform = `
          translate3d(
            ${x}px,
            ${y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      setVisible(true);

      const target =
        event.target instanceof Element
          ? event.target
          : null;

      const interactive = Boolean(
        target?.closest(
          INTERACTIVE_SELECTOR,
        ),
      );

      const text = Boolean(
        target?.closest(
          TEXT_INPUT_SELECTOR,
        ),
      );

      /*
       * Don't show custom cursor over text fields.
       */
      if (text) {
        setVisible(false);
        setInteractive(false);
        return;
      }

      setInteractive(interactive);

      scheduleUpdate();
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

      setInteractive(true);
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

      const interactive = Boolean(
        target?.closest(
          INTERACTIVE_SELECTOR,
        ),
      );

      setInteractive(interactive);
    };

    const hideCursor = () => {
      setVisible(false);
      setInteractive(false);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(
          frameRef.current,
        );

        frameRef.current = null;
      }
    };

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
      {
        passive: true,
      },
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "blur",
      hideCursor,
    );

    document.documentElement.addEventListener(
      "pointerleave",
      hideCursor,
    );

    /*
     * Re-check if the user changes device settings.
     */
    const handleMediaChange = () => {
      if (
        !mediaQuery.matches ||
        reducedMotionQuery.matches
      ) {
        hideCursor();

        document.documentElement.classList.remove(
          "has-public-cursor",
        );
      } else {
        document.documentElement.classList.add(
          "has-public-cursor",
        );
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleMediaChange,
    );

    reducedMotionQuery.addEventListener(
      "change",
      handleMediaChange,
    );

    return () => {
      document.documentElement.classList.remove(
        "has-public-cursor",
      );

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

      mediaQuery.removeEventListener(
        "change",
        handleMediaChange,
      );

      reducedMotionQuery.removeEventListener(
        "change",
        handleMediaChange,
      );

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(
          frameRef.current,
        );

        frameRef.current = null;
      }
    };
  }, []);

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
      {/* OUTER RING */}
      <div
        ref={ringRef}
        className="
          public-cursor-ring
          opacity-0
        "
      />

      {/* CENTER DOT */}
      <div
        ref={dotRef}
        className="
          public-cursor-dot
          opacity-0
        "
      />
    </div>
  );
}