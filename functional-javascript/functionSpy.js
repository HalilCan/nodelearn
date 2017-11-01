module.exports = function Spy(target,method) {
	// use an object so we can pass by reference, not value
    // i.e. we can return result, but update count from this scope
	var spy = {
		args: [],
		count: 0
	};

	var cached_function = target[method];
	// replace method with spy method

	target[method] = function() {
		var args = [].slice.apply(arguments);
		spy.count++; // track function was called
		spy.args.push(args);
		return cached_function.apply(this, arguments); // invoke original function
	};

	return spy;
}