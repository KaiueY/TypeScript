/**
 * 函数类型接口练习
 * 
 * 任务：
 * 1. 创建描述函数的接口
 * 2. 使用函数类型接口
 */

// 练习1：创建一个描述比较函数的接口，接受两个相同类型的参数并返回一个数字
interface Comparator<T> {
    (a: T, b: T): number;
  }
// 练习2：创建一个描述事件处理函数的接口，接受一个事件对象参数并且没有返回值
interface EventHandle {
    (event:Event):void
}
// 练习3：实现上述接口的函数
const compare:Comparator<number> = (a,b) =>{
    if(a>b) return 1
    if(a<b) return -1
    return 0
}
const handleClick: EventHandle = (event) => {
    console.log('事件触发:', event.type);
  };
// 答案将在solution.ts文件中提供
