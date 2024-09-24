/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        brightRed: 'hsl(12, 88%, 59%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        desaturatedBlue: 'hsl(228, 23%, 55%)',
        lightGray: 'hsl(240, 6%, 50%)',
      }
    },
  },
  plugins: [],
}

