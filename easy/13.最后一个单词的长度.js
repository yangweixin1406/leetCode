/**
 * @param {string} s
 * @return {number}
 * 
 * 执行用时 :80 ms, 在所有 JavaScript 提交中击败了17.25%的用户
 * 内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 * 
 * 解题思路：
 * 1.首先对字符串进行前后空格清空出来，不然把字符串分割成数组时会出现一个空的值
 * 2.返回数组最后一个值的长度
 */
var lengthOfLastWord = function(s) {
  // if (!s) return 0
  const arr = s.trim().split(' ')
  return arr[arr.length - 1].length
};

console.log(lengthOfLastWord('a '))