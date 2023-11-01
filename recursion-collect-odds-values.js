function collectOddsValues(arr){
    let result=[];
    const helper=(newArr)=>{
      if(newArr.length === 0){
        return;
      }
     if(newArr[0] % 2 !== 0){
        result.push(newArr[0]);
     }
     helper(newArr.slice(1));
    }

    helper(arr);
    return result;
}

console.log(collectOddsValues([1,1,9,2,4,5,8,0,8,4]));