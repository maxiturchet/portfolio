const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
     new CopyWebpackPlugin([{
       from: 'img/**/**',
       to: path.resolve(__dirname, 'dist')
     }]),
     new ImageminPlugin()
  ]
}