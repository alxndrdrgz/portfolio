/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    colors: {
      'beige': '#F9F8DE',
      'sage': '#565344',
    },
    extend: {
      fontFamily: {
        'sans': ['"Inter", sans-serif',],
      },
    },
  },
  plugins: [],
}

