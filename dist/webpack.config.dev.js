"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  // For production ???
  entry: './src/app.ts',
  devServer: {
    historyApiFallback: true,
    // Enable HTML5 History API fallback
    "static": [{
      directory: path.join(__dirname)
    }],
    port: 3000
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve('./index.html')
  }), new CopyWebpackPlugin({
    patterns: [{
      from: 'src/**/*.ts',
      // Specify the TypeScript files to be copied
      to: '' // Leave it empty to preserve the directory structure

    }]
  })]
};