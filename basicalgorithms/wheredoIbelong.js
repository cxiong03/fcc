function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function(a, b) {return a - b});

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i; // if the number at index 0 >= 50 then returns the index of num
    }
    return arr.length; // if arr[i] is not greater or equal to num then place it at the end of the array
  }
  
  getIndexToIns([40, 60], 50);