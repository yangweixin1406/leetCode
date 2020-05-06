/*
执行用时 :52 ms, 在所有 JavaScript 提交中击败了99.86%的用户
内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了96.97%的用户

解题思路
1.为空判断：判断所传数组是否为空，为空直接返回""
2.先拿到数组中的第一个值进行处理，存一个下表，为了while循环使用
3.内部循环遍历 数组的每一个值，判断当前下表是否包含str
*/
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ""
  let s = strs[0], idx = 1;
  while (idx < strs.length) {
    while (strs[idx].indexOf(s)) {
      // 每次对当前下标的值截取值进行减一操作
      s = s.substr(0, s.length - 1)
      if (!s.length) return ""
    }
    idx++
  }
  return s
};

// const strs = ['c', 'c']
const strs = ['flow', 'flag', 'flight']
console.log(longestCommonPrefix(strs))