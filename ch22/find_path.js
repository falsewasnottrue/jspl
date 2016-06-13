function Vector(x,y) {
  this.x = x; this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
}
Vector.prototype.times = function(factor) {
  return new Vector(this.x * factor, this.y * factor);
}

function GraphNode(id, edges) {
  this.id = id;
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
  var id = 0;
  var graph = [];
  function buildNode(depth) {
    var node = new GraphNode(id++);
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
  function findPathRecursive(paths, i) {
    // console.log("paths: " + paths);
    // console.log("i: " + i);

    if (i + 1 > paths.length) {
      return []; // no path, maybe undefined?
    }
    var path = paths[i];
    var endNode = path[path.length - 1];
    if (path[0] === start && endNode === end) {
      return path;
    }

    endNode.edges.filter(function(node) {
      return !(path.includes(node));
    }).forEach(function(newNode) {
      // console.log("createNewPaths with " + newNode);
      // console.log("path: " + path);
      // console.log("path.slice(); " + path.slice());
      var newPath = path.slice();
      newPath.push(newNode);
      // console.log("newPath: " + newPath);
      paths.push(newPath);
    });

    return findPathRecursive(paths, i+1);
  }

  var paths = [[start]];
  return findPathRecursive(paths, 0);
}

var graph = treeGraph(3,2);
var start = graph[0];
var end = graph[6];

// console.log(graph);
console.log(findPath(graph, start, end));

// circular graph
var n0 = new GraphNode(0);
var n1 = new GraphNode(1);
n1.connect(n0);
var n2 = new GraphNode(2);
n2.connect(n1)
var n3 = new GraphNode(3);
n3.connect(n2);
var n4 = new GraphNode(4);
n4.connect(n3);
var n5 = new GraphNode(5);
n5.connect(n4);
n0.connect(n5);

var circle = [n0, n1, n2, n3, n4, n5];
console.log(findPath(circle, n0, n2));