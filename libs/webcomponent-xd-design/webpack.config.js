const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    "webcomponent-xd-design": path.resolve(__dirname, "src/index.js")
  },
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
  }
};