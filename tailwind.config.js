/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily:{'nova':['Nova Script','system-ui'],'poppins':['Poppins','sans-serif']}},
  },
  plugins: [],
}