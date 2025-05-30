/**
 * 可选属性与只读属性练习
 * 
 * 任务：
 * 1. 创建带有可选属性的接口
 * 2. 创建带有只读属性的接口
 */

// 练习1：创建一个描述用户配置的接口，包含多个可选属性
interface UserSettings {
    username?: string;
    email?: string;
    notifications?: boolean;
    theme?: 'light' | 'dark';
  }
// 练习2：创建一个带有只读属性的接口，描述一个不可变的点坐标
interface Point {
    readonly x: number;
    readonly y: number;
  }
// 练习3：创建一个同时包含可选属性和只读属性的接口
interface lifeLoad {
    readonly name:string
    target:string
    Effort:boolean
    method:string

}
// 答案将在solution.ts文件中提供
