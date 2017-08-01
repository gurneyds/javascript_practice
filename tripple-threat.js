// Return true if the array of numbers has 3 in sequence
function tripleThreat(a) {
    for(var i=0; i < a.length; i++) {
        // Make sure that there are 2 others that can be tested
        if(i < a.length-2) {
            if(a[i] === a[i+1]-1 && a[i+1] === a[i+2]-1) {
                return 1;
            }
        }
    }
    return 0;
}

console.log(tripleThreat([1,2,3,4,5,6,7]));
console.log(tripleThreat([1,2,4,5,7]));
console.log(tripleThreat([1,2,4,5,6,7]));
console.log(tripleThreat([1,2]));
console.log(tripleThreat([1,2,3]));
