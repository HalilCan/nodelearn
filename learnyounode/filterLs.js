var fs = require('fs');
var path = require('path');

var filepath = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(filepath, function(err, files) {
	if (err) {
		return console.log(err);
	}
	files.reduce(function(total, file){
		if (extension === path.extname(file)) {
			console.log(file);
			return total + 1;
		} else {
			return total; 
		}
	}, 0);
});