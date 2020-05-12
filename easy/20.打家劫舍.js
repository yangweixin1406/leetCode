/**
 * @param {number[]} nums
 * @return {number}
 */
var rob1 = function(nums) {
  if (!nums.length) return 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      sum += nums[i + 1]
      i += 2
    } else {
      sum += nums[i]
      i++
    }
  }
  return sum
};

var rob = function(nums) {
  const len = nums.length
  if (!len) return 0
  const dp = new Array(len + 1)
  dp[0] = 0
  dp[1] = nums[0]
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }
  return dp[len]
};

console.log(rob([1, 2, 3, 1]))