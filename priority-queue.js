class Node{
    constructor(value,priority){
        this.value=value;
        this.priority=priority
    }
}

class PriorityQueue{
    constructor(){
        this.values=[];
    }

    enqueue(val,priority){
        const newNode= new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx= this.values.length-1;
        const element= this.values[idx];
        while(idx>0){
            const parentIdx= Math.floor((idx-1)/2);
            const parentElement= this.values[parentIdx];
            if(element.priority>=parentElement.priority) break;
            this.values[parentIdx]= element;
            this.values[idx]=parentElement;
            idx=parentIdx;

        }
    }
}
const prQueue= new PriorityQueue();
prQueue.enqueue("common cold",5)
prQueue.enqueue("gunshot wound", 1)
prQueue.enqueue("high fever",4)
prQueue.enqueue("broken arm",2)
prQueue.enqueue("glass in foot",3)

console.log(heap);
