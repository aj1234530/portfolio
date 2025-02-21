/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "secondary-color": "rgb(255, 51, 0)",
        link: "rgb(255, 51, 0)",
      },
      fontFamily: {
        garamond: ["EB Garamond", "sans-serif"],
      },
    },
  },
  plugins: [],
};
