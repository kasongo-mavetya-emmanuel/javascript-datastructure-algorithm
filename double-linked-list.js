class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        let newNode=new Node(val);
        if(!this.length===0){
            this.head=newNode;
            this.tail=newNode;
            
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;

        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let poppedNode= this.tail;
        if(this.length===1){
            this.head=null;
            this.tail=null; 
        }
        else{
            this.tail=poppedNode.prev;
            this.tail.next=null;
            poppedNode.prev=null;
           
        }
        return poppedNode;

    }
    unShift(val){
        let newNode=new Node(val);

        if(this.length===0){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }
        
        this.length++;

        return this;

    }


}

 const list= new DoubleLinkedList();

list.push('hi');
list.push('you');
list.push(99);
list.push('great');
//list.unshift('new');

//list.pop();
//list.shift();
//list.unshift('new');
//console.log(list.get(2));
//console.log(list.set('get',2));
//console.log(list.insert(0,'again'));
// console.log(list.remove(5));
//list.reverse();
//list.print();


console.log(list);
