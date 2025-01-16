/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sd': '1.100rem',
      },
      colors: {
        airbnb: '#ff385c', 
      },
    },
  },
  plugins: [],
};
