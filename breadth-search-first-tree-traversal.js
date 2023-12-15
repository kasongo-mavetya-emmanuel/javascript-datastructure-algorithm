class Node{
    constructor(val){
        this.value=val;
        this.left=null;
        this.right=null;

    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        const newNode= new Node(value);
        if(this.root===null){
            this.root=newNode;
            return this;
        }
        let current= this.root;
        while(true){
            if(value===current.value) return undefined;
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode;
                    return this;
                }
                current= current.left;

            }else{
                if(current.right===null){
                    current.right=newNode;
                    return this;
                }
                current=current.right;

            }
        }

    }
    find(value){
        if(this.root===null) return false;
        let current=this.root, found=false;
        while(current && !found){
            if(value<current.value){
              current=current.left;
            }else if(value>current.value){
              current= current.right;
            }else{
                found=true;

            }
        }
        if(!found)return undefined;
        return current;
    }
    contains(value){
        if(this.root===null) return false;
        let current=this.root, found=false;
        while(current && !found){
            if(value<current.value){
              current=current.left;
            }else if(value>current.value){
              current= current.right;
            }else{
                return true;

            }
        }
        return false;
    }
    
    BSF(){
        let node=this.root,
        data=[],
        queue=[];
        queue.push(node);

        while(queue.length){
            node=queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return data;
    
    }
}

const tree= new BinarySearchTree();

tree.insert(50);
tree.insert(30);
tree.insert(10);
tree.insert(70);
tree.insert(90);
tree.insert(12);
tree.insert(20);
tree.insert(99);

console.log(tree.find(10));

console.log(tree.contains(15));
console.log(tree);

console.log(tree.BSF());