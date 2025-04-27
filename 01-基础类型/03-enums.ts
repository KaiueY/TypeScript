/**
 * 枚举类型练习
 *
 * 任务：
 * 1. 创建数字枚举和字符串枚举
 * 2. 使用枚举类型
 */

// 练习1：创建一个表示方向的数字枚举
enum days {
  up,
  down,
  right,
  left,
}
// 练习2：创建一个表示HTTP状态码的数字枚举，并指定初始值
enum code {
  OK = 200,
  error = 404,
  badequest = 401,
}
// 练习3：创建一个表示颜色的字符串枚举
enum colors {
  red = "red",
  blue = "blue",
  green = "green",
}
// 练习4：使用枚举作为函数参数和返回值类型
function colorType(mycolor: colors): string {
  switch (mycolor) {
    case colors.blue:
      return "blue";
    case colors.red:
      return "red";
    case colors.green:
      return "green";
    default:
      return "nill";
  }
}
// 答案将在solution.ts文件中提供
