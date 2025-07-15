// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
const preline = require('preline/plugin')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/preline/**/*.js"  // ajoute cette ligne
  ],
  theme: {
    extend: {},
  },
  plugins: [preline],  // ajoute le plugin
}

