// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    //your code here
    let newIntegers= integers;
    let odd= [];
    let even= [];
    
    for(let i=0;i<newIntegers.length;i++){
      
      if(newIntegers[i]%2===0){
        even.push(newIntegers[i]);
      }
      else if(newIntegers[i]%2!=0){
        odd.push(newIntegers[i]);
      }
      
    }
    
    return (odd.length>1) ? even[0] 
          : (even.length>1) ? odd[0]
          : NaN;
  }