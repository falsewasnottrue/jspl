function arrToList(arr) {
	if (arr.length == 0) {
		return null;
	} else {
		return {
			value: arr[0],
			rest: arrToList(arr.slice(1))
		}
	}
}

function listToArray(l) {
	if (l == null) {
		return [];
	} else {
		var res = listToArray(l.rest);
		res.unshift(l.value);
		return res;
	}
}

var arr = [1,2,3];

var l = arrToList(arr);
console.log(l);

var arr2 = listToArray(l);
console.log(arr2);