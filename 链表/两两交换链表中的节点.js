/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @中等
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * @示例
 * 输入：1->2->3->4
 * 输出：2->1->4->3
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let curr = dummy = new ListNode(0);
  curr.next = head;
  while(curr.next && curr.next.next) {
      const temp = curr.next.next;
      curr.next.next = temp.next;
      temp.next = curr.next;
      curr.next = temp;
      curr = curr.next.next;
  } 
  return dummy.next;
};