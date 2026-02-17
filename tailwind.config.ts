import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      colors: {
        gray: {
          100: "#f5f5f5",
          200: "#fafafa",
          400: "#bfbfbf",
          600: "#737373",
        },
      },
    },
  },
  plugins: [],
};
export default config;
