class MaxBinaryHeap{
    constructor(){
        this.values=[];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx= this.values.length-1;
        const element= this.values[idx];
        while(idx>0){
            const parentIdx= Math.floor((idx-1)/2);
            const parentElement= this.values[parentIdx];
            if(element<=parentElement) break;
            this.values[parentIdx]= element;
            this.values[idx]=parentElement;
            idx=parentIdx;

        }
    }

    extractMax(){
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
                if(leftChild>element){
                    swap=leftChildIdx;
                }
            }
            if(rightChildIdx<length){
                rightChild=this.values[rightChildIdx];
                if((swap==null && rightChild>element)||(swap!==null && rightChild>leftChild)){
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
const heap= new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
