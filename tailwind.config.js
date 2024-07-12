
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        charm: ['Charm'],
      },
      colors: {
        primary: '#044e7f', 
        secondary: '#ed7227',
        third:'#39364f' 
      },
    },
  },
  plugins: [],
}