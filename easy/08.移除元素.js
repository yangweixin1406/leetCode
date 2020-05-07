/**
 * @param {Array} nums 
 * @param {Number} val 
 * @return {Number}
 * 
 * 执行用时 :64 ms, 在所有 JavaScript 提交中击败了77.88%的用户
 * 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了90.48%的用户
 * 
 * 解题思路：和删除排序数组中重复项类似
 * 1.存一个初始值为0的下标
 * 2.循环遍历nums数组，如果当前下表的值不等于val，则nums[idx] = num[当前下标]，idx++
 */
var removeElement = function(nums, val) {
  let idx = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[idx] = nums[i]
      idx++
    }
  }
  return idx
};

console.log(removeElement([1, 2, 3, 2], 1))