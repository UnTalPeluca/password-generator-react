/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red": "#F64A4A",
        "orange": "#FB7C58",
        "yellow": "#F8CD65",
        "neon-green": "#A4FFAF",
        "almost-white": "#E6E5EA",
        "grey": "#817D92",
        "dark-grey": "#24232C",
        "very-dark-grey": "#18171F"
      },
      maxWidth: {
        "xs": "343px",
        "sm": "540px"
      },
      fontSize: {
        "3xl": "2rem"
      }
    },
  },
  plugins: [],
};
