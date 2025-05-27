import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'crimson': ['var(--font-crimson-pro)', 'serif'],
        'lato': ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
