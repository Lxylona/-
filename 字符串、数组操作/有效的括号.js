/**
 * @简单
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 1. 左括号必须用相同类型的右括号闭合。
 * 2. 左括号必须以正确的顺序闭合。
 * @说明
 * 空字符串是有效字符串
 * @示例
 * {} => true. {[] => false
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  for(let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
          stack.push(s[i]);
      } else {
          let temp =stack.pop();
          if (!temp || (temp === '(' && s[i] !== ')') || (temp === '[' && s[i] !== ']') || (temp === '{' && s[i] !== '}')) {
              return false;
          } 
      }
  }
  if (stack.length > 0) {
      return false;
  }
  return true;
};
/**
 * @总结
 * 一般这种对称型的题，都可以用栈来实现
 */