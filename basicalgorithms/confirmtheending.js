function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    var finalString = str.length - target.length;
    console.log(finalString);

    if (str.substr(finalString) === target) {
        return true;
    } else {
        return false;
    }
  }
  
  confirmEnding("Bastian", "n");



//   Another solution

//   function confirmEnding(str, target) {
  
//     return str.slice(str.length - target.length) === target;
//   }
  
//   confirmEnding("He has to give me a new name", "name");