/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'roboto': ["Roboto", "sans - serif"],
    },
    extend: {
      colors: {
        'primary': '#080D41',
        'secondary': '#00204A',
        'heading': '#1B9FCB',
        'paragraph': '#282828',
        'cta': '#2D88FF',
        'col-1': '#F1F4F9',
        'dark-1': '#0F172A',
      },
      boxShadow: {
        'dark-sm': '0 10px 10px 0 rgba(255, 255, 255, 0.05)',

      },
    },
  },
  plugins: [],
}