// CONSTANTS
const PORT = process.env.PORT || 8000;

// PACKAGE REQUIRES
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
// require('dotenv').config();
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');


// APP DECLARATION
const app = express();
const server = http.createServer(app);

//WEBPACK CONFIG
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
 noInfo: true,
 publicPath: webpackConfig.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));


// GENERAL MIDDLEWARE
app.use(express.static('build'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use('/api', require('./routes/api'));

app.get('*', (req, res) => {
  var filepath = path.resolve('./build/index.html');
  res.sendFile(filepath);
});

// SERVER LISTEN
server.listen(PORT, (err) => {
 if (err) throw err;
 process.stdout.write(`Server listening at http://localhost:${PORT}`);
});
