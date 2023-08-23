/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          normal: "#8d99af",
          focus: "#2b2d42",
          primary_bg: "#212529",
        },
        normal: "#333333",
      },
    },
  },
  plugins: [],
};
