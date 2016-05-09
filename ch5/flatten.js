function flatten(arrs) {
	var res = [];
	arrs.forEach(function(arr) {
  		res = res.concat(arr);
	});
	return res;
}

var arrs = [[1,2,3],[4],[],[5,6]];
var arr = flatten(arrs);

console.log(arr);