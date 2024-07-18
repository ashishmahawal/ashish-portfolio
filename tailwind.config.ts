// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      height: {
        '100': '28rem',  // Example: Custom height class
        '120': '32rem',  // Example: Custom height class
      },
      width: {
        '100': '28rem',  // Example: Custom height class
        '120': '32rem',  // Example: Custom height class
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideInLeft: "slideInLeft 0.5s ease-in-out",
        slideInRight: "slideInRight 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  }
};
