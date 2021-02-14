
//First load a var with a sum of numbers from the list. When it reaches a peck value 
//it gets recorded to a secound var with the highest subarr total. Now lastly, if 
// the sum dips into the negitave the sum var resets allowing a search of the rest of the list
// perserving the subarr total.
// EX: maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//                            [4, -1, 2, 1] (sum = 6)



var maxSequence = function(arr){
      let sumStream=0;
      let maxNum=0;
        for(let i=0; i < arr.length;i++){
        sumStream + arr[i] >= 0 ? sumStream = sumStream + arr[i] : sumStream=0; 
        sumStream>maxNum ? maxNum=sumStream :maxNum ;  
        }
        return maxNum
    }
