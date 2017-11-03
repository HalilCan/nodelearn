var fs = require('fs');
var path = require('path');

//var filepath = process.argv[2];
//var extension = '.' + process.argv[3];

module.exports = function(filepath, extensionStr, callback) { 
	fs.readdir(filepath, function(err, files) {
	if (err) {
		return callback(err);
	}
	var array = new Array();
	var result = files.reduce(function(total, file){
		if (extensionStr.charAt(0) != '.') {
			//console.log(extensionStr);
			extensionStr = '.' + extensionStr;
		}
		if (extensionStr === path.extname(file)) {
			//console.log(typeof total);
			//console.log(typeof file);
			total[total.length] = file;
			return total;
		} else {
			return total; 
		}
	}, []);
	callback(false, result);
	});
}
