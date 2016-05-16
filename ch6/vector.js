function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.add = function(v) {
	return new Vector(this.x + v.x, this.y + v.y)
};
Vector.prototype.minus = function(v) {
	return new Vector(this.x - v.y, this.y - v.y);
};
Vector.prototype.length = function() {
	return Math.sqrt(this.x*this.x + this.y*this.y);
};

console.log(new Vector(1,1).add(new Vector(2,2)));
console.log(new Vector(3,4).length());

var v1 = new Vector(1,1)
console.log(v1.minus(v1).length())