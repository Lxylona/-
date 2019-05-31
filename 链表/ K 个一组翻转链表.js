/**
 * @困难
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * @示例
 * 输入： 1->2->3->4->5, 2 
 * 输出： 2->1->4->3->5
 * 输入： 1->2->3->4->5, 3
 * 输出： 3->2->1->4->5
 * @说明
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function produceList(arr) {
  const head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

function produceArr(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k <= 1) {
    return head;
  }
  let all = 0;
  let curr = head;
  while (curr) {
    all++;
    curr = curr.next;
  }
  if (all < k) {
    return head;
  }
  all = Math.floor(all / k); // 一共需要翻转 all 次
  let count = 1;
  let pre = new ListNode(-1);
  const dummy = pre;
  dummy.next = head;
  curr = head;
  let i = 1;
  while (i <= all) {
    let curPre = pre; // 当前翻转的节点的前一个节点
    let curTail = curr; // 当前的组翻转后的最后一个节点，也就是本来的第一个节点，之后要将这个节点跟下一个组的第一个节点连接
    let temp = null; // 记录 curr.next，因为 curr.next 指向会变，所以要把原来的下一个节点记录下来，才能继续往下遍历
    while (count <= k) {
      temp = curr.next;
      if (count === k) { // count === k 的时候，把当前翻转的组的尾部和前一个节点连接起来，
        pre.next = curr;
        pre = curTail;
        curTail.next = temp;
      }
      curr.next = curPre; // 每一个节点的指针指向前一个节点
      curPre = curr; // 当前的节点就是下一个节点的前一个节点
      curr = temp; // 往后遍历
      count++;
    }
    count = 1;
    i++;
  }
  return dummy.next;
};
let test = produceList([1, 2]);
const result = reverseKGroup(test, 2);
console.log(produceArr(result));

/**
 * @总结
 * 1. 翻转节点都是用三个变量，一个 pre 记录前一个节点，一个 curr 记录当前节点， 一个 next 记录下一个节点，然后进行遍历翻转
 * 2. 除了上面的方法，可以用栈把每一组的节点 push 进去再 pop 出来，这种方法逻辑上比较简单但是牺牲了空间。
 */