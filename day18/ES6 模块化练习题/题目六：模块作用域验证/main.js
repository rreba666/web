// 导入所有函数
import { increment, decrement, getCount, reset } from './counter.js';

// 请回答以下问题并验证：
// 1. 多次调用 increment()，count 如何变化？
// count会累加

// 2. 能否直接修改 count 变量？为什么？
//  不可用，因为count没有被暴露无法访问

// 3. 在不同地方多次导入这个模块，count 是共享的吗？
// 共享的，正常情况下模块是单例的，只要修改了所有引用的地方都能看见