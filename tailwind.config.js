/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#131313",
      lgray: "#242424",
      white: "#FFF",
      smoke: "#d3d3d3",
      Alt: "#9D9288",
    },
    // Screens
    screens: {
      'phone': "390px",
      // => @media (min-width: 390px) { ... }
      'tablet': "720px",
      // => @media (min-width: 640px) { ... }

      'laptop': "1024px",
      // => @media (min-width: 1024px) { ... }

      'desktop': "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      // Background Utilities
      backgroundColor: {
        'dark': '#131313',
        'accent': '#FFB320',
        'lightgray': '#778899',
      },
      backgroundImage: {
        'home': "url('./src/assets/Images/bg-home.jpg')",
        'image': "url('./src/assets/Images/background.jpg')",
        'parallax': "url('./src/assets/Images/parallax.jpg')",
        'dark': "#131313",
        'accent': "#FFB320",
      },
      // Font Color Utilities
      textColor: {
        'default': '#FFFFFF',
        'accent': '#FFB320',
        'smoke': '#d3d3d3',
        'gray': '#333333',
      },
      // Font Style Utilities
      fontFamily: {
        'Titilium':['Titillium Web', 'sans-serif'],
        'BrunoSC':['Bruno Ace SC', 'sans-serif'],
        'Bruno':['Bruno Ace', 'sans-serif'],
        'Ops':['Black Ops One', 'sans-serif'],
      },
      // Border Utilities
      borderColor: {
        'accent': "#FFB320",
      },
    },
  },
  plugins: [],
};
