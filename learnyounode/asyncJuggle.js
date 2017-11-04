var http = require('http');
var bl = require('bl');

var urlArray_1 = [process.argv[2], process.argv[3], process.argv[4]];


/* Interesting modularity
var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST'
}; */

var getData = function(url, rank) {
	return http.get(url, function(response) {
	response.setEncoding('utf8');

	response.pipe(bl(function(err,data) {
		//console.log(data.length);
		//console.log(data.toString());
		printCollectedData(data.toString(), rank);
		}))
	}).on('error', console.error);
}

	var urlCount = 0;
	var data = [];
var printCollectedData = function(dataString, rank) {
	data[rank] = dataString;

	urlCount += 1;

	if (urlCount === 3) {
		return data.forEach(function(element) {
			console.log(element);
		})
	}
}

var getURLs = function (urlArray) {
	for (var i = 0; i < urlArray.length; i++) {
		getData(urlArray[i], i+1);
	};
}

getURLs(urlArray_1);