// tailwind.config.js  ← À LA RACINE DU PROJET
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          confidentBlue: '#04A7D6',
          deepBlack: '#000000',
          snowWhite: '#FFFFFF',
          softGray: '#F2F2F2',
          darkBlue: '#003B5C',
          alertOrange: '#F9A826',
        },
        fontFamily: {
          sans: ['Roboto', 'system-ui', 'sans-serif'],
          montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }