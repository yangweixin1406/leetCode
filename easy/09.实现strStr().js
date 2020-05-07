/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * 解题思路：
 * 1.传入的是字符串，可以直接使用str的indexOf方法，如果给定的值存在于目标值里面则会返回下标，不存在返回-1
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};

console.log(strStr('helo', 'll'))