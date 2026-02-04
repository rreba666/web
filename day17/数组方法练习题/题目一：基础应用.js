const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. 使用 forEach 打印每个数字的平方

numbers.forEach(item => console.log(item * item))

// 2. 使用 map 创建新数组，包含每个数字的平方

let newNumbers = numbers.map(item => item * item)
console.log(newNumbers);


// 3. 使用 filter 筛选出所有偶数

let evenNumbers = numbers.filter(item => item % 2 ==0)
console.log(evenNumbers);


// 4. 使用 find 找到第一个大于5的数字

let fistBigFiveNum = numbers.find(item => item >5)
console.log(fistBigFiveNum);


// 5. 使用 some 判断数组中是否有大于8的数字

let isBigEight = numbers.some(item => item >8)
console.log(isBigEight);


// 6. 使用 every 判断是否所有数字都大于0

let isEveryOneBigZreo = numbers.every(item => item>0)
console.log(isEveryOneBigZreo);
