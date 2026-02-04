 // 导出：
// 1. 函数 formatName(first, last)，返回 "姓 名" 格式

export function formatName(first, last) {
    return `${first} ${last}`
}


// 2. 函数 validateEmail(email)，检查邮箱格式（简单检查@符号）

export function validateEmail(email) {
    if(!email.includes('@')){
        return '邮箱格式错误'
    }
    return '格式正确'
}

// 3. 函数 getCurrentYear()，返回当前年份

export function getCurrentYear() {
    return now.getFullYear()
}