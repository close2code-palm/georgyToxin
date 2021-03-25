// const webpack = require('webpack');
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    port: 3080
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
    new PrettierPlugin({
      printWidth: 80, // Specify the length of line that the printer will wrap on.
      tabWidth: 2, // Specify the number of spaces per indentation-level.
      useTabs: false, // Indent lines with tabs instead of spaces.
      semi: true, // Print semicolons at the ends of statements.
      encoding: 'utf-8', // Which encoding scheme to use on files
      extensions: ['.js', '.pug', '.sass'] // Which file extensions to process
    }),
    new ESLintPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/index.html' }]
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
    new HtmlWebpackPugPlugin()
  ]
}