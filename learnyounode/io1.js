var fs = require('fs');

var arguments = process.argv;
var filepath = arguments[2];
var fileBuffer = fs.readFileSync(filepath);

function bufferReduce (buffer, function, accumulator) {
	if (buffer.length = 1) {
		return function(buffer[1]);
	} else {
		return bufferReduce(buffer.slice(1), function, function(buffer[1], accumulator));
	}
}

function specificCharCount (array, char) {
	return bufferReduce(array, function(val, acc){
		if (val === '\n') {
			return acc+1;
		} else {
			return acc;
		}
	}, 0);
}

console.log()