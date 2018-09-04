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
    ],
  },
};
