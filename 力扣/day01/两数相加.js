var addTwoNumbers = function (l1, l2) {
    let num1 = '', num2 = '', sum = 0

    for (let i = l1.length - 1; i >= 0; i--) {
        num1 += l1[i]
    }
    for (let i = l2.length - 1; i >= 0; i--) {
        num2 += l2[i]
    }
    sum = parseInt(num1) + parseInt(num2)
    let arr = sum.toString().split("").reverse()
    return arr
};
let l1 = [2, 4, 3]
let l2 = [5, 6, 4]
let arr = addTwoNumbers(l1, l2)

console.log(arr);