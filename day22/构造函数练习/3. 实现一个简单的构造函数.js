// 任务：创建一个 Student 构造函数
// 要求：
// 1. 接收 name, grade, score 三个参数
// 2. 将这些参数保存为实例属性
// 3. 添加一个实例方法 getStatus()，根据score返回：
//    - score >= 60: "合格"
//    - score < 60: "不合格"
// 4. 所有实例共享这个方法（不要每个实例都创建新函数）

// 请在这里实现 Student 构造函数
function Student(name, grade, score) {
    this.name = name
    this.grade = grade
    this.score = score

    this.getStatus = function () {
        if (score >= 60) {
            return "合格"
        } else {
            return "不合格"
        }
    }


}

// 测试代码
const s1 = new Student("小明", "三年级", 85);
const s2 = new Student("小红", "四年级", 55);
console.log(s1.getStatus()); // 应该输出："合格"
console.log(s2.getStatus()); // 应该输出："不合格"