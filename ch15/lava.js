
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