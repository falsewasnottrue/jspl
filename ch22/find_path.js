function Vector(x,y) {
  this.x = x; this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
}
Vector.prototype.times = function(factor) {
  return new Vector(this.x * factor, this.y * factor);
}

function GraphNode(pos, edges) {
  this.pos = new Vector(Math.random() * 1000,
                        Math.random() * 1000);
  this.edges = [];
}
GraphNode.prototype.connect = function(other) {
  this.edges.push(other);
  other.edges.push(this);
};
GraphNode.prototype.hasEdge = function(other) {
  for (var i = 0; i < this.edges.length; i++)
    if (this.edges[i] == other)
      return true;
};

function treeGraph(depth, branches) {
  var graph = [];
  function buildNode(depth) {
    var node = new GraphNode();
    graph.push(node);
    if (depth > 1)
      for (var i = 0; i < branches; i++)
        node.connect(buildNode(depth - 1));
    return node;
  }
  buildNode(depth);
  return graph;
}

function findPath(graph, start, end) {
  var paths = [[start]];
  return false;
}

var graph = treeGraph(3,2);
var start = graph[0];
var end = graph[6];

console.log(graph);
console.log(findPath(graph, start, end));

// TODO try with circle