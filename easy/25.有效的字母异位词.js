/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
  示例 1:

  输入: s = "anagram", t = "nagaram"
  输出: true
  示例 2:

  输入: s = "rat", t = "car"
  输出: false
 *解题思路：
 *1.判断两个字符串长度是否相等，不相等则说明不是有效的
 *2.把字符串转化为数组并进行排序，判断两边是否相等
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  return s.split('').sort().join('') === t.split('').sort().join('')
};
console.log(isAnagram('name', 'mwen'))