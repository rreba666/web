const str = "我的电话是123-4567-890，价格是99.99元，邮编100086";
// 要求：
// 1. 匹配所有连续的数字：123, 4567, 890, 99, 99, 100086
let rag = /\d+/g
console.log(str.match(rag));


// 2. 匹配带小数点的数字：99.99
let rag2 = /(\d+\.\d+)/g
console.log(str.match(rag2));


// 3. 匹配电话号码格式：123-4567-890
let rag3 = /(\d+-\d+-\d+)/g
console.log(str.match(rag3));


