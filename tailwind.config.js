/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#131313",
      lgray: "#d3d3d3",
      white: "#FFF",
    },
    // Screens
    screens: {
      phone: "390px",
      // => @media (min-width: 390px) { ... }
      tablet: "720px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      // Container Utilities
      width: {
        container: "1440px",
      },
      // Background Utilities
      backgroundColor: {
        dark: "#131313",
        accent: "#FFB320",
      },
      top: {
        700: "35rem",
      },
      // Font Color Utilities
      textColor: {
        default: "#FFFFFF",
        accent: "#FFB320",
      },
      // Font Style Utilities
      fontFamily: {
        Titilium: ["Titillium Web", "sans-serif"],
        BrunoSC: ["Bruno Ace SC", "sans-serif"],
        Bruno: ["Bruno Ace", "sans-serif"],
      },
      // Border Utilities
      borderColor: {
        accent: "#FFB320",
      },
      // Absolute Bottom Adjustment
      marginBottom: {
        19: "19px",
      },
    },
  },
  plugins: [],
};
