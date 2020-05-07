/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let arr = digits.join('');  // 数组转字符串
  let num = BigInt(arr) + 1n + ''; // BigInt 可以表示任意大的整数
  let arr2 = num.split('');
  let endArr = arr2.map(Number);
  return endArr;
  // return String(BigInt(digits.join('')) * 10000 + 10000).split('')
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))