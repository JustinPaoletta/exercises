var numberRun = function(inMax, inHowMany) {
    var count = {};

    var recounter = 0;


    var numbers = [];
    var numbersTwo = [];
    var finalArr = [];
    var seriousArr = [];

    for(var i = 0; i < inHowMany; i++) {
        numbers.push(Math.floor((Math.random() * inMax) + 1))
    }

    numbers.forEach(function(val) {
        numbersTwo.push(val);
    });

    numbers.forEach(function(val) {
        if(count[val.toString()]) {
            count[val.toString()] += 1
        } else {
            count[val.toString()] = 1
        }
    });

    for(key in count) {
        if(count[key] > 1) {
            delete count[key]
        } else {
            finalArr.push(key)
        }
    }

    var difference = (inHowMany - finalArr.length);

    if(difference != 0) {
        recounter++;
        for(var i = 0; i < difference; i++) {
            finalArr.push(Math.floor((Math.random() * inMax) + 1))
        }
    }

    finalArr.forEach(function(val) {
        if(typeof val === "string") {
            val = Number(val);
        }
    });



    finalArr.forEach(function(val) {
        seriousArr.push(Number(val))
    });

    return finalArr.sort();

}

