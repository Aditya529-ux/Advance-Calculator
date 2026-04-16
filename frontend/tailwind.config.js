/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F5F5F7',
          dark: '#1D1D1F',
        },
        surface: {
          light: 'rgba(255, 255, 255, 0.7)',
          dark: 'rgba(28, 28, 30, 0.7)',
        },
        primary: {
          DEFAULT: '#007AFF',
          hover: '#0062CC',
        },
        calculator: {
          button: {
            light: '#E5E5E7',
            dark: '#3A3A3C',
            operator: '#FF9F0A',
            misc: '#A5A5A5'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
