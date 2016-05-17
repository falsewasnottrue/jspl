// Interface
// hasNext(): Boolean
// next(): T

// TODO ArraySeq
function ArraySeq(array) {
	this.array = array;
	this.pos = 0;
}

ArraySeq.prototype.hasNext = function() {
	return this.pos < this.array.length;
}
ArraySeq.prototype.next = function() {
	return this.array[this.pos++];
}

var array = Array(2,3,5,7,11,13,17,19,23)
var arraySeq = new ArraySeq(array)

for (var i=0; i<5; i++) {
	if (arraySeq.hasNext()) {
		console.log(arraySeq.next())
	}
}

// TODO RangeSeq