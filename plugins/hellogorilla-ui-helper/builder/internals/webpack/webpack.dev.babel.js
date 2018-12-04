/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cheerio = require('cheerio')

module.exports = require('./webpack.base.babel')({
  // Add hot reloading in development
  entry: [
    'react-hot-loader/patch',
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'app/index.js'), // Start with js/index.js
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  babelQuery: {
    presets: ['es2015', 'react', 'stage-0'],
    plugins: [
      ['react-hot-loader/babel'],
      ['transform-class-properties'],
      [
        'transform-runtime',
        {
          polyfill: false,
          regenerator: true,
        },
      ],
    ],
  },

  // Add development plugins
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      templateContent: templateContent(), // eslint-disable-line no-use-before-define
    }),
  ],

  // Emit a source map for easier debugging
  devtool: 'cheap-module-eval-source-map',
})

/**
 * We dynamically generate the HTML content in development.
 */
function templateContent() {
  const html = fs
    .readFileSync(path.resolve(process.cwd(), 'app/index.html'))
    .toString()

  return html
}
