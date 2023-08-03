/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      "primaryColor" : "#2D3758",
      "secondaryColor" : "#131725",
      "backGroundColor" : "#0e111b",
      "textColor" : "#f8f9fc",
      "accentColor" : "#5a6daa",
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}