var http = require('http');
var map = require('through2-map');


var server = http.createServer(function(req, res) {
	//We only want a request method of POST
	if (req.method !== 'POST') {
		return res.end('send posts\n');
	}

	// We want to get the streaming characters and uppercase them
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);

}).listen(process.argv[2]);