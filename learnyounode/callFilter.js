var fs = require('fs');
var path = require('path');
var filter = require('./filterModule');

var directory = process.argv[2];
var extension = '.' + process.argv[3];

function count (error, lines) {
	for (var i = 0; i < lines.length; i++) {
		console.log(lines[i]);
	}
}

filter.getExt(directory, extension, count);