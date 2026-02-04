const userInputs = [
  "   user123   ",
  "admin<script>alert('xss')</script>",
  "john@doe.com",
  "年龄:25岁",
  "<b>重要</b>通知"
];
// 要求：
// 1. 去除首尾空格
// 2. 移除HTML标签
// 3. 只保留字母、数字、@、.、-、_