/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--text-color)",
        secondary: "var(--text-color-secondary)",
        background: "var(--bg-color)",
      },
    },
    fontFamily: {
      display: ["Balaleen Solid"],
      "display-line": ["Balaleen Line"],
      body: ["Cutive Mono"],
      header: ["Questrial"],
    },
  },
  plugins: [require("tailwindcss-safe-area")],
  darkMode: "class",
};
