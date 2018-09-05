const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './src/app.js',
    bpp: './src/bpp.js',
    cpp: './src/cpp.js',
  },
  output: {
    filename: './[name].[hash:8].js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, './src'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, './src'),
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 10,
            name: 'images/[name].[hash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      chunks: ['app'],
    }),
    new htmlWebpackPlugin({
      filename: 'index2.html',
      template: './index.html',
      chunks: ['bpp'],
    }),
    new htmlWebpackPlugin({
      filename: 'index3.html',
      template: './index.html',
      excludeChunks: ['app'],
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
    }),
  ],
};
