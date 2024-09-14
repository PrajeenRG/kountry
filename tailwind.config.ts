import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "sm": "0.75rem",
      "base": "1rem",
      "xl": "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.157rem",
      "5xl": "4.209rem"
    },
    extend: {
      colors: {
        'text': 'hsl(var(--text))',
        'background': 'hsl(var(--background))',
        'primary': 'hsl(var(--primary))',
        'secondary': 'hsl(var(--secondary))',
        'accent': 'hsl(var(--accent))',
      },
      fontFamily: {
        sans: ["var(--font-overpass)", "sans-serif"],
        branding: ["var(--font-georama)", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
