var charCount = function(str, countSpaces) {
    var chars = 0;
    var stringAsArray = str.split(' ');
    stringAsArray.forEach(function(v, i, a) {
        chars += v.length;
    });
    if(countSpaces) {
        var spaces = stringAsArray.length - 1;
        return chars + spaces;
    } else {
        return chars;
    }
};