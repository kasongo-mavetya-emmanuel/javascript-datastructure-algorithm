function binarySearch(arr,num){
 let start=0;
 let end=arr.length-1;
 let middleIndex=Math.floor((start+end)/2);
 while(start<=end && arr[middleIndex] !== num){
    if(num > arr[middleIndex]){
        start=middleIndex+1;
    }
    else{
        end=middleIndex-1;
    }
   middleIndex=Math.floor((start+end)/2);
 }

 if(num=== arr[middleIndex]){
    return middleIndex;
}
return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],10));