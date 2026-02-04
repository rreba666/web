// 导出购物车相关功能
let cartItems = [];

export function addToCart(product, quantity = 1) {
  cartItems.push({ ...product, quantity });
  return cartItems;
}

export function getCartTotal() {
  return cartItems.reduce((total, item) => {
    const price = item.finalPrice || item.price;
    return total + (price * item.quantity);
  }, 0);
}

export function clearCart() {
  cartItems = [];
}

export function getCartItems() {
  return [...cartItems]; // 返回副本，保护内部数据
}