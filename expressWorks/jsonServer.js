var express = require('express');
var app = express();

var fs = require('fs');

var requestPort = process.argv[2];
var filePath = process.argv[3];

app.get('/books', function(req, res) {
	// Write response head
	//res.writeHead(200, {'content-type': 'application/json'});

	var object;
	//We won't use a stream to read the file, instead just read it wih readFile
	fs.readFile(filePath, 'utf8', function(err, rdString) {
		if (err) res.sendStatus(500);

		object = JSON.parse(rdString);
		res.json(object);
	})
});

app.listen(requestPort);