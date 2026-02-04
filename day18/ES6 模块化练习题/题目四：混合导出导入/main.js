// 导入要求：
// 1. 导入默认导出的函数，命名为 displayUser
import displayUser from './userModule.js'

// 2. 导入 id、name、sendEmail
import { id, name, sendEmail } from './userModule.js'
// 3. 使用这些功能：
//    - 显示用户信息
console.log(displayUser());

//    - 发送一封测试邮件
console.log(sendEmail(id, name));
