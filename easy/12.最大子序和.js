/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 分析思路：
 * 1.首先设一个处置给max，子序相加sum
 * 2.循环遍历nums值，如果sum > 0 则 sum += num,如果sum < 0就不需要去计算了，负数会让总数值变小
 * 3.return出最大值
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  let sum = 0
  for (const num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    max = Math.max(max, sum)
  }
  return max
};

console.log(maxSubArray([1, -1, 10, 3, -5, 7, 8]))