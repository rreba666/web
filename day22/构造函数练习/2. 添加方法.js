// 题目：创建一个 Book 构造函数
// - 属性：title, author, price, isRead（默认为 false）
// - 方法：read() 将 isRead 设为 true
// - 方法：getInfo() 返回书籍信息，如果已读要标注
// - 测试：创建一本书，调用 read()，然后输出信息
// \o/ \o/ \o/ \o/ \o/ \o/ \o/ \o/ \o/ \o/ \o/ \o/
function Book(title,author,price,isRead=false) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.isRead = isRead;
}

Book.prototype.read = function () {
    this.isRead = true
}

Book.prototype.getInfo = function () {
    return `书名:${this.title},作者:${this.author},价格:${this.price},是否阅读:${this.isRead}`
}

let book1 = new Book('老人与海','海明威','￥42')
book1.read()
console.log(book1.getInfo());
