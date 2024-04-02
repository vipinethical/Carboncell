/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FFA927",
        customGray: "#EFEFEF",
        customRed: "#EC5050",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
