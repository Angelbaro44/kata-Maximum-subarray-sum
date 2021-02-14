# kata-Maximum-subarray-sum

Description:
-
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

    maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    // should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.








Test Cases:
-
    describe( "maxSequence", function(){
      it("should work on an empty array",function(){
        Test.assertEquals(maxSequence([]), 0);
      });
      it("should work on the example",function(){
        Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
      });
      it("should work on the example with negative numbers", function() {
        Test.assertEquals(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]), 0);
      });
      it("should work on this too", function() {  
        Test.assertEquals(maxSequence([ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ]), 155);
      });
      it("should work on random arrays", function(){
        var solution = function(arr){
          var i, j, k = 0, r;
          for(i = 0; i < arr.length; ++i){    
            for(r = 0, j = i; j < arr.length; ++j){
              r += arr[j];
              k = k > r ? k : r;
            }
          }
          return k;
        }, randomArray = function(n){
          var res = [];
          while( n --> 0 ) res.push(Math.round(Math.random() * 100 - 50));
          return res;
        }, r, i;
        for(i = 0; i < 50; ++i){
          r = randomArray(Math.random() * 70);
          Test.assertEquals(maxSequence([...r]), solution(r));
        }
      });
    });
