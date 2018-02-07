var express = require('express');
var app = express();

var controllers = require('./controllers');
app.use('/api', controllers);

module.exports = app;
