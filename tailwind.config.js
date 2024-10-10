/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'extra-wide': '0.4em', 
        'super-wide': '0.3em',
      },
      fontFamily:{
        'fraunces': ['Fraunces', 'serif'],      
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

