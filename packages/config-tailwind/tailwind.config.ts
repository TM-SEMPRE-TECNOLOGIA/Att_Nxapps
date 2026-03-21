import type { Config } from "tailwindcss";

/**
 * Ocean Breeze Design System — TM Sempre Tecnologia
 * Tema compartilhado entre todos os apps do monorepo Att_Nxapps
 *
 * USO em algum app:
 *   import baseConfig from "@att-nxapps/config-tailwind";
 *   export default { ...baseConfig, content: [...] } satisfies Config;
 */
const oceanBreeze: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Ocean Breeze Palette ──────────────────────────
        brand: {
          primary:   "#0ACF97", // Verde TM (identidade atual)
          secondary: "#38BDF8", // Azul oceano
          accent:    "#A78BFA", // Violeta premium
        },
        ocean: {
          50:  "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        surface: {
          base:    "#0a0f1c", // Fundo principal
          card:    "#111827", // Cards
          hover:   "#1a2332", // Hover de card
          border:  "rgba(148, 163, 184, 0.1)",
        },
      },
      fontFamily: {
        sans:  ["Inter", "system-ui", "sans-serif"],
        mono:  ["Fira Code", "Cascadia Code", "monospace"],
      },
      animation: {
        "fade-up":   "fadeUp 0.5s ease-out both",
        "fade-in":   "fadeIn 0.3s ease-out both",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
      boxShadow: {
        "ocean-sm":  "0 0 20px rgba(56, 189, 248, 0.1)",
        "ocean-md":  "0 0 40px rgba(56, 189, 248, 0.15)",
        "ocean-lg":  "0 0 60px rgba(56, 189, 248, 0.2)",
        "brand-sm":  "0 0 20px rgba(10, 207, 151, 0.1)",
        "brand-md":  "0 0 40px rgba(10, 207, 151, 0.15)",
      },
      backgroundImage: {
        "gradient-ocean": "linear-gradient(135deg, #38bdf8, #0ACF97)",
        "gradient-dark":  "linear-gradient(135deg, #0a0f1c, #111827)",
      },
    },
  },
  plugins: [],
};

export default oceanBreeze;
