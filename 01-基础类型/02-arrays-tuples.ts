/**
 * 数组与元组练习
 * 
 * 任务：
 * 1. 创建并使用数组类型
 * 2. 创建并使用元组类型
 */

// 练习1：创建一个字符串数组类型并赋值
const arr:string[] = ['kailin','yueyue','hanhan']
// 练习2：创建一个数字数组并使用数组方法
const numberArr:number[] = [1,2,3,4,5]
const sum:number = numberArr.reduce((cur,pre)=>pre+=cur,0)

// 练习3：创建一个元组类型，包含一个字符串和一个数字
let tom :[string,number] = ['age',20]
// 练习4：创建一个可选元素的元组类型
type tumple  = [string,number,boolean?]
let t1:tumple = ['kailin',12]
// 答案将在solution.ts文件中提供
