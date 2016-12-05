var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.test.dev');

var app = express();
var compiler = webpack(config);

// Proxy to API server
var proxy = require('http-proxy').createProxyServer({
  target: 'http://localhost'
})
app.use('/api', function(req, res) {
  proxy.web(req, res)
})

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'testindex.html'));
});

app.listen(80, 'admin.gulsy.local', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost');
});
