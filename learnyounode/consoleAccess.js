var nums = (process.argv).slice(2);
var total = nums.reduce(function(sum, value){
	return sum + Number(value);
},0);

console.log(total)