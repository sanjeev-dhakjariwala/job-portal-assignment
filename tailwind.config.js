/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-btn': '#1597E4',
        'black-font': '#182021',
        'borderColor':'#E6E6E6',
        'greyFont': '#7A7A7A',
        'cardLocation': '#646464'
      }
    },
  },
  plugins: [],
}