"use strict";

const webpack = require("webpack")

module.exports = {
  entry: "./src/example.ts",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  devServer: {
    contentBase: 'dist',
    port: 23000
  },
}
