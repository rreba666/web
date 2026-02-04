var isPalindrome = function (x) {
    let str = "" + x
    return str === str.split('').reverse().join("")
};

console.log(isPalindrome(121));


// var isPalindrome = function (x) {
//     let str = "" + x
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed === str
// };

// console.log(isPalindrome(121));


var isPalindrome = function (x) {
    if (x < 0 || (x !== 0 && x % 10 == 0)) return false
    let temp = 0, copy = x

    while (x !== 0) {
        temp = temp * 10 + x % 10
        x = Math.floor(x / 10)
    }

    return temp === copy

};

console.log(isPalindrome(121));
