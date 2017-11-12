var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	// We will accept GET requests only.
	if (req.method !== 'GET') {
		return res.end('send gets\n');
	}

	// We want to return a JSON response only.
	res.writeHead(200, {'Content-Type': 'application/json'})

	// Use URL to parse the request and get a URL object from it.
	var urlObject = url.parse(req.url, true);
	
	// Get the path from the url
	var urlPath = urlObject.pathname;

	// Get the full iso date sent in the url
	// This didn't work for a reason: var dateString = urlObject.searchParams.get('iso');
	var dateString = urlObject.query.iso;

	var dateObject = new Date(dateString);
	var timeStamp = dateObject.getTime();
	var hours = dateObject.getHours();
	var minutes = dateObject.getMinutes();
	var seconds = dateObject.getSeconds();

	// Construct the JSON object that we will pipe to response later
	var jsonDate = {};
	if (urlPath === '/api/unixtime') {
		jsonDate = {"unixtime" : timeStamp};
	} else if (urlPath === '/api/parsetime') {
		jsonDate = {
			"hour" : hours,
			"minute" : minutes,
			"second" : seconds,
		};
	}

	// Now end the response with jsonDate (stringify, as it must be a string)
	return res.end(JSON.stringify(jsonDate));
}).listen(process.argv[2]);