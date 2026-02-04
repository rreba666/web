// 导出：
// 1. 函数 add(a, b) - 加法

export function add(a, b) {
    return a + b
}


// 2. 函数 subtract(a, b) - 减法

export function subtract(a, b) {
    return a - b
}


// 3. 函数 multiply(a, b) - 乘法

export function multiply(a, b) {
    return a * b
}

// 4. 函数 divide(a, b) - 除法（注意除零判断）

export function divide(a, b) {
    if (b == 0) {
        return '0不能为除数'
    }
    return a / b
}