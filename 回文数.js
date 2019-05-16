/**
 * @简单
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * @示例
 * 121 -> true, -121 -> false(121-), 10 -> false 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let temp = x;
  let x2 = 0;
  while (temp !== 0) {
    x2 = x2 * 10 + temp % 10;
    temp = Math.floor(temp / 10);
  }
  if (x2 === x) {
    return true;
  }
  return false;
};
/**
 * @总结
 * 没啥好说的，要么每次 / 10 反转，< 0 直接 false。要么专程字符串 reverse 一下再转化为数字比较一下一不一样。
 */