var slice = Array.prototype.slice;

function logger(namespace) {
	//return (a => (console.log).apply(namespace, [arguments]));
	return function print () {
		var args = [].slice.call(arguments);
		args.unshift(namespace);
		console.log.apply(namespace, args);
	}
}

module.exports = logger;