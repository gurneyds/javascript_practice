// Find the longest word and return it
function LongestWord(sen) {
    var parts = sen.split(" "),
        maxLen = 0;
        longest = "";
    parts.forEach(function(part){
        var count = 0;
        for(var i=0; i < part.length; i++) {
            if(isAlpha(part[i])) { count++; }
        }
        if(count > maxLen) {
            maxLen = count;
            longest = part;
        }
    })
    return longest;
}

var isAlpha = function(ch){
  return /^[\w]$/i.test(ch);
}

console.log(LongestWord("Now is the time for all good men to come home for Thanksgiving"));
