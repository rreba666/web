function Person(name, age) {
    // this是自身创建的对象
    this.name = name
    this.age = age
    // this.getName = function () {
    //   console.log(`hello, my name is ${this.name}`)
    // }
}

const p1 = new Person('李敏', 18)
const p2 = new Person('泉峰', 19)

Person.prototype.getName = function () {
    console.log(`hello, my name is ${this.name}`)
}
console.log(p1.getName === p2.getName) // true 说明内存空间地址一样

p1.getName()
p2.getName()