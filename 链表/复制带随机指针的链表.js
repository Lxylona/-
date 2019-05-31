/**
 * @中等
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
 * 要求返回这个链表的深拷贝。 
 * @示例
 * 输入： {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
 * @说明
 * 你必须返回给定头的拷贝作为对克隆列表的引用。
 * 
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 * 时间复杂度 O(n), 空间复杂度 O(1)
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  let curr = head;
  while (curr) { // 每一个节点复制一份放在其后面
    const temp = curr.next;
    const newCurr = new Node(curr.val, temp, null);
    curr.next = newCurr;
    curr = temp;
  }
  curr = head;
  while (curr && curr.next) { // 给新的节点指定 random 指向的值
    curr.next.random = curr.random ? curr.random.next : curr.random;
    curr = curr.next.next;
  }
  const newHead = head.next;
  curr = head;
  while (curr.next) { // 分裂两个链表
    const temp = curr.next;
    curr.next = curr.next.next;
    curr = temp;
  }
  return newHead
};

/**
 * @总结
 * 1. 这道题的思路其实就是如何通过原有的节点映射到克隆的节点，上面的有丝分裂做法是一种，每一个克隆的节点先放到原有节点的后面，这样就可以快速映射。
 * 2. 另一种方法就是用 hashmap 了，先遍历一遍映射原有节点和克隆节点，第二遍遍历设置克隆节点的 random 和 next
 */