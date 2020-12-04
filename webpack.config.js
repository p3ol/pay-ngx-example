const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
    ),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[fullhash].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8888,
    host: 'localhost',
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};
