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
        // Paleta Institucional UNAM Refinada
        'unam': {
          blue: '#002B7A', // Azul Marino Institucional
          gold: '#BB8800', // Oro Institucional
        },
        // Grises académicos
        'academic': {
          background: '#F8F9FA',
          border: '#E2E8F0',
          text: '#1E293B',
        }
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        'academic': '0 2px 8px rgba(0, 43, 122, 0.1)',
        'academic-lg': '0 8px 16px rgba(0, 43, 122, 0.15)',
      }
    },
  },
  plugins: [],
}
