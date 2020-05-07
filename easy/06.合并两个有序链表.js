/*
数据结构-链表
    链表是一组节点组合的集合，每个节点都使用一个对象的引用来指向它的后一个节点，指向另一节点的引用叫做链

解题思路
1.链表要有个起始值head，终止值为null，判断l1和l2的链表，如果为空则直接返回另外一个，不需要进行后续判断
2.如果l1的val 小于 l2的val，则递归复制给l1的next，同理，如果是大于l2的val则递归赋值给l2的next值
3.递归调用，直至为空时结束
*/
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};

console.log(mergeTwoLists())