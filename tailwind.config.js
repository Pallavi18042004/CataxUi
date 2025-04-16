// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure this is correct
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
