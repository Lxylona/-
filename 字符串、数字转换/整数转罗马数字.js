/**
 * @中等
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 * * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
 * 
 * @示例
 * 输入: 1994
 * 输出: "MCMXCIV"
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 * 
 * 输入: 58
 * 输出: "LVIII"
 * 解释: L = 50, V = 5, III = 3.
 */

/**
 * @param {number} num
 * @return {string}
 * 时间复杂度O(1), 空间复杂度 O(1);
 */
var intToRoman1 = function (num) {
  let arr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let divisor = 3;
  let result = '';
  while (divisor >= 0) {
    let temp = Math.floor(num / Math.pow(10, divisor));
    if (temp === 9) {
      result += arr[divisor * 2] + arr[(divisor + 1) * 2];
    } else if (temp === 4) {
      result += arr[divisor * 2] + arr[divisor * 2 + 1];
    } else {
      if (temp >= 5) {
        temp -= 5;
        result += arr[divisor * 2 + 1];
      }
      for (let i = 0; i < temp; i++) {
        result += arr[divisor * 2];
      }
    }
    num = num % Math.pow(10, divisor);
    divisor--;
  }
  return result;
};

var intToRoman2 = function (num) {
  let a = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let b = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = '';
  for (let i = 0; i < b.length; i++) {
    while (num >= a[i]) {
      result += b[i];
      num -= a[i];
    }
  }
  return result;
}
const test = 1994;
console.log(intToRoman1(test));
console.log(intToRoman2(test));

/**
 * @总结
 * 方法 1 很容易想到，是进行数字处理时经常要用到的手段，先整除再取余。方法 2 的思路是我没有想到的，因为转换集是一一对应而且有限的，所以可以直接用枚举的方式，一个一个减掉。
 */