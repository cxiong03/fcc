function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    
    for(var i = 0; i < words.length; i++) {
        var letters = words[i].split("");
         letters[0] = letters[0].toUpperCase();
         words[i] = letters.join("");
    }
    console.log(words.join(" "));
}

titleCase("One day Simba, the sun will set on my time here, and will rise with you as the new king");