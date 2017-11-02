var fs = require('fs');

var arguments = process.argv;
var filepath = arguments[2];
var fileBuffer = fs.readFileSync(filepath);

var bufferReduce = function (buffer, callback, accumulator) {
	if (buffer.length === 0) {
		return accumulator;
	} else if (buffer.length === 1) {
		return callback(accumulator, buffer[0]);
	} else if (buffer.length > 1) {
		return bufferReduce(buffer.slice(1), callback, callback(accumulator, buffer[0]));
	} 
}

var specificCharCount = function (array, char) {
	return bufferReduce(array, function(acc, val){
		if (String.fromCharCode(val) == char) {
			return acc+1;
		} else {
			return acc;
		}
	}, 0);
}

console.log(specificCharCount(fileBuffer, '\n'));