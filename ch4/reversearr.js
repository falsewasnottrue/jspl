var reverseArray = function(arr) {
	var res = [];
	for (var i = arr.length-1; i >= 0; i--) {
		res.push(arr[i]);
	}
	return res;
}

var reverseArrayInPlace = function(arr) {
	var len = arr.length - 1
	for (var i=0; i<len/2; i++) {
		var tmp = arr[i];
		arr[i] = arr[len-i];
		arr[len-i] = tmp;
	}
}

var array = [1,2,3,4,5];
console.log(reverseArray(array))
console.log(array)

reverseArrayInPlace(array);
console.log(array)