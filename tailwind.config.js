/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#5D356D",
        primary: "#5D356D",
        primary2: "#9A6FA3",
        secondary: "#79CFFF",
      },
    },
  },
  plugins: [],
};
