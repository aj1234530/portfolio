/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "secondary-color": "rgb(255, 51, 0)",
      },
    },
  },
  plugins: [],
};
