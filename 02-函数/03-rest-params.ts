/**
 * 剩余参数练习
 * 
 * 任务：
 * 1. 创建使用剩余参数的函数
 * 2. 结合其他参数类型使用剩余参数
 */

// 练习1：创建一个使用剩余参数的函数，计算所有参数的总和
const barz = (...arg :any[]) =>arg.reduce((pre,cur)=>pre+=cur ,0)
// 练习2：创建一个函数，第一个参数是字符串，剩余参数是数字，返回字符串重复n次（n为所有数字之和）
const fun = (src:string,...arg:number[]) =>{
    const sum = arg.reduce((pre,cur)=>pre += cur,0)
    src.repeat(sum)
}
// 答案将在solution.ts文件中提供
