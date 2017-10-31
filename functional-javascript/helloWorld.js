	function upperCaser(input) {
		var chars = input.split('');
		for (var i = 0; i < chars.length; i++) {
			chars[i] = chars[i].toUpperCase();
		}
		return chars.join('');
	}	

	module.exports = upperCaser;