var myAtoi = function (s) {
    let reg = /^(\d?-?\+?)\d?\d+/g
    let num = (parseInt(s.trim().match(reg)))

    if (num > 2147483647) {
        num = 2147483648
    }
    else if (num < -2147483647) {
        num = -2147483648
    }

    if (isNaN(num)) {
        return 0
    }
    return num
};
let str = "+1"
console.log(myAtoi(str));



// 1283472332
// 91283472332
