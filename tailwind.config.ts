import type { Config } from "tailwindcss";

/**
 * Thème « Riviera argentique » — calé sur la pochette du nouvel album :
 * lumière chaude de fin d'après-midi, pierre/crème, rouge pellicule en couleur
 * signature, verts cyprès. Les couleurs pointent vers des variables CSS (voir
 * app/globals.css) pour ajuster l'identité en un seul endroit.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        sand: "var(--color-sand)",
        stone: "var(--color-stone)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        signal: "var(--color-signal)", // le rouge signature
        "signal-dark": "var(--color-signal-dark)",
        olive: "var(--color-olive)",
        sky: "var(--color-sky)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "halo-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.08)" },
        },
        "slow-pan": {
          "0%": { transform: "translate3d(0,0,0) scale(1.05)" },
          "100%": { transform: "translate3d(-2%,-1.5%,0) scale(1.12)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "halo-pulse": "halo-pulse 7s ease-in-out infinite",
        "slow-pan": "slow-pan 24s ease-in-out infinite alternate",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
