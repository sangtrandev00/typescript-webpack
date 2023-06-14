const path = require('path');

module.exports = {
  mode: 'development', // For production ???
  entry: './src/app.ts',
  devServer: {
    historyApiFallback: true, // Enable HTML5 History API fallback
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
    port: 3000,
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
};

// __dirname: global variable.
