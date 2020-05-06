/*
执行用时 :212 ms, 在所有 JavaScript 提交中击败了85.30%的用户
内存消耗 :45.4 MB, 在所有 JavaScript 提交中击败了72.00%的用户

回文数解题思路
1.先判断传递进来的是否是数值类型
2.如果传递的值是负数，说明不可能构成回文数，直接return就可以
3.把数字转换成字符串，对字符串长度进行判断，如果长度是偶数，证明左边和右边相等，如果是奇数，则直接去除中间位数，进行后续判断
4.对截取的字符串进行反转，判断是否和左边截取的字符串相等
*/
var isPalindrome1 = function(x) {
  if (typeof x !== 'number') return
  if (x < 0) {
    return false
  } else {
    const strX = String(x)
    let leftStr = ''
    let rightStr = ''
    let newStr = ''
    if (strX.length % 2 === 0) {
      leftStr = strX.slice(0, strX.length / 2)
      newStr = strX.slice(strX.length / 2)
      for (let i = newStr.length - 1; i >= 0; i--) {
        rightStr += newStr.charAt(i)
      }
    } else {
      leftStr = strX.slice(0, strX.length / 2)
      newStr = strX.slice(strX.length / 2 + 1)
      for (let i = newStr.length - 1; i >= 0; i--) {
        rightStr += newStr.charAt(i)
      }
    }
    return leftStr === rightStr ? true : false
  }
};

/*
另一个解题思路，leetcode上面的解题
*/
var isPalindrome = function(x) {
  const y = x
  let xReversed = 0
  while (x > 0) {
    xReversed = x % 10 + xReversed * 10
    x = Math.floor(x / 10)
  }
  return y === xReversed
};

console.log(isPalindrome(1001))
// isPalindrome(12346)