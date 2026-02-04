// 模块作用域变量（不导出）
let count = 0;

// 导出的函数
export function increment() {
  count++;
  return count;
}

export function decrement() {
  count--;
  return count;
}

export function getCount() {
  return count;
}

export function reset() {
  count = 0;
}