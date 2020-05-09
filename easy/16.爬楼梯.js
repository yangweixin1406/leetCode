/**
 * @param {number} n
 * @return {number}
 * 
 * 斐波那契数列
 */
var climbStairs = function(n) {
  const sqrt_5 = Math.sqrt(5)
  const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1)
  return Math.round(fib_n / sqrt_5)
};

console.log(climbStairs(3))