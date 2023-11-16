class Node{
    constructor(val){
        this.val= val;
        this.next=null;
    }
}

class SingleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        const newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }

        this.length++;
        return this;
    }
    pop(){
        let current= this.head;
        let newTail= current;

        while(current.next){
            newTail= current;
            current= current.next;
        }

        this.tail=newTail;
        this.tail.next=null;
        this.length--;

        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }
}

const list= new SingleLinkedList();

list.push('hi');
list.push('you');
list.push(99);
list.push('great');

console.log(list.head.next.next);

console.log(list);
