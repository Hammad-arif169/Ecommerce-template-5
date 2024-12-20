import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // Only customize the screens if needed (default breakpoints are set already)
  screens: {
    sm: "640px", // Small screens (mobile)
    md: "768px", // Medium screens (tablets)
    lg: "1024px", // Large screens (laptops)
    xl: "1280px", // Extra-large screens (desktops)
    "2xl": "1536px", // Even larger screens (large desktops)
  },
  plugins: [],
};

export default config;
