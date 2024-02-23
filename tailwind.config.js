/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        orange: "#DC780B",
        dark: "#150C01",
      },
    },
  },
  plugins: [],
}


const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
       extend: {container: {
        center: true,
      },
      colors: {
        orange: "#DC780B",
        dark: "#150C01",
      },},
   },
   plugins: [],
});