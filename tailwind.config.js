/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Balaleen Solid"],
      "display-line": ["Balaleen Line"],
      body: ["Cutive Mono"],
      header: ["Questrial"],
    },
  },
  plugins: [],
  darkMode: "class",
};
