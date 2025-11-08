import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1f3c88",
          indigo: "#2c4fb8",
          sand: "#f5ede1",
          terracotta: "#c8763d",
          coral: "#ff6f61",
          slate: "#1e293b",
          ash: "#445063",
        },
        neutral: {
          50: "#f7f8fb",
          100: "#eceef5",
          200: "#d8dce7",
          300: "#c3c9d8",
          400: "#a7afc5",
          500: "#8b94b0",
          600: "#6f7998",
          700: "#55607e",
          800: "#394763",
          900: "#1f2e43",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 20px 40px -24px rgba(31, 60, 136, 0.28)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(31,60,136,0.12), transparent 60%), radial-gradient(circle at bottom right, rgba(199,118,61,0.14), transparent 60%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
