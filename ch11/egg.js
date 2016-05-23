function skipSpace(string) {
	var first = string.search(/\S/);
	if (first == -1) return "";
	return string.slice(first);
}

function parseExpression(program) {
	// console.log("parseExpression: " + program)
	program = skipSpace(program);
	var match, expr;
	if (match = /^"([^"]*)"/.exec(program)) {
		expr = {type: "value", value: match[1]};
	} else if (match = /^\d+\b/.exec(program)) {
		expr = {type: "value", value: Number(match[0])};
	} else if (match = /^[^\s(),"]+/.exec(program)) {
		expr = {type: "word", value: match[0]};
	} else 
		throw new SyntaxError("Unexpected syntax: " + program);

	return parseApply(expr, program.slice(match[0].length));
}

function parseApply(expr, program) {
	// console.log("parseApply: " + expr + ", " + program);
	program = skipSpace(program)
	if (program[0] != "(")
		return {expr: expr, rest: program}

	program = skipSpace(program.slice(1));
	expr = {type: "apply", operator: expr, args: []};
	while (program[0] != ")") {
		var arg = parseExpression(program);
		expr.args.push(arg.expr);
		program = skipSpace(arg.rest);
		if (program[0] == ",") {
			program = skipSpace(program.slice(1));
		} else if (program[0] != ")") {
			throw new SyntaxError("Expected ',' or ')'");
 		}
	}

	return parseApply(expr, program.slice(1));
}

function parse(program) {
	var result = parseExpression(program);
	if (skipSpace(result.rest).length > 0) {
		throw new SyntaxError("Unexpected text after program");
	}
	return result.expr;
}

var operators = {};
operators["+"] = function(a,b) {
	return a+b;
}

function evaluate(expr, env) {
	if (expr.type === "value") {
		return expr.value;
	} else if (expr.type === "word") {
		return env[expr.value]
	} else if (expr.type === "apply") {
		console.log(expr.operator);
		var op = operators[expr.operator.value];
    console.log(op);
		var args = expr.args.map(function(a) { return evaluate(a, env); })
    console.log(args);
		return op.apply(null, args);
	} else {
		throw new SyntaxError("Unexpected expression type: " + expr.type);
	}
}

var p = parse("+(a,10)");
console.log(p);

var env = {a: 1};
var result = evaluate(p, env);
console.log(result);