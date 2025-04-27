/**
 * 接口基础练习
 * 
 * 任务：
 * 1. 创建描述对象结构的接口
 * 2. 使用接口作为类型注解
 */

// 练习1：创建一个描述人的接口，包含姓名、年龄和可选的地址属性

// 使用上面的接口创建一个对象
const person1 = {
  name: "张三",
  age: 30
};

const person2 = {
  name: "李四",
  age: 25,
  address: "北京市"
};

// 练习2：创建一个嵌套的接口，描述一个带有联系信息的用户

// 使用上面的接口创建一个对象
const user = {
  id: 1,
  name: "王五",
  contact: {
    email: "wangwu@example.com",
    phone: "123456789"
  }
};

// 答案将在solution.ts文件中提供
