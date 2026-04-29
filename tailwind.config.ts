import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#C9A84C", light: "#E8D5A3", dark: "#9B7A2E" },
        navy: { DEFAULT: "#1A2744", light: "#2C3E6B" },
        charcoal: "#2D2D2D",
        "warm-gray": "#6B6B6B",
        "light-gray": "#F5F4F1",
        "brand-border": "#E2DDD5",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
