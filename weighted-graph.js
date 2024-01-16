class WeightedGraph {
    constructor() {
        this.adjacenyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacenyList[vertex]) this.adjacenyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacenyList[vertex1].push({ node: vertex2, weight });
        this.adjacenyList[vertex2].push({ node: vertex1, weight });


    }
}
const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addEdge("A", "B", 90);
console.log(g.adjacenyList);