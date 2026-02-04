const jsCode = `
function add(a, b) {
  return a + b;
}

const multiply = (x, y) => {
  return x * y;
};

export default function divide(a, b) {
  if (b === 0) throw new Error("除数不能为0");
  return a / b;
}
`;
// 要求：提取所有函数定义（包括函数名和参数）