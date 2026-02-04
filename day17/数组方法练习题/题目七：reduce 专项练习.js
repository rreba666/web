const nums = [1, 2, 3, 4, 5];

// 使用 reduce 实现：
// 1. 求和
let sum = nums.reduce((sum, item) => sum + item)
console.log(sum);

// 2. 求乘积
let product = nums.reduce((sum, item) => sum * item)
console.log(product);

// 3. 找出最大值
let maxNum = nums.reduce((sum, item) => sum > item ? sum : item)
console.log(maxNum);

// 4. 找出最小值
let minNum = nums.reduce((sum, item) => sum < item ? sum : item)
console.log(minNum);

// 5. 将数组转为对象：{ index: value }
let target = nums.reduce((result, item, index) => {
    result[index] = item
    return result
},{})
console.log(target);

// 6. 统计每个数字出现的次数（假设有重复数字）
let count = nums.reduce((result,item)=>{
    result[item] = (result[item] || 0) + 1;
    return result
},{})

console.log(count);


const words = ['Hello', ' ', 'World', '!'];

// 7. 使用 reduce 将单词数组连接成字符串

let str = words.reduce((result,item)=> result+item)
console.log(str);

// 8. 统计字符串总长度

let strLenth = words.reduce((result,item)=> result+item).length
console.log(strLenth);
