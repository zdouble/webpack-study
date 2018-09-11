const path = require('path');
const webpackMerge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.base');
module.exports = webpackMerge(webpackBaseConfig, {
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    publicPath: '/',
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [new cleanWebpackPlugin(['dist'])],
});
