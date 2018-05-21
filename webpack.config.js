/**
 * Created by xm on 2017/9/10.
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin') //css样式从js文件中分离出来

module.exports = {
  entry: {
    index: path.resolve(__dirname, './index.js'),
    vendors: ['redux', 'react']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    // 所有通过相对路径获取到的资源都会打到./目录下
    filename: '[name].js'
    // chunkFilename: '[id].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.jsx', '.sass'],
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.resolve(__dirname,  './src/index.html'),
      inject: true
    })
  ],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    inline: true,
    port: "5000"
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}