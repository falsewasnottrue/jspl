var myrange = function(start, end, maybeStep) {
	var res = [];
	var step = maybeStep || 1
	for (var i = start; i<=end; i += step) {
		res.push(i);
	}
	return res;
}

var mysum = function(rng) {
	var res = 0;
	for (var i=0; i<rng.length; i++) {
		res += rng[i];
	}
	return res;
}

console.log(myrange(1,10))
console.log(mysum(myrange(1,10)))

console.log(myrange(1,10,2))