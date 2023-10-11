/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myDarkBlue: '#112E42',
        myBrightBlue: '#3088C2',
        myDeepBlue: '#24648F',
        myLightBlue: '#8BBBDC',
        myGray: '#2D3D47',
        mydarkGray: '#1D272E',

      },
      fontFamily: {
        sans: ['Onest'],
      },
    },
  },
  plugins: [],
}