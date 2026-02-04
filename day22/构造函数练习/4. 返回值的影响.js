// 题目：分析以下构造函数的返回值对实例化的影响

function A() {
    this.value = 1;
    return 100;  // 返回原始值
}

function B() {
    this.value = 1;
    return { x: 2 };  // 返回对象
}

// 问题：new A() 和 new B() 分别得到什么？为什么？

let tempA  = new A()
console.log(tempA);     // 返回数值不影响原A对象

let tempB  = new B()
console.log(tempB);    // 返回的对象覆盖原B对象
