/*
解题思路
1.数字转换为字符串，切割为数组，对负数进行判断，进行反转，不是负数的直接反转
2.进行反转后的边界判断，如果小于 负2的31 或者大于 2的31次方-1则返回0
*/
const reverse = function (x) {
  const arr = String(x).split('')
  let temp
  let num
  if (arr[0] === '-') {
    temp = arr.slice(1).reverse()
    temp.unshift(arr[0])
    num = +temp.join('')
  } else {
    num = +arr.reverse().join('')
  }
  if (num <= -Math.pow(2, 31) || num >= (Math.pow(2, 31) - 1)) return 0
  return num
}

console.log(reverse(1534236469))