import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          gold: "#F59E0B",
          saffron: "#D97706",
          darkSaffron: "#B45309",
          maroon: "#78350F",
          deepRed: "#881337",
          cream: "#FFFBEB",
          warmBg: "#FAF5EF",
          cardBg: "#FFFFFF",
          borderGold: "#FCD34D",
        },
      },
      fontFamily: {
        devanagari: ["var(--font-mukta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

