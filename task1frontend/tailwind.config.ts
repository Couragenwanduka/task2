import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blue: '#0E1F51',
        peachRed: '#FF3E54',
        neutralBlue: '#170F49',
        neutralBlue2: '#6F6C90',
        peachRed2: 'rgba(255, 222, 226, 0.53)',
      },
      fontFamily: {
        roboto: ['var(--font-Roboto)', 'sans-serif'],
        raleway: ['var(--font-Raleway)', 'sans-serif'],
        dmsans: ['var(--font-DM_Sans)', 'sans-serif'],
        ibm: ['var(--font-Ibm)', 'sans-serif'],
        inter: ['var(--font-Inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
