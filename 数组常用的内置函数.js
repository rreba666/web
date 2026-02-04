let arr = ['张三', '李四', '王五', '赵六', '田七', '孙八', '刘九']

// console.log("for in 循环");

// for (const index in arr) {
//     console.log(arr[index]);
// }

// console.log("for of 循环");

// for (const item of arr) {
//     console.log(item);
// }

// console.log("foreach 循环");

// arr.forEach((item,index)=>{
//     console.log(index,item);

// })

arr.push('郑十');
arr.unshift('小狗');
arr.pop();
arr.shift();
console.log(arr.includes("小狗"));
arr.indexOf("四")

console.log(arr);


let num_list = [2, 5, 7, 8, 9, 44, 42, 34, 46, 574, 3565, 347, 36, 77, -1]
let count = 0
for (const item of num_list) {
    if (item % 2 == 0) {
        count += item
        console.log(item);

    }
}
console.log(`该数组的所有偶数之和为:${count}`);


let new_num = ''
for (const item of num_list) {
    if (item % 3 == 0) {
        new_num += item + ' '

    }
}
console.log('该数组所有能被3整除的数字为:' + new_num);


let sum = 0
for (const item of num_list) {
    sum += item
}
console.log("这个数组的平均值是:" + (parseInt(sum / num_list.length)));


let max = 0
for (const item of num_list) {
    if ((item - max) > 0) {
        max = item
    }
}
console.log("这个数组的最大值是:" + max);

let min = num_list[0]
for (const item of num_list) {
    if ((item - min) < 0) {
        min = item
    }
}
console.log("这个数组的最小值是:" + min);



let new_num_list = []
for (const item of num_list) {
    if (item % 2 == 0) {
        new_num_list.push(item)
    }
}
console.log('原数组的所有偶数为：');
console.log(new_num_list);
