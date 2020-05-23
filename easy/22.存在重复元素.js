/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 解题思路：
 * 1.存一个对象，遍历数组的值，存入对象，如果对象中存在return true
 * 2.对象中不存在接着判断
 */
var containsDuplicate1 = function(nums) {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      return true
    } else {
      obj[nums[i]] = 1
    }
  }
  return false
};

/**
 * @param {*} nums 
 * 
 * 执行用时 :72 ms, 在所有 JavaScript 提交中击败了90.05%的用户
 * 内存消耗 :37.4 MB, 在所有 JavaScript 提交中击败了87.50%的用户
 * 
 * 解题思路：
 * 1.首先对数组进行排序，遍历数组，如果左边等于右边则说明重复，return true
 * 2.否则return false
 */

var containsDuplicate = function(nums) {
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]))