/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter", sans-serif',],
      },
      colors: {
        'beige': '#F9F8DE',
        'sage': '#565344',
        'white': '#ffffff',
        'indigo': '#011936',
        'red': '#B10F2E',
        'yellow': '#DC851F',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}

