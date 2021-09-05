const path = require("path");
module.exports = {
  entry: "/assets/js/main.js",
  module: {
    rules: [{}],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  mode: "production",
};
