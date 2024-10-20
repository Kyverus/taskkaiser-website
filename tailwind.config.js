/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "ct-black-primary": "#101010",
        "ct-white-primary": "#efefef",
        "ct-black-secondary": "#202020",
        "ct-white-secondary": "#dfdfdf",
        "ct-yellow": "#ffc75e",
        "ct-blue": "#00b8b8",
      },
    },
  },
  plugins: [],
};
