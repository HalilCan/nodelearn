var path = require('path');
var express = require('express');
var app = express();

//To parse x-www-form-urlencoded request bodies, Express.js can use urlencoded()
//middleware from the body-parser module.
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

//This is how we specify the path to the template files in the folder 'formtemplates':
app.set('views', path.join(__dirname, 'formtemplates'));
//This is how we set the template engine
app.set('view engine', 'pug');

//This is how we serve the template page with the response
app.get('/home', function (req, res) {
	res.render('index', {date: (new Date()).toDateString()});
});
app.listen(process.argv[2]);

app.post('/form', function(req, res) {
	//this is where we handle the POST request to the /form path
	
});

