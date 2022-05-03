module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  // tailwind.config.js
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
  ],
};
