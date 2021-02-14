
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




// Test Cases


console.log(maxSequence([])); // Expected Result: 0 
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected Result: 6 
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])); // Expected Result: 0 
console.log(maxSequence([ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ])); // Expected Result: 155);
