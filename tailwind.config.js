/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#002550',
      },
      width: {
        '128': '37rem',
      },
    },
  },
  plugins: [],
}

