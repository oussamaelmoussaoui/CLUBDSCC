/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tealBrand: "#008A94",
        orangeBrand: "#FF6600",
        darkText: "#273340",
      },
      fontFamily:{
        sans:['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
