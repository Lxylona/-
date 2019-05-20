/**
 * @中等
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 
 * @示例
 * [ 1,8,6,2,5,4,8,3,7 ] -> 输出: 49
 */

/**
 * @param {number[]} height
 * @return {number}
 * 时间复杂度 O(n), 空间复杂度 O(1)
 */
var maxArea = function (height) {
  let result = 0;
  let i = 0,
    j = height.length - 1;
  while (i < j) {
    result = Math.max(result, (j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return result;
};
/**
 * @总结
 * 1. 可能会觉得：不会有漏掉最优解的可能性吗？其实从另一个角度讲，每次我们移动的是比较短的那边，而不是比较长的那边，因此我们漏掉的那些肯定比已经遍历到的更小
 */