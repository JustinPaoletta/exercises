var randomize = function(input, numbersToNotMask) {
    var holder = [];
    var inputAsArr = input.split('');
    var otherEnd = (input.length - numbersToNotMask);

    inputAsArr.forEach(function(val, idx, arr) {
        if(idx < otherEnd) {
            holder.push('*');
        } else {
            holder.push(val)
        }
    });

    return holder.join('');
}

document.getElementById('textInput').addEventListener('keyup', function() {
    document.getElementById('result').innerHTML = randomize(document.getElementById('textInput').value, document.getElementById('numInput').value)
})

document.getElementById('numInput').addEventListener('keyup', function() {
    document.getElementById('result').innerHTML = randomize(document.getElementById('textInput').value, document.getElementById('numInput').value)
})