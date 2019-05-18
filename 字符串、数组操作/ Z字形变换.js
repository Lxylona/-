/**
 * 
 * @中等
 * 
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 
 * @示例
 * 输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 */

// 时间复杂度 O(n)，空间复杂度 O(1)
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert1 = function (s, numRows) {
  let i = 0;
  let result = '';
  let circle = 2 * numRows - 2;
  while (i < numRows) {
    for (let j = 0; j + i < s.length; j += (circle || 1)) {
      result += s[j + i];
      // 不是头尾两行的话，还要加斜边上的字母
      if (i > 0 && i < numRows - 1 && j + circle - i < s.length) {
        result += s[j + circle - i];
      }
    }
    i++;
  }
  return result;
};

// 时间复杂度 O(n)，空间复杂度 O(n)
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert2 = function (s, numRows) {
  let result = [];
  let goDown = true;
  let currCol = 0;
  for (let i = 0; i < s.length; i++) {
    if (!result[currCol]) {
      result[currCol] = s[i];
    } else {
      result[currCol] += s[i];
    }
    if ((currCol === 0 && !goDown) || (currCol === numRows - 1 && goDown)) {
      goDown = !goDown;
    }
    currCol += goDown ? 1 : -1
  }
  return result.join('')
}
const test = "LEETCODEISHIRING";
const result = convert1(test, 3);
// console.log(result, "LCIRETOESIIGEDHN");

/**
 * @总结
 * 1. 下标混乱的问题要克服呀，不然。。
 * 2. 第二种方法之前没有想到，不知道为什么，感觉挺容易想到的呀。。
 */