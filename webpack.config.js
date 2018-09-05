const path = require('path');
module.exports = {
  entry: './app.js',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, './dist/test'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, './app.js'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, './style.css'),
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 10,
            name: 'images/[name].[hash].[ext]',
            publicPath: './dist/test/',
          },
        },
      },
    ],
  },
};
