/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#131313",
      accent: "#FFB320",
      white: "#FFF",
    },
    width: {
      width1: "617px",
      widthbg: "1440px",
      widthicon: "72px",
    },

    height: {
      height1: "804px",
      heightbg: "500px",
      heighticon: "72px",
    },
    extend: {},
  },
  plugins: [],
};
