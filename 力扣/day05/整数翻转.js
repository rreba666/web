var reverse = function (x) {
    let top = 2147483647;
    let btm = -2147483648;


    const isNegative = x < 0;
    let num = parseInt(String(x).split("").reverse().join(""));

    if (num > top || num < btm) {
        return 0
    }

    if (isNegative) {
        return num * -1
    }
    return num

};

console.log(reverse(1534236469));
