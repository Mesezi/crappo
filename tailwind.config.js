/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*index.html'],
  theme: {
    extend: {
      colors:{
        cryptoBlue : '#0D0D2B',
        transparentBg: 'rgb(255,255,255,.1)',
        mainBlue: '#3671E9'
      }
    },
  },
  plugins: [],
}
