/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
        },
        secondary: {
          300: 'var(--color-secondary-300)',
        },
        dark: {
          200: '#2E2E2E',
          400: '#414141',
          600: 'var(--color-dark-600)',
          700: 'var(--color-dark-700)',
        },
        gray: {
          400: 'var(--color-gray-400)',
        },
      },
      fontFamily: {
        jp: ['Noto Sans JP'],
      },
    },
  },
  plugins: [],
};
