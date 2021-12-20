const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    main: "src/main.ts",
    polyfills: "src/polyfills.ts",
  },
  module: {
    generator: {
      asset: {
        // Generator options for asset modules

        // Customize publicPath for asset modules, available since webpack 5.28.0
        publicPath: "assets/",
      },
    },
  },
  output: {
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/ang-proj"),
  },
};
