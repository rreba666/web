const orders = [
    { orderId: 1, customer: '张三', amount: 120, status: 'completed' },
    { orderId: 2, customer: '李四', amount: 80, status: 'pending' },
    { orderId: 3, customer: '王五', amount: 200, status: 'completed' },
    { orderId: 4, customer: '赵六', amount: 60, status: 'cancelled' },
    { orderId: 5, customer: '孙七', amount: 150, status: 'completed' }
];

// 使用链式调用完成以下操作：
// 1. 筛选出已完成的订单

let completedOrders = orders.filter(item => item.status === 'completed')
console.log(completedOrders);

// 2. 提取这些订单的金额

let completedOrdersaMount = orders.filter(item => item.status === 'completed').map(item => item.amount)
console.log(completedOrdersaMount);


// 3. 计算已完成订单的总金额

let total = orders.filter(item => item.status === 'completed').map(item => item.amount).reduce((result, item) => result + item, 0)
console.log(total);

// 4. 找出金额最大的已完成订单


let completedOrdersaMaxMount = orders.filter(item => item.status === 'completed').reduce((result, item) => result.amount > item.amount ? result : item, null)
console.log(completedOrdersaMaxMount);


// 5. 获取所有已完成订单的客户姓名数组

let completedUserName  =orders.filter(item => item.status === 'completed').map(item=>item.customer)
console.log(completedUserName);
