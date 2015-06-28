var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  debug: true,
  entry: {
    main: path.resolve(__dirname, 'src/main.js'),
    style: path.resolve(__dirname, 'src/main.less')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};