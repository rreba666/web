// 请实现：
// 1. 导出一个常量 PI，值为 3.14159

export const PI = 3.14159

// 2. 导出一个函数 square，计算数字的平方

export function square(num) {
    return Math.pow(num, 2)
}


// 3. 导出一个函数 circleArea，计算圆的面积（使用PI）

export function circleArea(r,PI) {
    return (PI * Math.pow(r, 2))
}


// 4. 默认导出一个函数 add，计算两个数字的和

export default function add(num1, num2) {
    return num1 + num2
}