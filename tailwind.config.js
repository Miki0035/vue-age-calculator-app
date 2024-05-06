/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./src/**/*.vue"],
  theme: {
    extend: {},
    colors: {
      purple: "hsl(259, 100%, 65%)",
      lightRed: "hsl(0, 100%, 67%)",
      white: "hsl(0, 0%, 100%)",
      offWhite: "hsl(0, 0%, 94%)",
      lightGrey: "hsl(0, 0%, 86%)",
      smokeyGrey: "hsl(0, 1%, 44%)",
      offBlack: "hsl(0, 0%, 8%)",
    },
    fontFamily: {
      poppinsExtraBold: ["Poppins-ExtraBold", "sans-serif"],
      sans: ['Poppins-ExtraBold', ...defaultTheme.fontFamily.sans]  
    },
    fontWeight: {
      light: "400",
      semiBold: "700",
      bold: "800",
    },
  },
  plugins: [],
};
