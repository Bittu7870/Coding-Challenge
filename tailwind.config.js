/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bt_font_regular: ["bt_font_regular", "Calibri", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
