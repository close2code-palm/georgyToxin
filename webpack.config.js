const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import HtmlWebpackPugPlugin from 'html-webpack-pug-plugin';

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    devServer: {
      port: 3080,
    },
    module: {
      rules: [
        { 
          test: /\.pug$/,
          use: ['pug-loader']
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.svg$/,
          use: 'file-loader'
        },
        {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file-loader?name=[name].[ext]'
        }
      ]
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: 'src/index.html' }],
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.pug'
      }),
      new HtmlWebpackPugPlugin()
    ]
};