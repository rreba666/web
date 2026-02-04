function Car(brand) {
    this.brand = brand;
    console.log("1. this.brand:", this.brand);
    // console.log("2. this === window?", this === window);
    console.log("3. this instanceof Car?", this instanceof Car);
}

// 分别预测以下调用的输出：
Car("Toyota");  // Toyota false
console.log("---");
new Car("BMW"); // BMW true