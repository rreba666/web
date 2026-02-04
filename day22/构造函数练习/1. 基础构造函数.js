// 题目：创建一个 Student 构造函数，要求：
// - 接收 name, age, grade 参数
// - 有一个 introduce 方法，返回自我介绍字符串
// - 实例化两个不同的学生并调用 introduce 方法

// 你的实现：

function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;

}

Student.prototype.introduce = function () {
    return `我是${this.name},${this.age}岁,${this.grade}`
}

let s1 = new Student('张三', 18, '男');
let s2 = new Student('李四', 20, '女');
console.log(s1.introduce());
console.log(s2.introduce());
