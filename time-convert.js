// Convert a number into hours : minutes
function TimeConvert(num) {
    return Math.floor(num / 60) + ":" + num % 60;
}

console.log(TimeConvert(45));
console.log(TimeConvert(60));
console.log(TimeConvert(41));
console.log(TimeConvert(120));
console.log(TimeConvert(121));
