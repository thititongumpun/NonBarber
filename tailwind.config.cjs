/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
