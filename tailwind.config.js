/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0b1329',      // Deep slate/navy
          navy: '#132247',      // Primary navy
          blue: '#1e3a8a',      // Strong blue
          gold: '#f59e0b',      // Construction amber/gold
          goldHover: '#d97706', // Darker gold
          light: '#f8fafc',     // Clean soft background
          muted: '#64748b',     // Subdued text
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 20px -2px rgba(19, 34, 71, 0.06)',
        'gold': '0 10px 25px -5px rgba(245, 158, 11, 0.3)',
      }
    },
  },
  plugins: [],
}
