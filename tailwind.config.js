/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      Mobile: { "min": "375px", "max": "600px" },
      Tab: { "min": "600px", "max": "900px" },
      Desktop: "1400px",
    },
    colors: {
      // ### Primary
      "Light-Cyan": "hsl(193, 38%, 86%)",
      "Neon-Green": "hsl(150, 100%, 66%)",

      // ### Neutral
      "Grayish-Blue": "hsl(217, 19%, 38%)",
      "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
      "Dark-Blue": "hsl(218, 23%, 16%)",
    },
    fontSize: {
      ms: "28px"
    },
    fontFamily: {
      "Manrope": ["Manrope", "sans-serif"],
    },
    fontWeight: {
      "lg": 800
    },
    extend: {},
  },
  plugins: [],
}
