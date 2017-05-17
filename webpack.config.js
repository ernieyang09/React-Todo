const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/build/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./app/app.jsx'],
  output:{
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js'
  },
  resolve:{
    modules:['node_modules']
  },
  module:{
    rules: [
            {
                test: /\.js[x]?$/,
                enforce: 'pre',
                include: path.resolve(__dirname, 'app'),
                loader: 'eslint-loader'
            },
            {
              loader:'babel-loader',
              test: /\.js[x]$/,
              include: path.resolve(__dirname, 'app')
            },
            {
              loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
              }),
              test: /\.css$/,
              include: path.resolve(__dirname, 'app/assets')
            }
    ]
  },
  devServer:{
    port:3000,
    contentBase:'./build',
    inline:true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('assets/styles/bundle.css')
  ]
}
