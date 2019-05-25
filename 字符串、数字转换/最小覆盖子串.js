/**
 * @困难
 * 给定一个字符串 S 和一个字符串 T，请在 S 中找出包含 T 所有字母的最小子串。
 * 
 * @示例
 * 输入: S = "ADOBECODEBANC", T = "ABC"
 * 输出: "BANC"
 * 
 * @说明
 * 如果 S 中不存这样的子串，则返回空字符串 ""。
 * 如果 S 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 
 * 时间复杂度 O(n)，空间复杂度O(n + m)
 */
var minWindow = function (s, t) {
  let begin = 0,
    end = 0,
    minBegin = 0,
    minEnd = -1;
  let sFreq = [],
    tFreq = [];
  for (let i = 0; i < 64; i++) {
    sFreq[i] = 0;
    tFreq[i] = 0;
  }
  for (let i = 0; i < t.length; i++) {
    tFreq[t.charCodeAt(i) - 65]++;
  }
  while (begin <= s.length - t.length + 1) {
    if (end - begin + 1 < t.length) {
      if (end < s.length - 1) { // 65 为 A 的 ASCII 码
        sFreq[s.charCodeAt(end) - 65]++;
        end++;
        continue;
      } else {
        break;
      }
    }
    sFreq[s.charCodeAt(end) - 65]++;
    let i = 0
    while (i < 64) {
      if (sFreq[i] < tFreq[i]) {
        break;
      } else {
        i++
      }
    }
    if (i < 64) { // 不满足要求
      if (end < s.length - 1) {
        end++;
      } else {
        break;
      }
    } else { // 符合要求
      if (end - begin + 1 === t.length) return s.slice(begin, end + 1);
      if (minEnd === -1 || end - begin < minEnd - minBegin) {
        minEnd = end;
        minBegin = begin;
      }
      sFreq[s.charCodeAt(begin) - 65]--;
      sFreq[s.charCodeAt(end) - 65]--
      begin++;
    }
  }
  return s.slice(minBegin, minEnd + 1);
};
// "ADOBECODEBANC","ABC"   "abc","b"  "a", "aa"
let result = minWindow("a", "a");
console.log(result);

/**
 * @总结
 * 这道题难在有时间控制，利用滑动窗口可以保证时间复杂度为O(n)
 */