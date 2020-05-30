function sum(arr, n) {
    console.log(n, arr);
    if(n <= 0) {
      return arr[0];
    } else {
      return sum(arr, n - 1) + arr[n];
    }
  }

  sum([2, 3, 4], 1);