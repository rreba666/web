const obj = {
    name: 'Alice',
    sayHi() {
        console.log(this.name);
    }
};

const sayHi = obj.sayHi;

sayHi(); // 输出什么？为什么？undefined
obj.sayHi(); // 输出什么？为什么？ 'Alice',
