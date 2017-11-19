var path = require('path');
var stylus = require('stylus');

var express = require('express');
var app = express();

//To parse x-www-form-urlencoded request bodies, Express.js can use urlencoded()
//middleware from the body-parser module.
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(process.argv[3] || path.join(__dirname, 'stylishtemplate')));
//This is how we specify the path to the template files in the folder 'templates':
app.set('views', (process.argv[3] || path.join(__dirname, 'stylishtemplate')) );
//This is how we set the template engine
app.set('view engine', 'pug');

app.use(stylus.middleware(process.argv[3]));

app.get( function (req, res) {
	console.log(req.body);
	res.render('index', {date: (new Date()).toDateString()});
});

app.listen(process.argv[2]);

