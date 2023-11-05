function merge(arr1, arr2){
    let results=[];
    let i=0;
    let j=0;

    while(i<arr1.length && j< arr2.length){
        if(arr1[i]>arr2[j]){
            results.push(arr2[j]);
            j++;
        }else{
            results.push(arr1[i]);
            i++;
        }
    }

    while(i<arr1.length){
        results.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}


function mergeSorting(arr){

    let middle=Math.floor(arr.length/2);
    let left= mergeSorting(arr.slice(0,middle));
    let right= mergeSorting(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSorting([30,10,20,9,3,14,2,1,5,26,7,8]));