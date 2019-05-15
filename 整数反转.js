/**
 * 
 * @容易
 * 
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 反转后不在 [−2^31,  2^31 − 1] 区间的返回 0
 * 
 * @示例
 * 123 -> 321
 * -123 -> -321
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  while (x !== 0) {
    result = result * 10 + (x % 10);
    if (x >= 0) {
      x = Math.floor(x / 10);
    } else {
      x = Math.ceil(x / 10)
    }
    // console.log(x)
  }
  if (result > Math.pow(2, 31) - 1 || result < -1 * Math.pow(2, 31) + 1) {
    return 0
  }
  return result;

};
let result = reverse(3);
// console.log(result);

/**
 * @总结
 * 没啥好说的。。。
 */