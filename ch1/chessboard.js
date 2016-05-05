// chessboard
var size = 8

for (row = 0; row < size; row ++) {
	var res = ""
	for (col = 0; col < size; col ++) {
		if ((col+row) % 2 == 0) {
			res += "#"
		} else {
			res += " "
		}
	}
	console.log(res)
}