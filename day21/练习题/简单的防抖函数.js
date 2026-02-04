function debounce(func, delay) {
    // 请补充实现代码
    let timer

    return function (...arg) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, arg)
        }, delay);


    }

}