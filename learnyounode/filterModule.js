var fs = require('fs');
var path = require('path');

//var filepath = process.argv[2];
//var extension = '.' + process.argv[3];

var getExt = function(filepath, extensionStr, callback) { 
	if (err) {
		return console.log(err);
	}

	extensionStr = '.' + extensionStr;
	fs.readdir(filepath, function(err, files) {
	return files.reduce(function(total, file){
		if (extensionStr === path.extname(file)) {
			return total.push(file);
		} else {
			return total; 
		}
	}, []);
	});
}

module.exports = getExt;