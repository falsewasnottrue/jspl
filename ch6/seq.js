// Interface
// hasNext(): Boolean
// next(): T

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

function RangeSeq(start, end) {
	this.pos = start
	this.end = end
}

RangeSeq.prototype.hasNext = function() {
	return this.pos < this.end
}
RangeSeq.prototype.next = function() {
	return this.pos ++
}

var rangeSeq = new RangeSeq(5,100)

for (var i=0; i<5; i++) {
	if (rangeSeq.hasNext()) {
		console.log(rangeSeq.next())
	}
}