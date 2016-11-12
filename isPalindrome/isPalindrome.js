var isPalindrome = function(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}