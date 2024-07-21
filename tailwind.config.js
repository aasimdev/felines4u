/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'responsive': 'calc(1.3rem + .6vw)',
        'responsive-h1': 'calc(1.475rem + 2.7vw)',
        'responsive-h2': 'calc(1.325rem + .9vw)',

      },
      width: {
        "fitcontent" : 'calc(100% - 16px)'
      },
      colors:{
        'light-gray':'#dee2e6',
        'dark-gray':'#212529',
        'light-blue':'#007bff',
        'dark-blue':'#0d6efd',
        }
    },
  },
  plugins: [],
}

