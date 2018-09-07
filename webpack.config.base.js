const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 10,
            name: 'images/[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
    }),
  ],
};
