function selectionSorting(arr){

    const swap=(arr,idx1,idx2)=>([arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]);
  
    for(let i=0; i<arr.length;i++){
        let lowest=i;
        for(let j=i+1; j<arr.length;j++){
            if(arr[lowest]>arr[j]){
                lowest=j;
            }
        }
        if(lowest !== i) swap(arr,i,lowest);
    }

    return arr;
}

console.log(selectionSorting([2,1,4,5,3,24,23,8,7,6,56,10]));