var charFreq = function(str) {
    var objToReturn = {};
    var stringAsArr = str.split('');
    stringAsArr.forEach(function(val,idx,arr) {
        if(objToReturn[val]) {
            objToReturn[val]++;
        } else {
            objToReturn[val] = 1;
        }
    });
    return objToReturn;
};