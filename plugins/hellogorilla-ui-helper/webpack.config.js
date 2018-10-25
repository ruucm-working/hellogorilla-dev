var isProd = process.env.NODE_ENV === 'production'
const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

function getPlugins() {
  var plugins = []

  // Always expose NODE_ENV to webpack, you can now use `process.env.NODE_ENV`
  // inside your code for any environment checks; UglifyJS will automatically
  // drop any unreachable code.
  plugins.push(
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // // new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.ProvidePlugin({
    //   // make fetch available
    //   fetch: 'exports?self.fetch!whatwg-fetch',
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    })
  )
  // Conditionally add plugins for Production builds.
  if (isProd) {
    plugins.push(new UglifyJSPlugin())
    plugins.push(new CompressionPlugin())
  } else {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}

function getBabelPlugins() {
  var plugins = []

  // Conditionally add plugins for Production builds.
  if (!isProd) {
    plugins.push(require('babel-plugin-styled-components').default)
  }

  return plugins
}

const webpackConfig = {
  devtool: 'source-map',

  entry: {
    // Main
    // 'js/harbor': path.resolve(__dirname, 'app/components/Harbor/index.js'),
    // // Shortcodes
    // 'js/admin': path.resolve(__dirname, 'app/components/Admin/admin.js'),
    // 'js/shortcodes': path.resolve(
    //   __dirname,
    //   'app/components/Shortcodes/shortcodes.js'
    // ),
    // 'js/widget': path.resolve(__dirname, 'app/components/Widget/widget.js'),
    // Chief Mate
    // 'js/Program01': path.resolve(
    //   __dirname,
    //   'app/components/ProgramPages/Program01/index.js'
    // ),
    // 'js/programingIsFun': path.resolve(
    //   __dirname,
    //   'app/components/ProgramPages/ProgramingIsFun/index.js'
    // ),
    // Web Components
    'js/WebComponents': path.resolve(
      __dirname,
      'app/components/WebComponents/index.js'
    ),
    'js/AppStyles': path.resolve(
      __dirname,
      'app/components/AppStyles/index.js'
    ),
    // vendors: ['es5-shim', 'es6-shim', 'es6-promise', 'babel-polyfill'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
        options: {
          // plugins: [require('babel-plugin-styled-components').default],
          plugins: getBabelPlugins(),
        },
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          outputPath: '../../../../wp-content/dist/fonts/',
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '../../../../wp-content/dist/images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          },
        ],
      },
    ],
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  plugins: getPlugins(),
  // plugins: [
  //   // new BundleAnalyzerPlugin(),
  //   new webpack.DefinePlugin({ //<--key to reduce React's size
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   }),
  //   // new webpack.optimize.DedupePlugin(),
  // ],
}
// Conditionally add plugins for Production builds.
if (isProd) {
  webpackConfig.devtool = 'cheap-source-map'
}

module.exports = webpackConfig
