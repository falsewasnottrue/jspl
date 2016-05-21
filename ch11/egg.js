function skipSpace(string) {
	var first = string.search(/\S/);
	if (first == -1) return "";
	return string.slice(first);
}

console.log(skipSpace("rasmus"))
console.log(skipSpace("rasmus   "))
console.log(skipSpace("   rasmus"))

function parseExpression(program) {

}