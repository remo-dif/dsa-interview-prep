class Graph {
  #isDirected;
  #vertices = [];
  #adjList = new Map();

  constructor(isDirected = false) {
    this.#isDirected = isDirected;
  }

  addVertex(vertex) {
    if (!this.#vertices.includes(vertex)) {
      this.#vertices.push(vertex);
      this.#adjList.set(vertex, []);
    }
  }

  addEdge(vertex, edge) {
    if (!this.#adjList.has(vertex)) {
      this.addVertex(vertex);
    }
    if (!this.#adjList.has(edge)) {
      this.addVertex(edge);
    }
    this.#adjList.get(vertex).push(edge);
    if (!this.#isDirected) {
      this.#adjList.get(edge).push(vertex);
    }
  }

  removeEdge(vertex, edge) {
    if (this.#adjList.has(vertex)) {
      this.#adjList.set(vertex, this.#adjList.get(vertex).filter((neighbor) => neighbor !== edge));
    }
    if (!this.#isDirected && this.#adjList.has(edge)) {
      this.#adjList.set(edge, this.#adjList.get(edge).filter((neighbor) => neighbor !== vertex));
    }
  }

  removeVertex(vertex) {
    if (!this.#adjList.has(vertex)) {
      return false;
    }

    for (const neighbor of [...this.#adjList.get(vertex)]) {
      this.removeEdge(vertex, neighbor);
    }
    if (this.#isDirected) {
      this.#vertices.forEach((currentVertex) => this.removeEdge(currentVertex, vertex));
    }
    this.#adjList.delete(vertex);
    this.#vertices = this.#vertices.filter((currentVertex) => currentVertex !== vertex);
    return true;
  }

  get vertices() {
    return [...this.#vertices];
  }

  get adjList() {
    return this.#adjList;
  }

  get adjacencyList() {
    return Object.fromEntries(this.#adjList);
  }

  display() {
    console.log(this.toString());
  }

  toString() {
    let result = "";
    this.#vertices.forEach((vertex) => {
      result += `${vertex} -> `;
      this.#adjList.get(vertex).forEach((neighbor) => {
        result += `${neighbor} `;
      });
      result += "\n";
    });
    return result.trimEnd();
  }

  bfs(start) {
    if (!this.#adjList.has(start)) {
      return [];
    }
    const queue = [start];
    const result = [];
    const visited = new Set([start]);
    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);
      this.#adjList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  dfs(start) {
    if (!this.#adjList.has(start)) {
      return [];
    }
    const result = [];
    const visited = new Set();
    const visit = (vertex) => {
      visited.add(vertex);
      result.push(vertex);
      this.#adjList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visit(neighbor);
        }
      });
    };
    visit(start);
    return result;
  }

  hasPathDFS(source, destination) {
    return this.dfs(source).includes(destination);
  }

  hasPathBFS(source, destination) {
    return this.bfs(source).includes(destination);
  }
}

module.exports = Graph;

if (require.main === module) {
  const graph = new Graph();
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  console.log(graph.toString());
  console.log(graph.bfs("A"));
  console.log(graph.dfs("A"));
}
