const students = [
    { id: 1, name: '张三', score: 85, passed: true },
    { id: 2, name: '李四', score: 62, passed: false },
    { id: 3, name: '王五', score: 90, passed: true },
    { id: 4, name: '赵六', score: 58, passed: false },
    { id: 5, name: '孙七', score: 95, passed: true }
];

// 1. 使用 map 提取所有学生的姓名数组

let stuNames = students.map(item => item.name)
console.log(stuNames);


// 2. 使用 filter 筛选出及格的学生（score >= 60）

let passStu = students.filter(item => item.score >= 60)
console.log(passStu);


// 3. 使用 find 找到第一个不及格的学生

let fistNoPassStu = students.find(item => item.score < 60)
console.log(fistNoPassStu);


// 4. 使用 some 判断是否有学生成绩大于95

let isfineScore = students.some(item => item.score > 95)
console.log(isfineScore);


// 5. 使用 every 判断是否所有学生都有id属性

let isStuId = students.every(item => item.id != null)
console.log(isStuId);

// 6. 使用 filter 和 map 组合：获取所有及格学生的姓名

let  PassStuName = students.filter(item => item.score >= 60).map(item => item.name)

console.log(PassStuName);
