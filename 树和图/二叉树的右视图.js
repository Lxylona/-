/**
 * @中等
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * @示例
 * 输入: [ 1,2,3,null,5,null,4 ]
 * 输出: [1, 3, 4]
 * @解释
 *    1            <---
 *  /   \
 * 2     3         <---
 *  \     \
 *   5     4       <---
 *  */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 循环遍历
 */
var rightSideView1 = function (root) {
  if (!root) {
    return [];
  }
  const nodeArr = [root];
  const result = [];
  while (nodeArr.length > 0) {
    result.push(nodeArr[nodeArr.length - 1].val);
    let len = nodeArr.length;
    for (let i = 0; i < len; i++) {
      let j = nodeArr.pop();
      if (j.right) {
        nodeArr.unshift(j.right);
      }
      if (j.left) {
        nodeArr.unshift(j.left);
      }
    }
  }
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 递归遍历
 */
var rightSideView2 = function (root) {
  if (!root) {
    return [];
  }
  const result = [];

  function dfs(node, count) {
    if (result.length < count) {
      result.push(node.val);
    }
    if (node.right) {
      dfs(node.right, count + 1);
    }
    if (node.left) {
      dfs(node.left, count + 1);
    }
  }
  dfs(root, 1);
  return result;
};