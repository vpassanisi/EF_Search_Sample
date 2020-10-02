const materialPalette = require("./materialPalette.js");

module.exports = ({ dev }) => ({
  purge: {
    enabled: !dev,
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
      height: {
        "72": "18rem",
        "80": "20rem",
        "88": "22rem",
        "96": "24rem",
        "100": "25rem",
        "108": "27rem",
        "116": "29rem",
        "124": "31rem",
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh"
      },
      transitionProperty: {}
    }
  },
  variants: {},
  plugins: []
});
