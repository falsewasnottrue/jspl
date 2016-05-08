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

var arr = [1,2,3];
console.log(arrToList(arr));