// 导入要求：
// 1. 导入 data.js 中的三个变量，并重命名为：
//    fName -> name
//    lName -> surname
//    year -> birth

import { fName as name, lName as surname, year as birth } from "./data.js";

// 2. 计算年龄（假设今年是2024年）

console.log(2024 - birth);

// 3. 输出：姓名：李小龙，年龄：84岁
console.log(`姓名：${name}${surname}，年龄：${2024 - birth}岁`);
