var index = 0;
function reduce (arr, callback, init) {
	index += 1;
	if (arr.length === 0) {
		return init;
	} else if (arr.length === 1) {
		return callback(init, arr[0], index, init)
	} else return reduce (arr.slice(1), callback, callback(init, arr[0], index - 1, arr))
}

module.exports = reduce;