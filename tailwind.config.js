/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    
    extend: {
      fontFamily: {
      },
    },
  },
  plugins: [
          require('@tailwindcss/forms'),
          require('@tailwindcss/aspect-ratio'),
  ],
};
