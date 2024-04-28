/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-bg": "linear-gradient(#30D5C8, #1C1475ff)",
      },
      colors: {
        "color-primary": "white",
        "color-secondary": "#1C1475ff",
        "color-third": "#30D5C8",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '50px'
      },
    },
  },
  plugins: [],
}

