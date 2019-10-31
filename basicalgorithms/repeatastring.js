// function repeatStringNumTimes(str, num) {
//     var accumulatedStr = "";
//     while (num > 0) {
//       accumulatedStr += str;
//       num--;
//     }
//     return accumulatedStr;
//   }


function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
  
    if (num < 0) return "";
  
    for (var i = 0; i < num; i++) {
      accumulatedStr += str;
    }
    return accumulatedStr;
  }

  console.log(repeatStringNumTimes("Chang", 5));