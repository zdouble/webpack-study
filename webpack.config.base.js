const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './client/src/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 10,
            name: 'images/[name].[hash:8].[ext]',
          },
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'client'),
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
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
