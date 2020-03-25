const tailwindcss = require('tailwindcss');
const apref = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss('tailwind.js'),
    apref,
  ],
};
