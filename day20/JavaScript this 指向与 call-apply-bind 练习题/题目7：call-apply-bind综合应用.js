const calculator = {
    value: 5,
    add: function (x) {
        return this.value + x;
    },
    multiply: function (x, y) {
        return this.value * x * y;
    }
};

const otherCalculator = {
    value: 10
};

// 任务：
// 1. 使用call让otherCalculator借用add方法计算 10 + 3
console.log(calculator.add.call(otherCalculator, 3));

// 2. 使用apply让otherCalculator借用multiply方法计算 10 * 2 * 4
console.log(calculator.multiply.apply(otherCalculator, [2, 4]));


// 3. 使用bind创建一个新函数，永久绑定otherCalculator到multiply方法

let otherMultiply = calculator.multiply.bind(otherCalculator)

console.log(otherMultiply(2,4));


