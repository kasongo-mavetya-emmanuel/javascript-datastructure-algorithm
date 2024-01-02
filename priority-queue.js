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

    dequeue(){
        let max=this.values[0];
        let end= this.values.pop();
        if(this.values.length>0){
            this.values[0]=end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let idx=0;
        let length= this.values.length;
        let element=this.values[0];
        while(true){
            let leftChildIdx=2*idx+1;
            let rightChildIdx=2*idx+2;
            let leftChild,rightChild,
            swap=null;
            if(leftChildIdx<length){
                leftChild= this.values[leftChildIdx];
                if(leftChild.priority<element.priority){
                    swap=leftChildIdx;
                }
            }
            if(rightChildIdx<length){
                rightChild=this.values[rightChildIdx];
                if((swap==null && rightChild.priority<element.priority)||
                (swap!==null && rightChild.priority<leftChild.priority)){
                    swap=rightChildIdx;
                }
            }
            if(swap===null) break;            
            this.values[idx]=this.values[swap];
            this.values[swap]= element;
            idx=swap;
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
