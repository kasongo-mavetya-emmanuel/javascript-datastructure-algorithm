class Node{
    constructor(value){
        this.val=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    enqueue(val){
        const newNode= new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }
        
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        const temp= this.first;
        if(this.first===this.last){
            this.first=null;
            this.last=null;
        }
        this.first=this.first.next;
        this.size--;
        return temp.val;
    }
}

const queue= new Queue();
queue.enqueue('hi');
queue.enqueue('again');
queue.enqueue('new');
queue.enqueue(4);

queue.dequeue();

console.log(queue);