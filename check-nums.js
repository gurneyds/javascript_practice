// Print true if the second number is larger than the first. Print -1 if the two numbers are equal
function CheckNums(num1, num2) {
    return num2 === num1 ? -1 : num2 > num1;
}
console.log(CheckNums(3, 2));
console.log(CheckNums(67, 2));
console.log(CheckNums(6, 27));
console.log(CheckNums(2, 2));
