function createUser(name) {
    return { name: name };
}

function User(name) {
    this.name = name;
}

const obj1 = createUser("Alice");
const obj2 = User("Bob");
const obj3 = new User("Charlie");

// 问题：
// a) obj1、obj2、obj3 分别是什么？
//  obj1 普通函数调用
//  obj2 构造函数
//  obj3 构造函数new对象


// b) 哪个是构造函数？为什么？
// User 函数名首字母大写且隐式返回this


// c) 这段代码有什么潜在问题？
// const obj2 = User("Bob"); 会污染全局