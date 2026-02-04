function Person(name) {
  this.name = name;
  this.sayName = function() {
    console.log(this.name);
  };
}

const p1 = new Person('Alice');
const p2 = new Person('Bob');

const sayName = p1.sayName;

p1.sayName(); // 输出？ Alice

p2.sayName(); // 输出？Bob

sayName(); // 输出？undefined