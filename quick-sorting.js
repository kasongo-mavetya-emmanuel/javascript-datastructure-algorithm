function pivot(arr, start=0, end=arr.length-1){

    const swap=(arr, idx1, idx2)=>([arr[idx1], arr[idx2]]=[arr[idx2], arr[idx2]]);

    let piv=arr[start];
    let swapIdx=start;

    for(let i=start+1; i<=end;i++){
        if(piv>arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
         
        }
    }
    swap(arr, start, swapIdx);

    return swapIdx;
}

function quickSorting(arr, left=0, right=arr.length-1){

    if(left<right){
        let pivIdx= pivot(arr,left,right);

        quickSorting(arr,left, pivIdx-1);

        quickSorting(arr, pivIdx+1,end);
    }

}

console.log(quickSorting([3,-2,10,35,33,4,2,36,8,9,2,1]));