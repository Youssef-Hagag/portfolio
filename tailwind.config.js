const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        section1Dark: "#10153e",
        section2Dark: "#0d1134",
        section3Dark: "#0b0f2f",
        section4Dark: "#070b29",
        section5Dark: "#030620",
        section1: "#ffffff",
        section2: "#f1f1f1",
        section3: "#dedede",
        section4: "#d1d1d1",
        section5: "#c4c4c4",
        cardBackgroundDark: "#212641",
        cardBackground: "#ffffff",
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(90deg, #ffffff 3.4%, #b7b7c2 100%)',
        'button-gradient-dark': 'linear-gradient(90deg, #c4c4c4 3.4%, #06091F 100%)',
        aurora: "aurora 60s linear infinite",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
          aurora: {
            from: {
              backgroundPosition: "50% 50%, 50% 50%",
            },
            to: {
              backgroundPosition: "350% 50%, 350% 50%",
            },
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-button-gradient': {
          backgroundImage: 'linear-gradient(90deg, #ffffff 3.4%, #b7b7c2 100%)',
        },
        '.button-hover:hover': {
          backgroundImage: 'none',
          backgroundColor: '#b7b7c2',
          cursor: 'pointer',
        },
        '.bg-button-gradient-dark': {
          backgroundImage: 'linear-gradient(90deg, #8f92a4 3.4%, #59595e 100%)',
        },
        '.button-hover-dark:hover': {
          backgroundImage: 'none',
          backgroundColor: '#59595e',
          cursor: 'pointer',
        },
      });
    },
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}