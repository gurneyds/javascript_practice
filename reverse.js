// Reverse the string
function Reverse1(str) {
    return str.split("").reverse().join("");
}

function Reverse2(str) {
    var rev="";
    for(var i=str.length-1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}

console.log(Reverse1("abcdefg"));
console.log(Reverse2("abcdefg"));
