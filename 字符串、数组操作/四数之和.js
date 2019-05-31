/**
 * @中等
 * 
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * @注意
 * 答案中不可以包含重复的四元组。
 * @示例
 * 输入： nums = [1, 0, -1, 0, -2, 2]， target = 0
 * 输出： [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] > (target >= 0 ? target : 0)) {
      break;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      if (nums[i] + nums[j] > (target >= 0 ? target : 0)) {
        break;
      }
      let left = j + 1,
        right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[++left]) {};
          while (nums[right] === nums[--right]) {};
        }
      }
    }
  }
  return result;
};
// [1, -2, -5, -4, -3, 3, 3, 5], -11   [0,0,0,0], 0
const result = fourSum([1, 0, -1, 0, -2, 2], 0);
console.log(result);