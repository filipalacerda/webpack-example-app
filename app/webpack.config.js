const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.ttf$/,
        loader: 'url'
      }
    ]
  }
};
