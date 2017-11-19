var path = require('path');
var stylus = require('stylus');

var express = require('express');
var app = express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'stylishtemplate')));
//This is how we specify the path to the template files in the folder 'templates':
app.set('views', (process.argv[3] || (path.join(__dirname, 'stylishtemplate')));
//This is how we set the template engine
app.set('view engine', 'pug');

app.use(stylus.middleware(process.argv[3]));

app.get

app.listen(process.argv[2]);

