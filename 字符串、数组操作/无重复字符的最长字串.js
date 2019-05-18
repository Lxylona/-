/**
 * @中等
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * @示例
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

// 时间复杂度 O(n), 空间复杂度 O(n)
// 主要思路为 hash 遇到的字符，记录他们在数组中的下标，
// 每遇到一个字符看一下 obj 中有没有该字符且位置是不是大于 begin，有的话修改一下子串开始位置 begin = i + 1，然后通过 Math.max(i - begin + 1, result) 计算最大子串长度
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }
  const obj = {};
  let begin = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    // 字符在子串中则修改 begin 的值
    if ((obj[s[i]] || obj[s[i]] === 0) && obj[s[i]] >= begin) {
      begin = obj[s[i]] + 1;
    }
    obj[s[i]] = i;
    result = Math.max(i - begin + 1, result);
  }
  return result;
};

const teststr = "au";
const result = lengthOfLongestSubstring(teststr);
// console.log('result', result);

/**
 * @另一种解法
 * 对于每一个字符(位置 j)，遍历在它前面的字符，记录离它最近的相同字符的位置 i，然后判断 max = Math.max(max, j - i + 1).
 * 这种方法优点是不需要额外的 obj 来记录出现过的字符及其位置，缺点是时间复杂度变为 O(n^2)
 */

/**
 * @总结
 * 1. 实质是寻找**两个相同字符的最远距离**，有时候可以从另一个角度看问题。
 * 2. js 中 Boolean(负数) === true!! 只有 undeifned/null/''/0 为 false
 */