// 定义一个矩形类
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
};

// 定义一个圆形类
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
};

// 导出要求：
// 1. 默认导出 Rectangle 类

export default Rectangle;

// 2. 命名导出 Circle 类

export { Circle };
// 3. 命名导出一个常量 SHAPE_TYPES，包含 'RECTANGLE' 和 'CIRCLE'

export const SHAPE_TYPES = { RECTANGLE: 'RECTANGLE', CIRCLE: 'CIRCLE' }