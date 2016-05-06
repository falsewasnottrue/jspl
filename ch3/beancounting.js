function countBs(s) {
	return countChars(s, "B")
}

function countChars(s, c) {
	var result = 0;
	for (var i = 0; i<s.length; i++) {
		if (s.charAt(i) == c) {
			result ++;
		}
	}
	return result;
}

console.log(countBs("Beancounting"))
console.log(countBs("BeancountingB"))