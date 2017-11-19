var express = require('express');
var app = express();

var fs = require('fs');

var requestPort = process.argv[2];
var filePath = process.argv[3];

app.get('/books', function(req, res) {
	// Write response head
	res.writeHead(200, {'content-type': 'application/json'});

	// This line opens the file as a readable stream
	var readStream = fs.createReadStream(filePath);

	var jsonObject = '';

	// This will wait until we know the readable stream is actually valid before piping
	readStream.on('open', function(read) {
		//console.log(read);
		// This just pipes the stream to the the response
		readStream.pipe(jsonObject);
		console.log(jsonObject)
	});

	readStream.on('error', function(err) {
		res.end(err);
	});
});

app.listen(requestPort);