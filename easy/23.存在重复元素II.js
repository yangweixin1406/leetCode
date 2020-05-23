/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
  示例 1:

  输入: nums = [1,2,3,1], k = 3
  输出: true
  示例 2:

  输入: nums = [1,0,1,1], k = 1
  输出: true
  示例 3:

  输入: nums = [1,2,3,1,2,3], k = 2
  输出: false
 */
var containsNearbyDuplicate = function(nums, k) {
  let temp = false
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) !== i && nums.lastIndexOf(nums[i]) - i <= k) {
      temp = true
      break
    }
  }
  return temp
};


/**
 * @param {*} nums 
 * @param {*} k 
 * 
 * 解题思路：
 * 1.定义一个空的对象，循环数组，把数组的值作为键，下标作为值。
 * 2.如果对象中已经存在这个值进行下标判断
 */
var containsNearbyDuplicate2 = function(nums, k) {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i]) && i - obj[nums[i]] <= k) {
      return true
    } else {
      obj[nums[i]] = i
    }
  }
  return false
};

var containsNearbyDuplicate3 = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true
    } else {
      map.set(nums[i], i)
    }
  }
  return false
};
console.log(containsNearbyDuplicate([0,1,2,3,4,0,0,7,8,9,10,11,12,0], 1))