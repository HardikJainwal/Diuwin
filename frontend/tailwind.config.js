/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#ff4053', // Add your custom color here
        'custom-blue': '#13052E',
      },
    },
  },
  plugins: [],
}