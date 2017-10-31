module.exports = function countWords(inputWords) {
	return inputWords.reduce((function(acc, val) {
		if (val in acc) {
			acc[val]++;
		} else {
			acc[val] = 1;
		}
		return acc;
		}), {});
}