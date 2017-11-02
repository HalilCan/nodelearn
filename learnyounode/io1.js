var fs = require('fs');

var arguments = process.argv;
var filepath = arguments[2];
var fileBuffer = fs.readFileSync(filepath);

var index = 0;
var bufferReduce = function (buffer, callback, accumulator) {
	index += 1;
	if (buffer.length = 1) {
		return function(accumulator, buffer[0], index, accumulator);
		index = 0;
	} else {
		return bufferReduce(buffer.slice(1), callback, callback(accumulator, buffer[0], index - 1, buffer));
	}
}

function specificCharCount (array, char) {
	return bufferReduce(array, function(acc, val){
		if (val === '\n') {
			return acc+1;
		} else {
			return acc;
		}
	}, 0);
}

console.log()