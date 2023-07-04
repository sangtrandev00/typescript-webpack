const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', // For production ???
  entry: './src/app.ts',
  devServer: {
    historyApiFallback: true, // Enable HTML5 History API fallback
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
    port: process.env.PORT || 3002,
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
    new CleanPlugin.CleanWebpackPlugin(),
  ],
};

// __dirname: global variable.
