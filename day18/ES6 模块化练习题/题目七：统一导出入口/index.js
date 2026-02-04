// 请实现：
// 1. 重新导出 config.js 的所有内容
export * as config from './config.js';

// 2. 重新导出 math.js 的所有内容
export * as math from './math.js';

// 3. 重新导出 string.js 的所有内容
export * as string from './string.js';

// 4. 添加一个默认导出：APP_VERSION = "2.0"
const APP_VERSION = "2.0"
export default APP_VERSION