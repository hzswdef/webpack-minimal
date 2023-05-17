const path = require("path");
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    dscss: ["./src/scss.js"],
    javascript: ["./src/javascript.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: '../dist/',
    clean: true
  },
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: [MiniCss.loader, 'css-loader', 'sass-loader',]
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new MiniCss({
      filename: "style.css"
    })
  ]
};