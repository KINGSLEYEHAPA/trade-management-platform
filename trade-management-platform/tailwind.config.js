/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // enables class-based dark mode
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
