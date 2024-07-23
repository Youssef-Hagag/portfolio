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
        section1: "#cfcfd9",
        section2: "#a5a5b2",
        section3: "#7e7e87",
        section4: "#56565c",
        section5: "#434346",
        cardBackgroundDark: "#212641",
        cardBackground: "#56565c",
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
  plugins: [],
}
