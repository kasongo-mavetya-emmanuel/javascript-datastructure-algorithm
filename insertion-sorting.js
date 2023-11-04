function insertionSorting(arr){
    let currentVal;
    for(let i=1; i<arr.length;i++){
        currentVal=arr[i];
        for(var j=i-1; j>=0 && arr[j]>currentVal;j--){
            arr[j+1]=arr[j];
        }
        arr[j+1]=currentVal;
    }
    return arr;
}

console.log(insertionSorting([2,1,5,3,4,6,10,8,9,7]));


// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])