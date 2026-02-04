const products = [
  { id: 1, name: 'iPhone', price: 5999, category: 'electronics', stock: 10 },
  { id: 2, name: 'T-shirt', price: 99, category: 'clothing', stock: 50 },
  { id: 3, name: 'Book', price: 49, category: 'books', stock: 0 },
  { id: 4, name: 'Coffee', price: 29, category: 'food', stock: 100 },
  { id: 5, name: 'Laptop', price: 8999, category: 'electronics', stock: 5 }
];

// 1. 计算所有商品的总价值（价格 × 库存）

let total = products.map(item => item.price * item.stock)

console.log(total);

// 2. 找出所有电子类商品（category === 'electronics'）

let electronicsProducts = products.filter(item => item.category === "electronics")
console.log(electronicsProducts);



// 3. 找出价格在50-100之间的商品

let priceMedium = products.filter(item => item.price >= 50 && item.price <= 100)
console.log(priceMedium);

// 4. 判断是否有缺货商品（stock === 0）

let isOutStock = products.some(item => item.stock === 0)
console.log(isOutStock);


// 5. 给所有商品涨价10%，生成新数组

let priceUp = products.map(item => {
    item.price =  parseInt(item.price * 1.1)
    return item
})
console.log(priceUp);


// 6. 找出第一个库存少于20的商品

let stockLess = products.find(item => item.stock < 20)
console.log(stockLess);
