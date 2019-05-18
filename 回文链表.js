function ListNode(val) {
  this.val = val;
  this.next = null;
}

function produceList(arr) {
  if (arr.length <= 0) {
    return null;
  }
  let head = curr = new ListNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 * 时间复杂度 O(n), 空间复杂度 O(1)
 */
var isPalindrome = function(head) {
    
  if (!head) {
      return true;
  }
  let slow = head;
  let fast = head;
  // 快慢指针找到中点
  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  let prev = null;
  // 中点后的链表反转
  while(slow) {
      let next = slow.next;
      slow.next = prev;
      prev = slow;
      slow = next;  
  }
  while(prev && head) {
      if (prev.val !== head.val) {
          return false;
      }
      prev = prev.next;
      head = head.next;
  }

  return true;
};
let test = produceList([1]);
// console.log(test)

/**
 * @总结
 * 这种方法虽然让空间复杂度减小到 O(1)，但是改变了原本的数据结构，个人不太喜欢这种改变原本数据的方式。
 * 另一个 [O(n), O(n)] 的方法是用一个数组把链表存起来然后判断该数组是否为对称的，比较喜欢这种方式。
 */