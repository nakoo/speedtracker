'use strict'

const webpack = require('webpack')

let config = {
  entry: [
    'whatwg-fetch',
    './app/App'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: '_site',
    watchContentBase: true,
    port: 4000
  }
}

module.exports = config
