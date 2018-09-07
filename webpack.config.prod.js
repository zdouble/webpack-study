const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');
module.exports = webpackMerge(webpackBaseConfig, {
  output: {
    filename: './[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'production',
  devtool: 'source-map',
});
