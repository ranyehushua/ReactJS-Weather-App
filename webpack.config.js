var path = require('path');
var HtmlWebpack = require('html-webpack-plugin');
var HtmlWebpackConfig = new HtmlWebpack({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HtmlWebpackConfig]
};

module.exports = config;