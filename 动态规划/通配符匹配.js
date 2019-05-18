/**
 * 
 * @困难
 * 
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 * '?' 可以匹配任何单个字符。
 * '*' 可以匹配任意字符串（包括空字符串）。
 * 两个字符串完全匹配才算匹配成功。
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // '', '' 是匹配的
  let cur = [true];
  let pre = [];
  for (let i = 0; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '*') {
        // *，两种情况：
        // 1. s 前一个字符和 p 前一个字符匹配上了
        // 2. s 前一个字符和该字符匹配上了
        cur[j] = pre[j] || cur[j - 1];
      } else {
        // 前面的字符匹配上了，而且该字符也匹配上
        cur[j] = i && pre[j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '?');
      }
    }
    console.log(cur);
    pre = cur;
    cur = [];
  }
  return !!pre[p.length];
};

let result = isMatch('aba', '*b');
console.log(result)