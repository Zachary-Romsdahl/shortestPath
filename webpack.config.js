const path = require('path');

module.exports = {
  watch: true,
  entry: {
    main: path.resolve(__dirname, 'client/src/index.jsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};