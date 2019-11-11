function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }
  
  bouncer([7, "ate", "", false, 9]);

  // Another Solution
  function bouncer(arr) {  
      const truthy = arr.filter(item => {
          return item;
      });
  
    return truthy;
  };
  bouncer([7, "ate", "", false, 9])

  // fastest solution
  function bouncer(arr) {
    return arr.filter(Boolean);
  }

  bouncer([7, "ate", "", false, 9])