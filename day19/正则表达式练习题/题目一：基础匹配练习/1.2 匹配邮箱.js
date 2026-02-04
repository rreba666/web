const emails = [
  "user@example.com",
  "john.doe@gmail.com",
  "test_user@company.co.uk",
  "wrong-email@",
  "@missing.com",
  "spaces in@email.com"
];
// 要求：匹配合法的邮箱地址
let rag = /^[\w.-]+@[\w.-]+\.com$/g;

for (const item of emails) {
    console.log(item.match(rag));
    
}
