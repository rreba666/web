// 导入要求：
// 1. 导入默认导出的 Rectangle 类
import Rectangle from "./shapes.js";

// 2. 导入 Circle 类和 SHAPE_TYPES 常量
import { Circle, SHAPE_TYPES } from "./shapes.js";

// 3. 创建实例并测试：
//    - 创建一个 10x5 的矩形，计算面积和周长
let rectangle = new Rectangle(10,5)
console.log(`面积是：${ rectangle.area()},周长是：${rectangle.perimeter()}`);

//    - 创建一个半径为7的圆形，计算面积和周长
let circle = new Circle(7)
console.log(`面积是：${ parseInt(circle.area())},周长是：${parseInt(circle.circumference())}`);

//    - 显示形状类型常量
console.log(SHAPE_TYPES);



