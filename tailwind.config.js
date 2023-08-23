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
      keyframes: {
        Toright: {
          '0%': { transform:'translateX(-50%)',opacity:'0'},
          '100%': { transform:'translateX(0)',opacity:'1'}
      }
    },
    animation:{
      'ToRight':'Toright 1s linear'
    }
  },
},
plugins: [],
};
