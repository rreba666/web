
const data = [
  { month: 'Jan', sales: 1000, expenses: 800, region: 'North' },
  { month: 'Feb', sales: 1200, expenses: 900, region: 'North' },
  { month: 'Mar', sales: 800, expenses: 700, region: 'South' },
  { month: 'Apr', sales: 1500, expenses: 1000, region: 'South' },
  { month: 'May', sales: 2000, expenses: 1500, region: 'North' }
];

// 1. 计算每个月的利润（sales - expenses），生成新数组
let monthsProfits = data.map(item => ({
  month: item.month,
  profit: item.sales - item.expenses
}))
console.log(monthsProfits);


// 2. 找出销售额超过1000的所有月份
let salesBigger = data.filter(item => item.sales > 1000).map(item => item.month)
console.log(salesBigger);


// 3. 计算北部区域（region === 'North'）的总销售额
let NorthTotal = data.filter(item => item.region === 'North').reduce((sum, item) => sum + item.sales, 0)
console.log(NorthTotal);

// 4. 找出利润最高的月份
let maxProfitMonth = data.reduce((result, item) => (result.sales - result.expenses) > (item.sales - item.expenses) ? result : item).month
console.log(maxProfitMonth)

// 5. 判断是否有月份亏损（利润 < 0）
let isLoss = data.some(item => item.sales < item.expenses)
console.log(isLoss);


// 6. 获取所有不同区域的数组（去重）
let regionList = [...new Set(data.map(item=>item.region))]
console.log(regionList);
