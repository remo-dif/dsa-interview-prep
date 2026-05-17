// graph.js

// A simple implementation of an undirected graph using adjacency list in JavaScript

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); // For undirected graph
  }

  // Remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // Remove a vertex and all connected edges
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]?.length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Display the graph
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
    }
  }

  // Depth-First Search (DFS) traversal
  dfs(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfsHelper(vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      });   
    })(start);
    return result;
  }

  // Breadth-First Search (BFS) traversal
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  // Check if there is a path between two vertices using DFS
  hasPathDFS(source, destination) {
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function hasPath(vertex) {
      if (vertex === destination) return true;
      visited[vertex] = true;
      for (let neighbor of adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          if (hasPath(neighbor)) {
            return true;
          }
        }
      }
      return false;
    }
    return hasPath(source);
  }

  // Check if there is a path between two vertices using BFS
  hasPathBFS(source, destination) {
    if (!this.adjacencyList[source] || !this.adjacencyList[destination]) {
      return false;
    }
    const queue = [source];
    const visited = {};
    visited[source] = true;
    while (queue.length) {
      const vertex = queue.shift();
      if (vertex === destination) return true;
      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return false;
  }
}

module.exports = Graph;
