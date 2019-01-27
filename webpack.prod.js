const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    publicPath: './',
  },
  plugins: [
    new webpack.DefinePlugin({
      BASENAME: JSON.stringify('/Portfolio'),
      BUILD: JSON.stringify(new Date().toLocaleString())
    })
  ],
});