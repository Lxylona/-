/**
 * @困难
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * @示例 （自己画图）
 * 输入：[ 0,1,0,2,1,0,1,3,2,1,2,1 ]
 * 输出: 6
 */

 /**
 * @解法1 一层一层往里面填水
 * @param {number[]} height
 * @return {number}
 * 时间复杂度 O(n^2), 空间复杂度 O(1), 但是很奇怪的是提交的时候打败了 95% 左右的人。。
 */
var trap1 = function(height) {
  let result = 0;
  let left = 0, right = height.length - 1;
  let min = 0;
  let premin = 0;
  // 起始以下标 0 和 n - 1 为边界，往数组中高度比边界小的里面填上水，然后两个边界较小的往里面移，直到比原本高，然后继续填水，反复直到两个边界相遇。
  while(right > left) {
      if (height[right] <= min) {
          right--;
      } else if (height[left] <= min) {
          left++;
      } else {
          premin = min;
          min = Math.min(height[left], height[right]);
          for(let i = left + 1 ; i <= right - 1; i++) {
              result += Math.max(min - Math.max(height[i], premin), 0);      
          }   
      } 
  }
  return result;
};

/**
 * @解法二 动态规划，找到每个元素左边和右边最高的墙，然后计算它可以注入的水
 */
var trap2 = function(height) {
  let result = 0;
  let maxLeft = [], maxRight = [];
  for(let i = 0; i < height.length; i++) {
      maxLeft[i] = Math.max(height[i], i - 1 >= 0 ? maxLeft[i - 1] : 0);
  }
  for(let i = height.length - 1; i >= 0; i--) {
      maxRight[i] = Math.max(height[i], i + 1 <= height.length - 1 ? maxRight[i + 1] : 0);
      result += Math.min(maxLeft[i], maxRight[i]) - height[i];
  }
  return result;
};