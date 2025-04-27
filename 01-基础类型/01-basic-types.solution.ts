/**
 * 基本类型练习 - 解答
 */

// 练习1：为以下变量添加类型注解
let name: string;
let age: number;
let isActive: boolean;

// 练习2：修复以下代码中的类型错误
let count: number = 10; // 或 let count = 10;
let message: string = "true"; // 或 let message = "true";
let isValid: boolean = false; // 或 let isValid = false;

// 练习3：使用类型注解定义函数参数和返回值
function greet(person: string): string {
  return "Hello, " + person;
}

// 练习4：使用字面量类型
let direction: "north" | "south" | "east" | "west";
// 现在direction只能被赋值为这四个字符串之一
