const employees = [
  { name: 'Alice', department: 'IT', salary: 8000, years: 3 },
  { name: 'Bob', department: 'HR', salary: 6000, years: 5 },
  { name: 'Charlie', department: 'IT', salary: 9000, years: 7 },
  { name: 'David', department: 'Sales', salary: 7000, years: 2 },
  { name: 'Eve', department: 'IT', salary: 8500, years: 4 }
];

// 要求：
// 1. 给IT部门所有员工加薪10%
let salary = employees.map(item => {
  if (item.department === 'IT') {
    return {
      ...item,
      salary: item.salary * 1.1
    };
  }
  return item
})
console.log(salary);

// 2. 筛选出工作年限超过3年的员工

let threeYear = salary.filter(item => item.years > 3)
console.log(threeYear);


// 3. 找出薪资最高的员工
let MaxSalay = salary.reduce((result, item) => result.salary > item.salary ? result : item)
console.log(MaxSalay);


// 4. 计算各部门的平均薪资
let departments = [...new Set(salary.map(item => item.department))];
const result = {};
departments.forEach(dep => {
  // 找出该部门的所有员工
  let deptEmployees = salary.filter(emp => emp.department === dep)
  // 计算总薪资
  let totalSalary = deptEmployees.reduce((sum, emp) => sum + emp.salary, 0)

  result[dep] = totalSalary /deptEmployees.length
})

console.log(result);





// 5. 找出IT部门中工作年限最长的员工
let eldestYear = salary.filter(item => item.department === 'IT').reduce((result, item) => result.years > item.years ? result : item)
console.log(eldestYear);

// 6. 判断是否有员工薪资超过10000

let isMaxSalary = salary.some(item => item.salary > 10000)
console.log(isMaxSalary);
