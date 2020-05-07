/*
忽略了题意，题目说的是给一个已经排序过后的数组，所以我们不需要对他进行排序了
执行用时 :80 ms, 在所有 JavaScript 提交中击败了88.07%的用户
内存消耗 :36.7 MB, 在所有 JavaScript 提交中击败了87.30%的用户

解题思路：
1.因为给出的是一个已经排序好的数组，这时候我们只需要for循环判断当前的值和下一个值是否相等即可
2.如果值相等则进行下一次循环，不相等则num[idx]添加到idx下标
3.返回idx值即为去除重复项的数组长度
*/

// 使用新的数组空间，是不允许的
var removeDuplicates1 = function(nums) {
  const temp = []
  if (nums.length) {
    const sortArr = nums.sort((a, b) => {
      return a > b
    })
    for(let i = 0; i < sortArr.length; i++) {
      if (temp.indexOf(sortArr[i]) < 0) {
        temp.push(sortArr[i])
      }
    }
  }
  return temp
};
// 定义一个空的对象，判断对象的长度
var removeDuplicates2 = function(nums) {
  const obj = {}
  if (nums.length) {
    const sortArr = nums.sort((a, b) => {
      return a > b
    })
    for(let i = 0; i < sortArr.length; i++) {
      if (!obj.hasOwnProperty(sortArr[i])) {
        obj[sortArr[i]] = sortArr[i]
      }
    }
  }
  return Object.keys(obj)
};

var removeDuplicates = function(nums) {
  let idx = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[idx] = nums[i]
      idx++
    }
  }
  return idx
};

console.log(removeDuplicates([1, 2, 3, 2]))