// https://leetcode-cn.com/problems/add-two-numbers/
/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * @示例
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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

var addTwoNumbers = function(l1, l2) {
  let a1 = l1;
  let a2 = l2;

  let forward = 0;
  let a3 = null;
  let head;
  while (a1 || a2) {
    const x1 = a1 ? a1.val : 0;
    const x2 = a2 ? a2.val : 0;
    let curr = x1 + x2 + forward;
    forward = Math.floor(curr / 10);
    // 运算的第一位，新建链表头
    if (!a3) {
      a3 = new ListNode(curr % 10);
      head = a3;
    } else {
      a3.next = new ListNode(curr % 10);
      a3 = a3.next;
    }
    if (a1) {
      a1 = a1.next;
    }
    if (a2) {
      a2 = a2.next;
    }
  }
  if (forward) {
    a3.next = new ListNode(forward);
  }
  return head;
};

let a1 = produceList([5]);
let a2 = produceList([5]);
let result = addTwoNumbers(a1, a2);
while (result) {
  console.log(result.val);
  result = result.next;
}
/**
 * @总结
 * 1. js大数精度丢失（会转为科学计数法，科学计数法小数点只保留到15位），
 *    刚开始思路是把两个链表转换为数字然后相加再转换为链表，提交之后发现大数情况下结果错误，是精度丢失的原因。最后用字符串相加来实现了。
 * 2. 代码精简性，先入为主，刚开始把链表转化为数字嘛，后来不是直接一位一位相加嘛，其实可以直接用链表来操作的，
 *    但是受到上一个思路的影响，笨笨地先把两个链表转化为数组再相加再把结果转化为链表，完全没必要。。
 */
