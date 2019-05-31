/**
 * @中等
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * @示例
 * 输入： 3
 * 输出： [ "((()))", "(()())", "(())()", "()(())", "()()()" ]
 * 
 * @param {number} n
 * @return {string[]}
 * 
 * @todo 时间复杂度看网站上的官方题解，里面思路是一样的
 */
var generateParenthesis = function(n) {
  let result = [];
  function generate (str, left, right) {
      if (str.length === n * 2) {
          return result.push(str);
      }
      if (left < n) {
          generate(str + '(', left + 1, right);
      }
      if (left > right) {
          generate(str + ')', left, right + 1);
      }
  }
  generate('', 0, 0);
  return result;
};
/**
 * @总结
 * 没啥好说的，一道一看就要用递归(回溯)的题，不用递归(回溯)还有别的方法么？
 */