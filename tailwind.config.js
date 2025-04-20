// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        slideLeft: "slideLeft 10s linear infinite",
        slideRight: "slideRight 10s linear infinite",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-10%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
