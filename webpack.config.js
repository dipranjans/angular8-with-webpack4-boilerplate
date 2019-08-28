const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PATHS = {
  src: path.join(__dirname, "/src/")
};

module.exports = {
  devServer: {
    contentBase: PATHS.src,
    watchContentBase: true, // its for live reload issue resolved
    hot: true,
    inline: true,
    port: 8090
  },
  mode: "development",
  entry: [path.join(PATHS.src, "entry.js")],
  output: {
    path: path.resolve(__dirname, "/build/"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss", ".html"]
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        loaders: ["to-string-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.src, "index.html")
    })
  ]
};
