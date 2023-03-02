/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#292727",
        "lightdark": "#2B2727",
        "darktable": "#1F1D1D",
        "netflixred": "#E50914",
        "light": "#CECACA",
        "lighter": "#888383",
        "orange": "#FE4619"

      },
      fontFamily : {
        sans: "Poppins, sans-serif"
      }
    },
  },
  plugins: [],
}
