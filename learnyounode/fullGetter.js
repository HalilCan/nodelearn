var http = require('http');
var bl = require('bl');

var url = process.argv[2];

/* Interesting modularity
var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST'
}; */

var getUrl = http.get(url, function(response) {
	response.setEncoding('utf8');

	response.pipe(bl(function(err,data) {
		console.log(data.length);
		console.log(data.toString());
	}))
}).on('error', console.error);
