function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function countDigit(num){
   if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)))+1;
}

function mostDigits(arr){

    let maxDigits=0;
    for(let i=0; i<arr.length; i++){
      maxDigits = Math.max(maxDigits,countDigit(arr[i]));
    
    }
 
    return maxDigits;
}


function radixSorting(arr){
    const maxDigits= mostDigits(arr);
    for(let i=0; i<=maxDigits ; i++){
      const buckets= Array.from({length:10},()=>[]);
        for(let j=0; j<arr.length; j++){
            let digit= getDigit(arr[j],i);
             buckets[digit].push(arr[j]);
        }
        arr=[].concat(...buckets);
    }
    return arr;
}


console.log(radixSorting([1245,3,433,2222,12,31,20,5,9,7,6,1]));