// Add up the sequence of numbers ending with the input number
function SimpleAdding(num) {
  var sum = 0, current = 1;
  while(current <= num) {
      sum += current++;
  }
  return sum;
}

// keep this function call here
console.log(SimpleAdding(5));
