var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/polyfill',
    './src/test'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'test.js',
    publicPath: '/static'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
      loaders: [
          {test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src')},
          {test: /\.less$/, loader: "style!css!less"},
          {test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1"},
          {test: /\.jpg$/, loader: "file-loader"},
          {test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000'}
      ]
  }
};
