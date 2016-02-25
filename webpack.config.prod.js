var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: __dirname + "/client/index.js",

  output: {
    path: __dirname + '/static/dist/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style','css?modules','sass'),
      },
      {
        test: /\.jsx*$/,
        exclude: 'node_modules',
        loader: 'babel',
      }
    ],
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
    new ExtractTextPlugin("app.css"),
  ],
};
