var express = require('express');
var mongoose = require('mongoose');

var app = express();
var apiController = require('./controllers/apiController')
mongoose.connect('mongodb://localhost/rest_test');

var port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public'));

apiController(app);

app.set('view engine', 'pug');

app.listen(port);
