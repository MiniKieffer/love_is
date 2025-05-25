import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      screens: {
        lg: '1360px', // Set lg breakpoint to 1360px
      },
      fontFamily: {
        futura: ['Futura PT', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
