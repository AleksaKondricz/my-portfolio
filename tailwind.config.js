/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },

      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#3A333B',
        white: '#f8fafc',
        gray: '#f1f5f9',
    
      },
      boxShadow: {
        'lg': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
  
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        wave: {
          '0%': {transform: 'rotate(0deg)', transformOrigin: '75% 75%'},
          '10%': {transform: 'rotate(14deg)', transformOrigin: '75% 75%'},
          '20%': {transform: 'rotate(-8deg)', transformOrigin: '75% 75%'},
          '30%': {transform: 'rotate(14deg)', transformOrigin: '75% 75%'},
          '40%': {transform: 'rotate(-4deg)', transformOrigin: '75% 75%'},
          '50%': {transform: 'rotate(10deg)', transformOrigin: '75% 75%'},
          '60%': {transform: 'rotate(0deg)', transformOrigin: '75% 75%'},
          '100%': {transform: 'rotate(0deg)', transformOrigin: '75% 75%'}
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        wave: 'wave 2.5s infinite '
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
