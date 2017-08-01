'use strict';

module.exports = function isConsistent(phoneList) {
    var orderedList = [];
    phoneList.forEach(function(num) {
        orderedList.push(num.replace(/ /g, ""));
    });
    orderedList.sort();

    // Compare the numbers with the ones below it to see if there is a match
    for(var i=0; i < orderedList.length; i++) {
        for(var j=i+1; j < orderedList.length; j++) {
            if(orderedList[j].startsWith(orderedList[i])) {
                console.log("found match - returning false");
                return false;
            }
        }
    }

    return true;
}
