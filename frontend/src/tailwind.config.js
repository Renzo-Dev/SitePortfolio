/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.{vue,js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        base: {
          DEFAULT: '#05070d'
        },
        text: {
          primary: '#f4f7ff',
          muted: '#94a3c7'
        },
        brand: {
          500: '#7aa5ff',
          400: '#9bbcff',
          300: '#c5d7ff'
        },
        mint: {
          500: '#4fd1c5',
          400: '#69e0d9'
        }
      },
      boxShadow: {
        glow: '0 24px 80px -40px rgba(122, 165, 255, 0.5)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -6px, 0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}

