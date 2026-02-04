function calculate(a, b, c) {
    return this.multiplier * (a + b + c);
}

const context = { multiplier: 2 };
// 使用call实现：2*(1+2+3)
console.log(calculate.call(context, 1, 2, 3));

// 使用apply实现：2*(4+5+6)
console.log(calculate.apply(context,[4,5,6]));

