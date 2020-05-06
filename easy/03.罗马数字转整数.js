/*
执行用时 :172 ms, 在所有 JavaScript 提交中击败了52.78%的用户
内存消耗 :39.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户

解题思路：
1.创建一个罗马数值查询字典
2.把字符串分割为数字，通过循环数组中的值判断，正常情况下都是左边的数值大于右边的数值，
  这时候我们只需要判断左边的数值小于右边数值的情况，如果存在左边小于右边则拿右边的数值减去左边的数值，
  之后累加到total中，这时候需要对i进行赋值，跳过下一层循环
3.retun出去数值
*/
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
var romanToInt = function(s) {
  const sArr = s.split('')
  let total = 0
  for (let i = 0; i < sArr.length; i++) {
    if (roman[sArr[i]] < roman[sArr[i + 1]]) {
      total += roman[sArr[i + 1]] - roman[sArr[i]]
      i++
    } else {
      total += roman[sArr[i]]
    }
  }
  return total
};

console.log(romanToInt('MCMXCIV'))