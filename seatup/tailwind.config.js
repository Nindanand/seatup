/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat'],
    },

    extend: {
      colors: {
        'kuning': '#FFAC30',
        'merah': '#A7332F',
        'abu': '#DADADA',
        'white': '#FFFFFF',
        'black': '#1E1E1E',
        'brokenwhite': '#F6F6F6',
        'broken2white': '#DADADA',
        'darkerabu': '#AAAAAA',
        'kuningtua': '#D99B40',
        'biru': '#223954',
        'darkbiru': '#111E2E',
        'lightbiru': '#2F5FA7',
        'kuning2': '#FFE9C7',
        'abu2': '#9F9F9F',
        'hijau': '#2FA750',
        'hijautua': '#38834D',
      },
      backgroundImage: {
        'products-header': "url('/src/img/products-header.png')",
      },
    },
  },
  plugins: [],

}