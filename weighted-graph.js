class WeightedGraph {
    constructor() {
        this.adjacenyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacenyList[vertex]) this.adjacenyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {

    }
}