var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index',
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module : {
    rules : [
      {
        test : /\.js$/,
        include : APP_DIR,
        loader : 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
