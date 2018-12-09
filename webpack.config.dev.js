const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');
module.exports = webpackMerge(webpackBaseConfig, {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'client/public'),
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'client'),
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'client'),
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client/public'),
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
