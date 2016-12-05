var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: (
        process.env.DEBUG ? 'eval-source-map' : 'cheap-module-eval-source-map'),
    entry: [
        'webpack-hot-middleware/client',
        './src/test',
        'babel-polyfill/lib/index',
        './src/polyfill'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
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
