function getDigit(num, i){

}

function countDigit(num){

}

function mostDigit(){

    return maxDigit;
}


function radixSorting(arr){
    const k= mostDigit(arr);
    const buckets= Array.from({length:10},[]);
    for(let i=0; i<=k ; k++){
        for(let j=0; j<arr.length; j++){
            let digit= getDigit(arr[j],i);
             buckets[digit].push(arr[j]);
        }
        buckets=[].concat(...buckets);

    }
}