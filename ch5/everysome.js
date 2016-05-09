function every(arr, p) {
	for (var i=0; i<arr.length; i++) {
		if (!p(arr[i])) {
			return false;
		}
	}
	return true;
}

function some(arr, p) {
	for (var i=0; i<arr.length; i++) {
		if (p(arr[i])) {
			return true;
		}
	}
	return false;
}


var arr = [1,2,3,4,5];
console.log(every(arr, function(i) { return i > 0 }));
console.log(every(arr, function(i) { return i % 2 == 0 }));

console.log(some(arr, function(i) { return i % 2 == 0 }));