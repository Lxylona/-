/**
 * @中等
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * @示例
 * 给定数组 nums = [ -1,2,1,-4 ], 和 target = 1.与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 时间复杂度 O(n^2), 空间复杂度 O(1)
 */
var threeSumClosest = function (nums, target) {
  if (nums.length < 3) {
    return 0;
  }
  // 从小到大排序
  nums = nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let temp = nums[i] + nums[left] + nums[right];
      if (Math.abs(temp - target) < Math.abs(result - target)) {
        result = temp;
      }
      if (temp < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSumClosest(nums, target);
console.log(result);

/**
 * @总结
 * 发现这种三数之和的类型的都是抽出一个然后剩下的两个用双指针来降低时间复杂度。
 */