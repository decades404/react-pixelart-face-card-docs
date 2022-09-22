/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },

      screens:{
        "sm": "300px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px"
      },

      fontFamily: {
        press: ['"Press Start 2P"'],
      },
    },
  },
  plugins: [require("daisyui")],
}
