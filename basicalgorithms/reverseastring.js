function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
  }
  
  reverseString("hello");
  reverseString("Greetings from Earth");
  reverseString("show me the money");