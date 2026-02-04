const text = "Hello 你好 World 世界 123！";
// 要求：匹配所有中文字符

let rag = /(\S+)/g
const chineseRegex = /[\u4e00-\u9fa5]/g; 
console.log(text.match(rag));
