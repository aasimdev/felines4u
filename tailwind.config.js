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
    },
  },
  plugins: [],
}

