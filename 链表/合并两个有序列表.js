/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @todo 链表排序，数组排序专题整理
 * @简单
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * @示例
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const head = new ListNode(0);
  let curr = head;
  while(l1 || l2) {
      curr = curr.next = new ListNode(0);
      if (!l1 || (l2 && l1.val >= l2.val)) {
          curr.val = l2.val;
          l2 = l2.next;
      } else if (!l2 || (l1 && l1.val < l2.val)) {
          curr.val = l1.val;
          l1 = l1.next;
      } 
  }
  return head.next;
};
/**
 * @总结
 * 没啥好总结的，这不就是叫什么归并排序（ @todo 话说归并排序具体是啥）吗
 */