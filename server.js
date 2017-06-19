var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  progress: true,
  colors: true,
  hot: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/', 'index.html'));
});

app.listen(3000, 'localhost', error => {
	if (error) {
    	console.log(error);
    	return;
  	}
  	console.log('Listening at http://localhost:3000');
});