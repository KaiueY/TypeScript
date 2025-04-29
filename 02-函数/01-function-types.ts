/**
 * 函数类型练习
 * 
 * 任务：
 * 1. 为函数添加参数类型和返回值类型
 * 2. 创建函数类型并使用它
 */

// 练习1：为以下函数添加参数类型和返回值类型
function add(a:number, b:number):number {
  return a + b;
}

// 练习2：创建一个函数类型并使用它
// 定义一个名为MathOperation的函数类型，接受两个number参数并返回一个number
type MathOperation = (x:number,y:number) =>number
// 使用上面定义的函数类型创建几个函数
const multiply:MathOperation = (x, y) => x * y;
const divide:MathOperation = (x, y) => x / y;

// 练习3：使用函数类型作为参数
function calculate(a:number, b:number, operation:MathOperation) {
  return operation(a, b);
}

// 答案将在solution.ts文件中提供
