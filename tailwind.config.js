/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkRed: "#610404",
        medRed: "#780A0A",
        lightRed: "#911111",
        lightGrayOne: "#eeeeee",
        lightGrayTwo: "#dddddd",
        lightGrayThree: "#cccccc",
        grayOne: "#bbbbbb",
        grayTwo: "#aaaaaa",
        overLay: "rgba(0, 0, 0, 0.4)",
        header: "#ccb7ae",
        active: "#640d14",
      },
      colors: {
        overLay: "rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        "icon-calendar": "url('../public/trattoria-assets/calendar.png')",
        "hero-pattern-1":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%, rgba(0,0,0,0.8) 100%),url('../public/trattoria-assets/image1.jpg')",
        "hero-pattern-2":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%, rgba(0,0,0,0.8) 100%),url('../public/trattoria-assets/image2.jpg')",
        "hero-pattern-3":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%, rgba(0,0,0,0.8) 100%),url('../public/trattoria-assets/image3.jpg')",
        "hero-pattern-4":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%, rgba(0,0,0,0.8) 100%),url('../public/trattoria-assets/image4.jpg')",
      },
      backgroundPosition: {
        "center-top-y": "center top 30%",
      },
      scale: {
        0.5: "0.2",
        400: "4.0",
      },
      width: {
        "25vw": "25vw",
        "35vw": "35vw",
        "50vw": "50vw",
        "75vw": "75vw",
      },
      height: {
        "30rem": "30rem",
      },
      spacing: {
        "50%": "50%",
      },
      animation: {
        slide: "slide 20s infinite",
      },
      keyframes: {
        slide: {
          "0%": {
            backgroundImage: "url('../public/trattoria-assets/image3.jpg')",
          },
          "25%": {
            backgroundImage: "url('../public/trattoria-assets/image2.jpg')",
          },
          "50%": {
            backgroundImage: "url('../public/trattoria-assets/image1.jpg')",
          },
          "75%": {
            backgroundImage: "url('../public/trattoria-assets/image4.jpg')",
          },
          "100%": {
            backgroundImage: "url('../public/trattoria-assets/image3.jpg')",
          },
        },
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
