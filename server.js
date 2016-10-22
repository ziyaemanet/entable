const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ silent: true });

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');

// CONSTANTS
const PORT = process.env.PORT || 8000;
const MONGO_URI = 'mongodb://localhost/test';

// INITALIZE SERVER
const app = express();


// CONFIG MONGOOSE
mongoose.Promise = Promise;

mongoose.connect(MONGO_URI, (err) => {
  console.log(err || `Mongo connected to ${MONGO_URI}`);
});

// 3RD PARTY MIDDLEWARE
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// GENERAL MIDDLEWARE
app.use(express.static('build'));

// WEBPACK CONFIG
const compiler = webpack(webpackConfig);
app.use(webpackHotMiddleware(compiler));
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  hot: true,
  path: webpackConfig.output.path,
}));

// ERROR CHECKING
app.use((req, res, next) => {
  res.handleSend = (err, data) => res.status(err ? 400 : 200).send(err || data);
  next();
});

// ROUTES
app.use('/api', require('./routes/api'));

// ALLOW REACT ROUTING
app.use('*', (req, res) => res.sendFile(path.join(__dirname, 'build/index.html')));

// SERVER LISTEN
app.listen(PORT, (err) => console.log(err || `Express listening on port ${PORT}`));
