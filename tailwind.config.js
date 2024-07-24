module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        section1Dark: "#10153e",
        section2Dark: "#0d1134",
        section3Dark: "#080b23",
        section4Dark: "#06091e",
        section5Dark: "#040715",
        section1: "#ffffff",
        section2: "#f1f1f1",
        section3: "#dedede",
        section4: "#d1d1d1",
        section5: "#c4c4c4",
        cardBackgroundDark: "#212641",
        cardBackground: "#ffffff",
        buttonHover: "#59595e",
        buttonHoverDark: "#06091F",
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(90deg, #ffffff 3.4%, #b7b7c2 100%)',
        'button-gradient-dark': 'linear-gradient(90deg, #c4c4c4 3.4%, #06091F 100%)',
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
          backgroundColor: '#59595e',
          cursor: 'pointer',
        },
        '.bg-button-gradient-dark': {
          backgroundImage: 'linear-gradient(90deg, #8f92a4 3.4%, #59595e 100%)',
        },
        '.button-hover-dark:hover': {
          backgroundImage: 'none',
          backgroundColor: '#06091F',
          cursor: 'pointer',
        },
      });
    },
  ],
};
