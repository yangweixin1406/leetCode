/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (nums[0] === 0 && nums.length === 1) return 1
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      return nums[i] + 1
    }
  }
};
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))