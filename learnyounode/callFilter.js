var fs = require('fs');
var path = require('path');
var filter = require('./filterModule');

var directory = process.argv[2];
var extension = process.argv[3];

filter(directory, extension, function (error, lines) {
	for (var i = 0; i < lines.length; i++) {
		console.log(lines[i]);
	}
});