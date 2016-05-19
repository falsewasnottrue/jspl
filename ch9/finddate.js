"use strict";

function findDate(str) {
	var regex = /(\d{1,2})-(\d{1,2})-(\d{4})/
	var match = regex.exec(str)

	console.log(match)
	return new Date(match[3], match[2]-1, match[1])	
}

console.log(findDate("11-01-1976"))