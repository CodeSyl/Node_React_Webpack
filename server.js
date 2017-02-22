const express = require('express');
const app = express();
const port = (process.env.PORT || 6464);

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/src/index.html');
});

app.listen(port);