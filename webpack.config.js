var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  context : __dirname,

  entry: {
    fuelism: './src/app'
  },

  output : {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css")
  ],

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['jsx-loader?harmony']
      },

      {
          test: /\.es6$/,
          loader: 'babel-loader?blacklist=strict'
      },

      // Extract css files
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      // You could also use other loaders the same way. I. e. the autoprefixer-loader

      // allow less files to load urls pointing to font assets
      // @TODO: figure out why this is necessary and do it better
      {
          test: /\.(woff|ttf|eot|svg)$/, loader: 'file-loader'
      }
    ]
  }
};
