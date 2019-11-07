// We need to copy each element from the first array into the second array starting at the index n. 
// We’ve also got to ensure that the original arrays are not mutated. That is, we cannot make any 
// changes to the original arrays.

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    console.log(localArray);
    return localArray;
  }
frankenSplice([1, 2, 3], [4, 5, 6], 1)