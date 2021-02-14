var maxSequence = function(arr){
      let sumStream=0;
      let maxNum=0;
        for(let i=0; i < arr.length;i++){
        sumStream + arr[i] >= 0 ? sumStream = sumStream + arr[i] : sumStream=0; 
        sumStream>maxNum ? maxNum=sumStream :maxNum ;  
        }
        return maxNum
    }