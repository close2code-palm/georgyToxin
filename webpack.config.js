const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import HtmlWebpackPugPlugin from 'html-webpack-pug-plugin';

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.s[a|c]ss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.svg$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: 'src/index.html' }],
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'output.pug'
      }),
      new HtmlWebpackPugPlugin()
    ]
};