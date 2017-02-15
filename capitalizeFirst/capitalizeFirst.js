var capitalizeFirst = function(str) {
    if(str.split(' ').length > 1) {
        str = str.split(' ')[0]
    }
    var holder = [];
    var stringAsArray = str.split('');
    stringAsArray.forEach(function(v, i, a) {
        if(i === 0) {
            holder.push(v.toUpperCase())
        } else {
            holder.push(v.toLowerCase())
        }
    });
    return holder.join('')
};


capitalizeFirst('michael montgomery');