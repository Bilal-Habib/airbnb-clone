const { getNextInternalQuery } = require("next/dist/server/request-meta");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: "#FF385C",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
