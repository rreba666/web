// 请实现：
// 1. 从 constants.js 导入所有常量
import * as constants from './constants.js'

// 2. 从 helpers.js 导入 formatName 和 validateEmail
import { formatName, validateEmail } from './helpers.js'

// 3. 从 calculator.js 导入 add 和 multiply
import { add, multiply } from './calculator.js'

// 4. 使用导入的功能：
//    - 显示应用信息：APP_NAME (版本 VERSION)
console.log(constants.APP_NAME);

//    - 格式化姓名：张三 丰 -> "张 三丰"
console.log(formatName('张','三丰'));

//    - 验证邮箱：test@example.com
console.log(validateEmail('test@example.com'));

//    - 计算：10 + 5 和 10 * 5
console.log(add(10,5));
console.log(multiply(10,5));

