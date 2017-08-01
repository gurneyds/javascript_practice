// Replace each letter with the next. Change vowels to upper case. Leave punctuation alone
function LetterChanges(str) {
    var changed = "";
  // code goes here
  for(var i=0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      var nextChar = String.fromCharCode(charCode+1);
//      var nextCharLower = nextChar.toLowerCase();
      if(nextChar === 'a' || nextChar === 'e' || nextChar === 'i' || nextChar === 'o' || nextChar === 'u') {
          nextChar = nextChar.toUpperCase();
          changed += nextChar;
      } else if(charCode >= 'A'.charCodeAt(0) && charCode < 'z'.charCodeAt(0)) {
          changed += nextChar;
      } else {
          // Keep the character as is
          changed += str[i];
      }
  }
  return changed;

}

// keep this function call here
console.log(LetterChanges('fun times!'));
