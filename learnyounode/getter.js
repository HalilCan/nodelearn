var http = require('http');

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

	response.on('data', function(data) {
		console.log(data);
	})
	//response.on('data', console.log);

	response.on('error', console.error);
}).on('error', console.error);
