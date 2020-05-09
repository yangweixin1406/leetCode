/**
 * @param {number} x
 * @return {number}
 * 
 * 解题思路：
 * 1.使用math函数的sqrt方法开平方
 * 2.题意要求小数部分省略，所以采用向下取整
 */
var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x))
};

console.log(mySqrt(5))