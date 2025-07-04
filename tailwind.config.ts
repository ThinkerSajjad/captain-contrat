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
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'var(--font-lato)',
              color: 'var(--tertiary)',
            },
            h2: {
              fontFamily: 'var(--font-lato)',
              color: 'var(--tertiary)',
            },
            h3: {
              fontFamily: 'var(--font-lato)',
              color: 'var(--tertiary)',
            },
            a: {
              color: 'var(--tertiary)',
              '&:hover': {
                color: 'var(--tertiary-dark)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
