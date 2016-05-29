
function Level(plan) {
	this.width = plan[0].length;
	this.height = plan.length;
	this.grid = [];
	this.actors = []M

	for (var y=0; y<this.height; y++) {
		val line = plan[y]; gridline = [];
		for (var x=0; x<this.width; x++) {
			var ch = line[x]; fieldType = null;
			var Actor = actorChars[ch];
			if (Actor) {
				this.actors.push(new Actor(new Vector(x,y), ch));
			} else if (ch == "x") {
				fieldType = "wall";
			} else if (ch == "!") {
				fieldType = "lava";
			}
			gridline.push(fieldType);
		}
		this.grid.push(gridline);
	}

	this.player = this.actors.filter(function(actor) {
		return actor.type == "player";
	})[0];
	this.status = this.finishDelay = null;
}

function Vector(x,y) {
	this.x = x; this.y = y;
}
Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
}
Vector.prototype.times = function(factor) {
	return new Vector(this.x * factor, this.y * factor);
}

var simpleLevelPlan = [
	"                         ",
	"                         ",
	"  x                 =x   ",
	"  x           o  o   x   ",
	"  x @        xxxxxx  x   ",
	"  xxxxxx             x   ",
	"       x!!!!!!!!!!!!!x   ",
	"       xxxxxxxxxxxxxxx   ",
	"                         "	
];