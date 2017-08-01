// Return the number of small bags necessary to hold the skittles after putting what you can in big bags
// There are some small bags, and some big bags. Put skittles in the big bag if possible
// Big bags hold at most 5 skittles, small bags hold less than 5
// Return -1 if there aren't enough small bags to hold the skittles
function createPackage(small, big, goal) {
    // Fill the big bags first
    var bigBags = Math.floor(goal/5);
    if(bigBags > big) {
        bigBags = big;  // Reduce the actual number of big bags
    }

    // Number of skittles remaining after fully filling the big bags
    var remainder = goal - bigBags * 5;

    // The requirement is to fill all big bags first - even if they aren't completely full
    if(bigBags < big) {
        // Put the remainder into another big bag since we have one available
        remainder = 0;
    }

    // Check to see if we have enough small bags
    if(remainder > small) {
        return -1;
    }
    return remainder;
}


console.log(createPackage(15,0,6)); // 15 small bags, 0 big bag, 6 skittles - all go in small bags - return 6
console.log(createPackage(15,1,5)); // 15 small bags, 1 big bag, 5 skittles - all go in a big bag - return 0
console.log(createPackage(15,1,6)); // 15 small bags, 1 big bag, 6 skittles - 1 big bag, 1 small bag - return 1
console.log(createPackage(15,2,6)); // 15 small bags, 2 big bags, 6 skittles - 1 big bag full, 1 big bag with 1, no small bags - return 0
console.log(createPackage(1,1,7));  // 1 small bag, 1 big bag, 7 skittles - 1 big bag full, 1 small bag with 1, no more small bags - return -1
