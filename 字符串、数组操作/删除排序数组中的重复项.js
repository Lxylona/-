/**
 * @中等
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成
 * @示例
 * 输入： [ 1,1,2 ]
 * 输出： 新的长度 2，并且原数组 nums 的前两个元素被修改为 1, 2。 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 1;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
};
/**
 * @总结
 * 1. 难度这种东西很玄学，如果懂了里面的考点，觉得这道题超简单；不懂的，觉得这道题怎么才是中等（对，比如很多动态规划中等题。。。
 * 2. 这种快慢指针法在数组和链表中真的经常用到耶
 */