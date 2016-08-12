var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.ttf$/, loader: 'url' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack example app',
      template: './webpack-templates/dev.html',
      inject: false
    }),
    new CopyWebpackPlugin([
      { from : "../ext/", to: "./ext/" }
    ])
  ],
  devServer: {
    hot: true,
    colors: true
  }
};
