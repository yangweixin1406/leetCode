/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 执行用时 :64 ms, 在所有 JavaScript 提交中击败了76.33%的用户
 * 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了91.30%的用户
 * 
 * 解题思路：
 * 1.判断给定的target值是否在数组中，如果在则直接返回下标
 * 2.边界判断，因为给定的是一个排序的数组，所以当给定的target小于最小值则返回0；如果大于最大的值，则返回数组长度
 * 3.循环遍历，拍过序的数组，并且target值不存在于数组中，所以target的值在数组两个值的区间内，我们只需要判断target < nums[i],return出下标即可
 */
var searchInsert = function(nums, target) {
  if (nums.indexOf(target) > -1) {
    return nums.indexOf(target)
  } else if (target < nums[0]) {
    return 0
  } else if (target > nums[nums.length - 1]) {
    return nums.length
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (target < nums[i]) {
        return i
      }
    }
  }
};

console.log(searchInsert([1, 3, 5, 9, 12], 13))