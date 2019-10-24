function largestOfFour(arr) {
    // You can do this!
  
    let results = [];
  
    for (var i = 0; i < arr.length; i++) {
      let largestNum = arr[i][0];
      for(var j = 1; j < arr[i].length; j++){
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j]; 
      }
      }
      results[i] = largestNum;
    }
    console.log(results);
          return results;
  
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);