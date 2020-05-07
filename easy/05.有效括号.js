/*
执行用时 :52 ms, 在所有 JavaScript 提交中击败了99.27%的用户
内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了90.91%的用户

解题思路
1.先定义一个空数组，以及定义传进去字符串的的长度，字符串的长度主要是用来判断是否长度为奇数，是的话直接return false
2.for...of 循环遍历字符串的每一个值，如果都是左边括号，则直接push进数组里面，判断的是有效括号，必有左右括号是连在一起的，
  这时候判断删除之前存进去值的数组的最后一项，如果最后一项的值不等于当前右括号的左部分则直接返回false
3.最后的return !arr.length是为了判断前面的switch语句是否插入值进入arr中，有效括号的话在switch语句中数值就会清空了
*/
var isValid = function(s) {
  let arr = []
  const len = s.length
  if (len % 2) return false
  for (let val of s) {
    switch(val) {
      case '(':
        arr.push(val)
        break
      case '[':
        arr.push(val)
        break
      case '{': 
        arr.push(val)
        break
      case ')':
        if (arr.pop() !== '(') return false
        break
      case ']':
        if (arr.pop() !== '[') return false
        break
      case '}':
        if (arr.pop() !== '{') return false
        break
    }
  }
  return !arr.length
};

console.log(isValid('()'))