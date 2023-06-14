const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development', // For production ???
  entry: './src/app.ts',
  devServer: {
    historyApiFallback: true, // Enable HTML5 History API fallback
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
    ],
    port: process.env.PORT || 3000,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
      // { parser: { system: false } }, // Add this line
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
  ],
};

// __dirname: global variable.
