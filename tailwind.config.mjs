/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'reading': '680px',
      },
      boxShadow: {
        'card-hover': '0 12px 40px rgba(122, 158, 126, 0.15)',
        'card': '0 4px 16px rgba(122, 158, 126, 0.08)',
      },
      letterSpacing: {
        'heading': '-0.02em',
      },
      colors: {
        // Primary: Sage green (#7A9E7E) — calm, natural, healing, nurturing
        primary: {
          50: '#f2f7f3',
          100: '#e0ede2',
          200: '#c3dcc7',
          300: '#9dc4a3',
          400: '#7A9E7E',
          500: '#5c8261',
          600: '#48694d',
          700: '#3b5540',
          800: '#324536',
          900: '#2a392d',
          950: '#151e17',
        },
        // Secondary: Soft pink (#E8B4B8) — warm, nurturing, peaceful
        secondary: {
          50: '#fdf5f6',
          100: '#fcebed',
          200: '#f9d5d9',
          300: '#E8B4B8',
          400: '#d9949a',
          500: '#c77178',
          600: '#b05460',
          700: '#93424e',
          800: '#7b3943',
          900: '#69333c',
          950: '#39181e',
        },
        // Accent: Warm sage — grounded, earthy, professional
        accent: {
          50: '#f4f7f4',
          100: '#e5ede6',
          200: '#cbdacd',
          300: '#a6c0a9',
          400: '#7da181',
          500: '#5d8462',
          600: '#496a4e',
          700: '#3c5640',
          800: '#334636',
          900: '#2b3b2e',
          950: '#151f17',
        },
        // Warm cream for backgrounds
        gold: {
          300: '#f5e1d8',
          400: '#ebd0c4',
          500: '#ddbcae',
          600: '#cca394',
          700: '#b48878',
        },
      },
    },
  },
  plugins: [],
};
