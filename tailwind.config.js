/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'responsive': 'calc(1.3rem + .6vw)',
      },
    },
  },
  plugins: [],
}

