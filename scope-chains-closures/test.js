function foo() {
	var bar = 0;
	quux = 2;
	function zip() {
		var quux = 1;
		bar = true;
	}
	return zip;
}