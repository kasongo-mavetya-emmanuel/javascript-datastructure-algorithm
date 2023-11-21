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
    shift(){
        if(!this.head) return undefined;
        let oldHead=this.head;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            this.head=oldHead.next;
            this.prev=null;
            oldHead.next=null;
        }
        this.length--;
        return oldHead;
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
    get(index){
        if(this.length===0) return null;
        if(index<0 || index>this.length) return null;
        let count;
        let current;
        if(indext<=this.length/2){
            count=0;
            current=this.head;
            while(index!=count){
                current= current.next;
                count ++;
            }
    

        }
        else{

            current=this.tail;
            count= this.length-1;
            
            while(index!=count){
                current= current.prev;
                count --;
            }
    

        }

        return current;
    }
    set(index, val){
        let foundNode= this.get(index);
        if(foundNode!==null){
            foundNode.val=val;
            return true;
        }

        return false;

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
