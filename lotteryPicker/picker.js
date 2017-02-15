var numberRun = function(max, howManyNumbers) {
    var holder = [];
    var count = {};
    var dupe = false;
    for(var i = 0; i < howManyNumbers; i++) {
        holder.push(Math.floor((Math.random() * max) + 1))
    }
    holder.forEach(function(val, idx, arr) {
        for(var x = 0; x < holder.length; x++) {
            if(idx === x) {
                console.log('same index')
            } else if(val === holder[x]) {
                dupe = true;
            }
        }
    });
    if(dupe) {
        numberRun(max, howManyNumbers)
    }
    return holder.sort()
};
