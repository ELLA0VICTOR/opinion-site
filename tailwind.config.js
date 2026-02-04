/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'terminal': {
          900: '#0a0e27',
          800: '#151932',
          700: '#1e2540',
          600: '#2a3254',
          500: '#3d4563',
        },
        'cyber': {
          400: '#33e5ff',
          500: '#00d9ff',
          600: '#00b8d9',
        },
        'signal': {
          400: '#ff8559',
          500: '#ff6b35',
          600: '#e55a28',
        },
        'success': {
          400: '#33ffb8',
          500: '#00ffa3',
          600: '#00d985',
        }
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      }
    },
  },
  plugins: [],
}