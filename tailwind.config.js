/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D9CD9",
        bg: "#000307",
        text: "#FFFFFF",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
      },
      spacing: {
        nav: "60px",
        panel: "324px",
      },
    },
  },
  plugins: [],
};
