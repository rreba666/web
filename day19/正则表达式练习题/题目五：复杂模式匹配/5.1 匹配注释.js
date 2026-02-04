const code = `
// 单行注释
const x = 1;
/*
  多行注释
  第二行
*/
function test() {
  // 函数内的注释
  return x;
}
`;
// 要求：提取所有注释内容（单行和多行）