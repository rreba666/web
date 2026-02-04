// 请实现：
const userId = 12345;
const userName = "王小明";
const userEmail = "wang@example.com";

 function getUserInfo() {
  return `ID: ${userId}, 姓名: ${userName}`;
}

function sendEmail(to, message) {
  return `发送邮件到 ${to}: ${message}`;
}

// 导出要求：
// 1. 默认导出 getUserInfo 函数

export default getUserInfo

// 2. 命名导出 userId 作为 id
export {userId as id};

// 3. 命名导出 userName 作为 name
export {userName as name};

// 4. 命名导出 sendEmail 函数
export {sendEmail}