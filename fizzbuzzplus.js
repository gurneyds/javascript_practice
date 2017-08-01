function fizzBuzzPlus() {
    for(var i=1; i <= 100; i++) {
        var output = "";
        if(i % 3 == 0 || ("" + i).includes(3)) {
            output = "fizz";
        }
        if(i % 5 == 0 || ("" + i).includes(5)) {
            output += "buzz";
        }
        console.log(i + ":" + output);
    }
}

fizzBuzzPlus();
