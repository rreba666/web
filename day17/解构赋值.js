let age = 15
let user = {
    name: '张三',
    age: 18,
    email: '666@163.com',
    a: {
        b: 2,
        c: 3,
    },
}

let {
    name,
    age: userAge, // 取别名防止歧异
    email = '111@163.com', // 设置默认值,无该属性则取默认值
    address, // 解构对象不存在的属性得到undefined
    a: { c }
} = user

let info = `my name is ${name},age is ${userAge},email is ${email},address is ${address}`
console.log(info);
// console.log(a);
console.log(c);


