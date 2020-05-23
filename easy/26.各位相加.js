/**
 * @param {number} num
 * @return {number}
 * 
 * 解题思路：
 * 递归解题
 */
var addDigits = function(num) {
  const sum = String(num).split('').reduce((a, b) => +a + +b)
  if (sum < 10) return sum;
  return addDigits(sum)
};
console.log(addDigits(38))