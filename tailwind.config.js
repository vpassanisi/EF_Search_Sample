const materialPalette = require("./materialPalette.js");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
  theme: {
    boxShadow: {
      default: "0px 4px 4px 0px rgba(0,0,0,0.25)"
    },
    colors: materialPalette,
    extend: {
      screens: {
        xxl: "1812px"
      },
      maxHeight: {
        "64": "16rem"
      },
      height: {
        "fit-content": "fit-content"
      },
      transitionProperty: {
        shadow: "box-shadow"
      }
    }
  },
  variants: {},
  plugins: []
};
