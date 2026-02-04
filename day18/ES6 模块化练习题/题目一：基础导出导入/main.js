// 请实现：
// 1. 导入 PI、square、circleArea（命名导入）

import { PI, square, circleArea } from './mathUtils.js'

// 2. 导入默认导出的 add 函数
import add from './mathUtils.js'


// 3. 测试所有导入的功能：
//    - 计算半径为5的圆面积
console.log(circleArea(5, PI));

//    - 计算4的平方
console.log(square(4));

//    - 计算10和20的和
console.log(add(10, 20));



