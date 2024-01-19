class Node {
    constructor(value, priority) {
        this.val = value;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parentElement = this.values[parentIdx];
            if (element.priority >= parentElement.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parentElement;
            idx = parentIdx;

        }
    }

    dequeue() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild,
                swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap == null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
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

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let path = [];
        let smallest;

        for (let vertex in this.adjacenyList) {

            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);

            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacenyList[smallest]) {
                    const nextNode = this.adjacenyList[smallest][neighbor];
                    const candidate = distances[smallest] + nextNode.weight;
                    const nextNeighbor = nextNode.node;

                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }

                }

            }


        }

        return path.concat(smallest).reverse();

    }
}


var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


console.log(graph.Dijkstra("A", "E"));