class Node{
    constructor(value){
        this.val=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val){
        let newNode=new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last= newNode;
        }
        else{
            let temp=this.first;
            this.first=newNode;
            this.first.next=temp;
        }
        
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        let temp=this.first;
        if(this.first===this.last){
            this.last=null;
        }
        this.first= this.first.next;
        this.size--;
        return temp.val;
    }
}

const stack= new Stack();

stack.push('hi');
stack.push('so');
stack.push('now');

// stack.pop();
// stack.pop();
// stack.pop();



console.log(stack);