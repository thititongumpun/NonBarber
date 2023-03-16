/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#333333",
      },
      fontFamily: {
        sans: ["Ubuntu, sans-serif"],
      },
      backgroundImage: {
        hero: "url('assets/shave-feature-1.jpg')",
        hero2: "url('assets/shave-feature-2.jpg')",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
