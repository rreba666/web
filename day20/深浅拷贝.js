//  浅拷贝只复制第一层属性
let person = {
  name: "李四",
  age: 30,
  hobbies: ["篮球", "游泳"]  // 这是数组（引用类型）
};
let shallowCopy = { ...person };  // 浅拷贝

// 修改第一层属性
shallowCopy.name = "王五";
// console.log(person.name);     // "李四" - 没变 
// console.log(shallowCopy.name) // "王五" - 变了 

// console.log(shallowCopy === person);

shallowCopy.hobbies.push("跳舞");
// console.log(person.hobbies);  // ["篮球", "游泳", "跑步"]
// console.log(shallowCopy.hobbies === person.hobbies); // true，共享同一个数组

// 深拷贝函数
function deepClone(target, cache = new Map()) {
  if (typeof target !== 'object') {
    return target
  }

  if (cache.has(target)) {
    return cache.get(target)
  }

  const result = Array.isArray(target) ? [] : {}

  cache.set(target, result)

  // 数组
  if (Array.isArray(result)) {
    for (let i = 0; i < target.length; i++) {
      result.push(deepClone(target[i], cache))

    }
  } else {

    // 对象
    for (let key in target) {
      result[key] = deepClone(target[key], cache)
    }
  }

  return result

}

let person2 = deepClone(person)
person2.hobbies.push("跑步");
console.log(person === person2);

console.log(person.hobbies);
console.log(person2.hobbies);


