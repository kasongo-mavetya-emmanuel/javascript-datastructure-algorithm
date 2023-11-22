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
        if(this.length===0){
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
        if(index<=this.length/2){
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
    insert(val, index){
      if(index===0) return !!this.unShift(val);
      if(index===this.length) return !!this.push(val);
      if(index>this.length || index<0) return false;
      let newNode= new Node(val);
      let before= this.get(index-1);
      let after= before.next;
      before.next=newNode;
      newNode.next= after;
      newNode.prev=before;
      after.prev=newNode;
 
     this.length++;
     return true;
      
    }


}

 const list= new DoubleLinkedList();

list.push('hi');
list.push('you');
list.push(99);
list.push('great');
//list.unShift('new');

//list.pop();
//list.shift();
//list.unshift('new');
//console.log(list.get(2));
//console.log(list.set(1,'set'));
//console.log(list.insert('again',1));
// console.log(list.remove(5));
//list.reverse();
//list.print();


console.log(list);
