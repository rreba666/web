const logs = `
[2024-01-15 10:30:25] INFO: User login successful
[2024-01-15 10:31:00] ERROR: Database connection failed
[2024-01-15 10:32:15] WARNING: High memory usage detected
`;
// 要求：
// 1. 提取时间戳
// 2. 提取日志级别（INFO/ERROR/WARNING）
// 3. 提取日志消息