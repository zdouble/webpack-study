const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');
module.exports = webpackMerge(webpackBaseConfig, {
  output: {
    filename: './[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
