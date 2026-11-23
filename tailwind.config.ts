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
        canvas: {
          DEFAULT: "#F4F5F4",
          subtle: "#ECEEEC",
        },
        forest: {
          50: "#F0F7F4",
          100: "#D8ECE3",
          200: "#B3DBC8",
          300: "#8AC7A9",
          400: "#52B788",
          500: "#40916C",
          600: "#2D6A4F",
          700: "#245741",
          800: "#1E4E3B",
          900: "#1B4332",
          950: "#10291E",
        },
        slate: {
          850: "#131C24",
          950: "#090E14",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
        mono: ["'JetBrains Mono'", "Consolas", "monospace"],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
