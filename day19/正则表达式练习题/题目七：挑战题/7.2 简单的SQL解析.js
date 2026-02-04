const sql = `
SELECT name, age FROM users WHERE age > 18 AND city = '北京'
INSERT INTO products (name, price) VALUES ('商品1', 99.99)
UPDATE users SET age = age + 1 WHERE id = 1
`;
// 要求：
// 1. 提取SQL语句类型（SELECT/INSERT/UPDATE）
// 2. 提取表名
// 3. 提取字段名
// 4. 提取WHERE条件