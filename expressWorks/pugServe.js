var path = require('path');
var express = require('express');
var app = express();

//This is how we specify the path to the template files in the folder 'templates':
app.set('views', path.join(_dirname, 'templates'));
//This is how we set the template engine
app.set('view engine', 'pug');

//This is how we serve the template page with the response
app.get('/home', function (req, res) {
	res.render('index', {date: new Date().toDateString});
});
app.listen(process.argv[2]);