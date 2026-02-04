// 请实现：
// 1. 从 index.js 导入需要的功能
import * as index from './index.js'

// 2. 测试所有导入的功能

console.log(`${index.config.SITE_NAME} ${index.default}版本`);
console.log(`满分：${index.config.MAX_SCORE}，及格：${index.config.PASS_SCORE}`);

console.log(index.math.sum(10,20));
console.log(index.math.average([10,20,30,40]));

console.log(index.string.reverse('asfasfas'));
console.log(index.string.toUpper('asfasfas'));







