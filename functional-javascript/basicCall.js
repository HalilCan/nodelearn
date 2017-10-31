module.exports = function duckCount() {
	var args = Array.prototype.slice.call(arguments);
	return (args.filter(obj => (Object.prototype.hasOwnProperty.call(obj, 'quack')))).length;
}