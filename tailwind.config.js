/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      
<<<<<<< HEAD
      colors: {
=======
colors: {
>>>>>>> fb8aa15fb11f121a66b31cbd15c5f59344629462
        dsccGreen: "#00909c",
        dsccOrange: "#E67700",
        darkText: "#222222",
        lightGray: "#F8F8F8",
<<<<<<< HEAD
      },
      
      fontFamily:{
        sans:['Sora', 'sans-serif']
=======
      }
,
      fontFamily:{
        sans:['Inter', 'sans-serif']
>>>>>>> fb8aa15fb11f121a66b31cbd15c5f59344629462
      }
    },
  },
  plugins: [],
}
