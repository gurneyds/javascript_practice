// Find the factorial of the given number
function FirstFactorial(num){
    var sum = 1;
    for(var i=num; i > 0; i--) {
        sum *= i;
    }
    return sum;
}



console.log(FirstFactorial(1));
console.log(FirstFactorial(2));
console.log(FirstFactorial(4));
console.log(FirstFactorial(8));
console.log(FirstFactorial(16));
