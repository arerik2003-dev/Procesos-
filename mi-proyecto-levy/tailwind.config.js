/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Institucional UNAM
        'unam-blue': {
          900: '#003366',  // Azul Marino Principal
          800: '#004080',
          700: '#0052A3',
          600: '#0066CC',
          500: '#3385D6',
        },
        'unam-gold': {
          600: '#D4AF37',  // Oro/Dorado Viejo
          500: '#FFD700',
        },
        // Grises académicos
        'academic': {
          gray: '#F8FAFC',
          'gray-dark': '#1E293B',
          'gray-light': '#F1F5F9',
        }
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-left))',
      },
      boxShadow: {
        'academic': '0 2px 8px rgba(0, 51, 102, 0.1)',
        'academic-lg': '0 8px 16px rgba(0, 51, 102, 0.15)',
      }
    },
  },
  plugins: [],
}
