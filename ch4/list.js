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

function nth(n, l) {
	if (l == null) {
		return undefined;
	} else if (n == 0) {
		return l.value;
	} else {
		return nth(n-1, l.rest);
	}
}

var arr = [1,2,3];

var l = arrToList(arr);
console.log(l);

console.log(nth(1, l));
console.log(nth(5, l));

var arr2 = listToArray(l);
console.log(arr2);