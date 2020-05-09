/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * 解题思路：
 * 1.采用后续遍历，减少遍历次数，对大的值进行比较，因为是从后面开始遍历，所以下标最大要减一
 * 2.while循环判断，给nums1赋值
 */
var merge = function(nums1, m, nums2, n) {
  let len1 = m - 1
  let len2 = n - 1
  let len = m + n -1
  while (len >= 0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
  }
  function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length))
  }
  arrayCopy(nums2, 0, nums1, 0, len2 + 1)
};

const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]
merge(nums1, 3, nums2, 3)