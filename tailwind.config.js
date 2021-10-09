const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "bounce-up": {
          from: {
            opacity: "0",
            transform: "translateY(50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "bounce-left": {
          from: {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "bounce-up":
          "bounce-up cubic-bezier(0.4, 0.885, 0.32, 1.275) 0.2s forwards",
        "bounce-left":
          "bounce-left cubic-bezier(0.4, 0.885, 0.32, 1.275) 0.2s 0.2s forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
