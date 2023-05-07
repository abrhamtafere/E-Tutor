/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        'dmserif': ['DM Serif', 'serif'],
        'com': ['Comfortaa', 'cursive'],
      }
    },
  },
  plugins: [],
}

