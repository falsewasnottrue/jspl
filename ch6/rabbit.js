function Rabbit(type) {
	this.type = type;
}

Rabbit.prototype.speak = function(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'");
}

var fatRabbit = new Rabbit("fat")

console.log(fatRabbit)
console.log(Object.getPrototypeOf(fatRabbit))
console.log(Object.getPrototypeOf(Object.prototype))

fatRabbit.speak("I could use a carrot")