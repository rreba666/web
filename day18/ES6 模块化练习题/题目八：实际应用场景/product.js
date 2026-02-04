// 导出商品相关的函数和常量
export const PRODUCT_CATEGORIES = ['电子产品', '图书', '服装', '食品'];

export function createProduct(name, price, category) {
  return {
    id: Date.now(),
    name,
    price,
    category,
    discount: 0
  };
}

export function applyDiscount(product, percent) {
  const discounted = { ...product };
  discounted.discount = percent;
  discounted.finalPrice = product.price * (1 - percent / 100);
  return discounted;
}