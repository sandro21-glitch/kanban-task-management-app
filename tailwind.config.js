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
      },
      minWidth: {
        sidebarWidth: "300px",
      },
    },
  },
  plugins: [],
};
