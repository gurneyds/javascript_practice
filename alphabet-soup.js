// Write a function that puts the string into alphabetical order
function AlphabetSoup(str){
    var parts = str.split("");
    var ordered = parts.sort();
    return ordered.join("");
}

console.log(AlphabetSoup("hooplah"));
