const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, "src/main.js"),
  output: {
	filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: 'babel-loader',
    }],
  },
  plugins: [
	new HtmlWebpackPlugin({
		inject: true,
		template: "./public/index.html"
	}),
  ]
};