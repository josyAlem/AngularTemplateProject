const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    main: "src/main.ts",
    polyfills: "src/polyfills.ts",
  },
  output: {
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/ang-proj"),
  },
};
