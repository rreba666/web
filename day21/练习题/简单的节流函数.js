function throttle(func, interval) {
  // 请补充实现代码
  let lastTime = 0

  return function () {
    let nowTime  = Date.now()
    if (nowTime - lastTime > interval) {
        func.call(this,...arguments)
        lastTime = nowTime
    }

  }
}