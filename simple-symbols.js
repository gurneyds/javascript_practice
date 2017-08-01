// Return true if the plus symbol always as 1 character between them  ie +d+. There cannot be two plus signs together ++
function SimpleSymbols2(str) {
    return (/\+[\wn{\w}]\+/i.test(str)) && /^[\+\+]/i.test(str);
}

function SimpleSymbols(str) {
    for(var i=0; i < str.length; i++) {
        if(isAlpha(str[i])) {
            if(i > 0) {
                if(str[i-1] !== '+') {
                    return false;
                }
            } else if(i === 0) {
                return false;
            }
            if(i < str.length) {
                if(str[i+1] !== '+') {
                    return false;
                }
            }
        }
    }
    return true;
}

function isAlpha(ch){
  return /^[A-Z]$/i.test(ch);
}

console.log(SimpleSymbols2("+d+=3=+s+"));
console.log(SimpleSymbols2("f++d+"));
