"use strict";

const webpack = require("webpack")
const path = require("path")

module.exports = {
  entry: "./src/example.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
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
    port: 22000
  },
}
