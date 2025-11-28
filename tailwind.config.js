/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primaryBlue: "#1DA1F2",
        darkText: "#14171A",
        mediumGray: "#657786",
      },
    },
  },
  plugins: [],
};
