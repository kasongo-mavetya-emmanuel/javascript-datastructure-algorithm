class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();

    }
    dequeue() {
        this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

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

    Djikstra(start, finish) {
        const nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let path = [];
        let smallest;

        for (let vertex in this.adjacenyList) {
            if (vertex === start) {
                distances[vertex] = 0;

            } else {
                distances[vertex] = Infinity;
            }
            previous[vertex] = null;


        }

    }
}