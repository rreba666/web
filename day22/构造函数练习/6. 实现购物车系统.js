/*
设计一个电商系统的构造函数：
1. Product 商品类
   - id, name, price, stock

2. CartItem 购物车项类
   - product, quantity
   - 方法：getTotalPrice() 计算单项总价

3. ShoppingCart 购物车类
   - items: 存储 CartItem 的数组
   - 方法：addItem(product, quantity)
   - 方法：removeItem(productId)
   - 方法：getTotal() 计算购物车总价
   - 方法：checkout() 结账（检查库存并清空购物车）

4. 编写测试代码模拟完整购物流程
*/

class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
    getInfo() {
        return `${this.product.name} x${this.quantity} = ￥${this.getTotalPrice()}`;
    }
}

class ShoppingCart {

    constructor() {
        this.items = [];
    }


    addItem(product, quantity) {
        this.items.push(new CartItem(product, quantity))
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id != productId)
    }

    getTotal() {
        return this.items.reduce((result, item) => {
            return result + item.getTotalPrice();
        }, 0)
    }

    showCart() {
        if (this.items.length === 0) {
            console.log('购物车为空');
            return;
        }

        console.log('=== 购物车内容 ===');
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.getInfo()}`);
        });
        console.log(`总计: ￥${this.getTotal()}`);
        console.log('==================');
    }
}

const products = [
    new Product(1, 'iPhone 15', 6999, 10),
    new Product(2, 'MacBook Pro', 12999, 5),
    new Product(3, 'AirPods Pro', 1499, 20),
    new Product(4, 'iPad Air', 4799, 8)
];

products.forEach(p => console.log(`${p.name}: ￥${p.price} (库存: ${p.stock})`));

const cart = new ShoppingCart();
cart.addItem(products[0], 2);  // iPhone 15 x2
cart.addItem(products[1], 1);  // MacBook Pro x1
cart.addItem(products[2], 3);  // AirPods Pro x3
cart.addItem(products[0], 1);  // 再次添加 iPhone 15

cart.showCart()
