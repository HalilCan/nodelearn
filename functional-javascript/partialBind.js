module.exports = function(namespace) {
	var report = function () {
		var args = [].slice.call(arguments);
		console.log(args.join(' '));
	};
	return report.bind(null, namespace);
}