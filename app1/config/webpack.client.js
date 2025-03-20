const path = require('path');
const { merge } = require('webpack-merge');
const shared = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: 'client',
  target: 'web',
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/client/index')],
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins: [
    moduleFederationPlugin.client,
    new HtmlWebpackPlugin({
      template: '../app1/public/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
  },
};

module.exports = merge(shared, webpackConfig);
