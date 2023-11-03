function bubbleSorting(arr){

    const swap=(arr, idx1,idx2)=>{
        [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]];
    }

    for(let i=arr.length; i>0;i--){
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }

    return arr;

}

console.log(bubbleSorting([12,3,79,5,7,67,4,8,86,2,57]));