import type { Config } from "tailwindcss";

/**
 * Thème « old money méditerranéen » — inspiré de la direction visuelle de la
 * nouvelle ère : lumière chaude, pierre/crème, rouge en couleur signature.
 * Toutes les couleurs pointent vers des variables CSS (voir app/globals.css)
 * pour pouvoir ajuster l'identité facilement quand l'album sort.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
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
        // Serif éditoriale pour les titres, sans-serif propre pour le texte.
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
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
