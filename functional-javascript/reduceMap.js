module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function (a,b) {
		return a.concat([fn(b)]);
	}, []);
}