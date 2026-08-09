import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  // class-based dark mode so next-themes can control it
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // ── M3 Forest-Green Tonal Palette ─────────────────────────────────────
      // Every token maps 1-to-1 with DESIGN_SYSTEM.md.
      colors: {
        // ── M3 Color tokens - all reference CSS custom props from globals.css.
        // When the "dark" class is applied, globals.css .dark{} swaps the
        // variable values and every Tailwind utility class updates automatically.
        // ── PRIMARY ───────────────────────────────────────────────────────
        primary: "var(--color-primary)",
        "on-primary": "var(--color-on-primary)",
        "primary-container": "var(--color-primary-container)",
        "on-primary-container": "var(--color-on-primary-container)",

        // ── SECONDARY ─────────────────────────────────────────────────────
        secondary: "var(--color-secondary)",
        "on-secondary": "var(--color-on-secondary)",
        "secondary-container": "var(--color-secondary-container)",
        "on-secondary-container": "var(--color-on-secondary-container)",

        // ── TERTIARY ──────────────────────────────────────────────────────
        tertiary: "var(--color-tertiary)",
        "on-tertiary": "var(--color-on-tertiary)",
        "tertiary-container": "var(--color-tertiary-container)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",

        // ── ERROR ─────────────────────────────────────────────────────────
        error: "var(--color-error)",
        "on-error": "var(--color-on-error)",
        "error-container": "var(--color-error-container)",
        "on-error-container": "var(--color-on-error-container)",

        // ── SURFACE / BACKGROUND ──────────────────────────────────────────
        background: "var(--color-background)",
        "on-background": "var(--color-on-background)",
        surface: "var(--color-surface)",
        "on-surface": "var(--color-on-surface)",
        "surface-variant": "var(--color-surface-variant)",
        "on-surface-variant": "var(--color-on-surface-variant)",

        // ── UTILITY ───────────────────────────────────────────────────────
        outline: "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",
        "inverse-surface": "var(--color-inverse-surface)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
        "inverse-primary": "var(--color-inverse-primary)",

        // ── SURFACE CONTAINERS ────────────────────────────────────────────
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        "surface-container-highest": "var(--color-surface-container-highest)",

        // ── DARK ROLE ALIASES (for admin-specific components) ─────────────
        "dark-primary": "var(--color-primary)",
        "dark-on-primary": "var(--color-on-primary)",
        "dark-primary-container": "var(--color-primary-container)",
        "dark-on-primary-container": "var(--color-on-primary-container)",
        "dark-background": "var(--color-background)",
        "dark-on-background": "var(--color-on-background)",
        "dark-surface": "var(--color-surface)",
        "dark-on-surface": "var(--color-on-surface)",
        "dark-surface-variant": "var(--color-surface-variant)",
        "dark-on-surface-variant": "var(--color-on-surface-variant)",
        "dark-outline": "var(--color-outline)",
      },

      // ── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      // ── M3 Shape Scale ────────────────────────────────────────────────────
      borderRadius: {
        "shape-xs": "4px",
        "shape-sm": "8px",
        "shape-md": "12px",
        "shape-lg": "16px",
        "shape-xl": "28px",
        "shape-full": "9999px",
      },

      // ── M3 Type Scale ─────────────────────────────────────────────────────
      fontSize: {
        "display-large": ["57px", { lineHeight: "64px", fontWeight: "400" }],
        "display-medium": ["45px", { lineHeight: "52px", fontWeight: "400" }],
        "display-small": ["36px", { lineHeight: "44px", fontWeight: "500" }],
        "headline-large": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-medium": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-small": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "title-large": ["22px", { lineHeight: "28px", fontWeight: "600" }],
        "title-medium": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "body-large": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-medium": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-large": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "label-medium": ["12px", { lineHeight: "16px", fontWeight: "600" }],
      },

      // ── Spacing (multiples of 8) ──────────────────────────────────────────
      maxWidth: {
        content: "1200px",
      },

      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "25%": { transform: "translate(12px, -16px) rotate(5deg)" },
          "50%": { transform: "translate(-8px, -24px) rotate(-3deg)" },
          "75%": { transform: "translate(-16px, -10px) rotate(7deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glitch: {
          "0%, 90%, 100%": { transform: "translateX(0)" },
          "92%": { transform: "translateX(-3px)" },
          "94%": { transform: "translateX(3px)" },
          "96%": { transform: "translateX(-2px)" },
          "98%": { transform: "translateX(2px)" },
        },
      },

      animation: {
        shimmer: "shimmer 1.5s infinite",
        marquee: "marquee 30s linear infinite",
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        "spin-reverse": "spin-reverse 18s linear infinite",
        drift: "drift 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        glitch: "glitch 5s ease-in-out infinite",
      },
    },
  },

  plugins: [typography],
};

export default config;
