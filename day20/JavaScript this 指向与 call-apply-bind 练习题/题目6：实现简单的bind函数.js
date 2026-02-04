// 请实现一个简化版的myBind函数
Function.prototype.myBind = function(context) {
  // 你的代码
    let func = this;

    return function () {
        return func.call(context)
    }
    
};

// 测试用例
function showAge() {
  console.log(this.age);
}

const obj1 = { age: 25 };
const obj2 = { age: 30 };

const boundShowAge = showAge.myBind(obj1);
boundShowAge(); // 应该输出25

showAge.myBind(obj2)(); // 应该输出30