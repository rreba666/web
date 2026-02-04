function introduce(greeting, punctuation) {
  console.log(`${greeting}, 我是${this.name}${punctuation}`);
}

const person1 = { name: '张三' };
const person2 = { name: '李四' };

// 如何让introduce函数分别用person1和person2作为this调用？
// 请写出代码


introduce.apply(person1,['你好','!'])
introduce.apply(person2,['你好','!'])