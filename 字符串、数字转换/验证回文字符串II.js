/**
 * @容易
 * 
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * 
 * @示例
 * "aba" -> true, "abc" -> false
 */
/**
 * @param {string} s 
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (!s) {
    return true;
  }

  function valid(s, k, i, j) {
    if (k > 1) {
      return false
    }
    while (i <= j) {
      if (s[i] !== s[j]) {
        return valid(s, k + 1, i + 1, j) || valid(s, k + 1, i, j - 1);
      }
      i++;
      j--;
    }
    return true;
  }
  return valid(s, 0, 0, s.length - 1);
};
/**
 * @总结
 * 太久没有用过递归解题感觉很生疏，因为如果两个不一样的话，有两种情况：要么 i + 1, 要么 j - 1, 
 * 这种有两种情况的其实用递归会比较好，因为比较简洁，
 * 如果用循环（原先就是这么做的），就需要分两种情况讨论，代码变得复杂而难懂。
 */