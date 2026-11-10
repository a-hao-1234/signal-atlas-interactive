/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071421",
        teal: "#0D9488",
        sunset: "#e86a2c",
      },
    },
  },
  plugins: [],
};
