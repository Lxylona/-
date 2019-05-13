/**
 * 
 * @中等
 * 
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let i = 0;
  let result = '';
  let circle = 2 * numRows - 2;
  while (i < numRows) {
    for (let j = 0 + i; j < s.length; j += (circle || 1)) {
      result += s[j];
      // 不是头尾两行的话，还要加斜边上的字母
      if (i > 0 && i < numRows - 1) {
        const begin = Math.floor(j / circle) * circle + numRows;
        result += s[begin + (numRows - 2 - j % (numRows * 2 - 2))] || '';
        // console.log('begin', begin, (numRows - 2 - j % (numRows * 2 - 2)))
      }
    }
    i++;
  }
  return result;
};
const test = "PAYPALISHIRING";
const result = convert(test, 4);
console.log(result,
  "PINALSIGYAHRPI");