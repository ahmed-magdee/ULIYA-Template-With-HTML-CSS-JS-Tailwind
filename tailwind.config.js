/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-color": "#0c0c0c",
        "section-color":"#0fcfdc",
        "opacity-color": "#e1f3fd",
        "blue-sky": "#0fcfdc"
      },
      fontFamily: {
        "main-font":"'Poppins', sans-serif",
      },
      animation: {
        "spin-slow": 'spin 3s ease-in-out infinite'
      }
    },
  },
  plugins: []
};
