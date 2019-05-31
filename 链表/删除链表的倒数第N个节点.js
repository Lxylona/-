/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 
 * @中等
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * @示例
 * 输入： 1->2->3->4->5， 2
 * 输出： 1->2->3->5
 * @说明
 * 给定的 n 保证是有效的。
 * 
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy, fast = dummy;
  for(let i = 1 ; i <= n; i++) {
      fast = fast.next;
  }
  while(fast.next) {
      fast = fast.next;
      slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;  
};
/**
 * @总结
 * 1. 链表最常用的降低时间复杂度的方法就是快慢指针了。
 * 2. 这道题也可以遍历两次，第一次记录多少个节点，由此计算出目标节点，第二次遍历到目标节点进行操作之后返回头节点就行了。
 */