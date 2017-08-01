// Capitalize the first character in each word
function LetterCapitalize(str) {
    var result = '';
    var parts = str.split(' ')
    for(var i=0; i < parts.length; i++) {
        result += parts[i][0].toUpperCase() + parts[i].substring(1) + " ";
    }
  return result;
}

function LetterCapitalize2(str) {
    var result = '', parts = str.split(' ');
    parts.forEach(function(part) {
        result += part[0].toUpperCase() + part.substring(1) + " ";
    });
    return result;
}

console.log(LetterCapitalize2("Now is the time for all good men"));
