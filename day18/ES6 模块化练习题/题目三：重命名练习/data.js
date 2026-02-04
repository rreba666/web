const firstName = "李";
const lastName = "小龙";
const birthYear = 1940;

// 导出要求：
// 1. 导出 firstName，导入时使用变量名 fName
export { firstName as fName }

// 2. 导出 lastName，导入时使用变量名 lName
export { lastName as lName }

// 3. 导出 birthYear，导入时使用变量名 year
export { birthYear as year }