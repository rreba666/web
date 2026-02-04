const cat = {
  name: 'Kitty',
  sound: 'Meow',
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
};

const dog = {
  name: 'Buddy',
  sound: 'Woof'
};

// 问题1：
const boundSound = cat.makeSound.bind(dog);
boundSound(); // 输出什么？ Budd says Woof

// 问题2：
const catSound = cat.makeSound;
catSound(); // 输出什么？ undefined says undefined

// 问题3：
cat.makeSound.call(dog); // 输出什么？ Budd says Woof
