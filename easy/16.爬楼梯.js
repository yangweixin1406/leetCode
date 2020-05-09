/**
 * @param {number} n
 * @return {number}
 * 
 * 斐波那契数列
 */
var climbStairs1 = function(n) {
  const sqrt_5 = Math.sqrt(5)
  const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1)
  return Math.round(fib_n / sqrt_5)
};

var climbStairs = function(n) {
  const fib = []
  fib[0] = fib[1] = 1
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib[n]
};

console.log(climbStairs(3))