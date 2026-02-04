// 请实现：
// 1. 导入需要的所有功能
import * as cart from './cart.js'
import * as product from './product.js'

// 2. 创建几个商品

let apple = product.createProduct('苹果', '4', '食品')
let Laptop = product.createProduct('笔记本', '6000', '电子产品')
let book = product.createProduct('老人与海', '30', '图书')
let clothes = product.createProduct('T恤', '70', '服装')

// 3. 给一些商品打折
Laptop = product.applyDiscount(Laptop, 70);
book = product.applyDiscount(book, 30);
clothes = product.applyDiscount(clothes, 80);

console.log('商品信息:');
console.log(apple);
console.log(Laptop);
console.log(book);
console.log(clothes);

// 4. 将商品加入购物车
cart.addToCart(apple, 3);
cart.addToCart(Laptop);
cart.addToCart(book, 2);
cart.addToCart(clothes);


// 5. 计算购物车总价

const totalPrice = cart.getCartTotal();
console.log('\n购物车总价: ￥' + totalPrice.toFixed(2));


// 6. 显示购物车内容

const cartItems = cart.getCartItems();
console.log('\n购物车内容:');
cartItems.forEach(item => {
  const originalPrice = item.price;
  const finalPrice = item.finalPrice || item.price;
  const discount = item.discount ? ` (${item.discount}%折扣)` : '';
  
  console.log(
    `- ${item.name} x${item.quantity}: ` +
    `原价￥${originalPrice} → 现价￥${parseInt(finalPrice)}${discount} ` +
    `= ￥${(finalPrice * item.quantity).toFixed(2)}`
  );
});
