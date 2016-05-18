// artificial stupidity
"use strict";

var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

function Vector(x,y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.add = function(other) {
	return new Vector(this.x + other.x, this.y + other.y)
}

function Grid(width, height) {
	this.width = width;
	this.height = height;
	this.grid = new Array(height*width)
}
Grid.prototype.get = function(pos) {
	return this.grid[pos.y * this.width + pos.x];
}
Grid.prototype.set = function(pos, value) {
	this.grid[pos.y * this.width + pos.x] = value;
}

var pos = new Vector(5,5)
var grid = new Grid(10,10)
console.log(grid.get(pos))
grid.set(pos, 10)
console.log(grid.get(pos))

function Wall() {}
function Critter() {}

function World(plan, legend) {
	this.grid = new Grid(plan[0].length, plan.length);
}

World.prototype.toString = function() {
	return "TODO"
}

var world = new World(plan, [{"#": Wall}, {"O": Critter}])
console.log(world);

// TODO Critter


