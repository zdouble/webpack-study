const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const speedMeasurePlugin = require('speed-measure-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.base');

const isAnalyze = process.argv.includes('--analyze');

const smp = new speedMeasurePlugin();

const getWebpackConfig = config => (isAnalyze ? smp.wrap(config) : config);

module.exports = getWebpackConfig(
  webpackMerge(webpackBaseConfig, {
    output: {
      filename: '[name].[chunkhash:8].js',
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].[chunkhash:8].chunk.js',
      publicPath: '/',
    },
    mode: 'production',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'client'),
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.scss$/,
          use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'client'),
        },
      ],
    },
    plugins: [
      new cleanWebpackPlugin(['dist']),
      new miniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].chunk.css',
      }),
      new optimizeCssAssetsPlugin(),

      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
      ...(isAnalyze
        ? [new bundleAnalyzerPlugin()]
        : []),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
          },
        },
      },
    },
  }),
);
