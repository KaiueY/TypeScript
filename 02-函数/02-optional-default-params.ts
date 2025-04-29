/**
 * 可选参数与默认参数练习
 * 
 * 任务：
 * 1. 创建带有可选参数的函数
 * 2. 创建带有默认参数的函数
 */

// 练习1：创建一个带有可选参数的函数
const  fn  = (a:number,b?:number) =>  b ? a+b:a
// 练习2：创建一个带有默认参数的函数
const  fo  = (a:number,b:number = 1) =>  a+b
// 练习3：创建一个同时具有必选、可选和默认参数的函数
const bar = (a:number ,b?:number,c:number = 2) => a**2
// 答案将在solution.ts文件中提供
