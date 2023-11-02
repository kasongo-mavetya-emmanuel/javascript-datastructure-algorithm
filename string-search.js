function stringSearch(arr,val){
    let count=0;
    for(let i=0; i<arr.length;i++){

        for(let j=0; j<val.length;j++){
            if(val[j] !== arr[i+j]) break;

            if(j===val.length-1) count++;
        }
    }

    return count;
}

console.log(stringSearch("lorie lol logloren logo",'lor'));