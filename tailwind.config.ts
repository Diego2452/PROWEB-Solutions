import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          purple: "#C4281C",
          green: "#C4281C",
          pink: "#C4281C",
          yellow: "#C4281C",
          red: "#C4281C",
        },
        dark: {
          900: "#000000",
          800: "#050505",
          700: "#0A0A0A",
          600: "#0F0F0F",
          500: "#151515",
        },
        light: {
          900: "#ffffff",
          800: "#f5f5f5",
          700: "#eeeeee",
          600: "#e0e0e0",
        },
        proweb: {
          red: "#C4281C",
          "red-dark": "#991F16",
          "red-darker": "#6B1510",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-nunito-sans)", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
      },
      lineHeight: {
        heading: "1.6",
        body: "1.5",
      },
      scale: {
        "108": "1.08",
      },
      backgroundSize: {
        "200": "200% auto",
      },
    },
  },
  plugins: [],
};

export default config;
