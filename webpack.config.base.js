const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './client/src/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, 'client'),
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'client'),
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './client/public/index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
    }),
  ],
};
