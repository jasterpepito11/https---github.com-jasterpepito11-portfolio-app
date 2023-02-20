/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    backgroundImage: {
      'profile-bg': "url('/assets/background-profile.png')",
      'dark-profile-bg': "url('/assets/dark-background-profile.png')",
      'portfolio-bg': "url('/assets/portfolio-logo.png')",
      'dark-portfolio-bg': "url('/assets/inverted-portfolio-logo.png')",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
        source: ["Source Code Pro", "sans-serif"],
        flood: ["Flood Std Regular", "sans-serif"]
      },
      dropShadow: {
        logo: "0 0 2em #646cffaa",
        "logo-tw": "0 0 2em #38bdf8aa",
      },
      height: {
        18: "4.5rem",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
});
