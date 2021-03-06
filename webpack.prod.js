const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.[hash].js',
    publicPath: './',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});