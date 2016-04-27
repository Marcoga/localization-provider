var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  cache: true,
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[chunkhash].bundle.js'
  },

  module: {
   loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.json$/,
      loaders: ['json']
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=8192'
    }, {
      test: /\.less$/,
      loader: 'style!css!less?strictMath&noIeCompat'
    }, {
      test: /\.(jpe?g|gif)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }]
  },

  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new HtmlWebpackPlugin({
      favicon: './images/logo.png',
      template: 'index_template.html'
    })
  ]
}
