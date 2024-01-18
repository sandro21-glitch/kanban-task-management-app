/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mediumPurple: "#635fc7",
        lightGray: "#828fa3",
        hoverGray: "rgba(99,95,199,.1)",
        boardColor: "#f4f7fd",
        boardColorDark: "#20212c",
        darkMode: "#2b2c37",
        lightDark: "#3e3f4e",
        mediumDark: "#3e3f4e",
        gradientGray: "#252631",
        sidebarHover: "#625fc71e",
        borderColor: "rgba(130,143,163,.25)",
      },
      minWidth: {
        sidebarWidth: "300px",
      },
    },
  },
  plugins: [],
};
