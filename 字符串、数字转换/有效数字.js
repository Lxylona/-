/**
 * @困难
 * 
 * 验证给定的字符串是否可以解释为十进制数字。
 * 
 * @示例
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false
 *
 * 说明: 我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。这里给出一份可能存在于有效十进制数字中的字符列表：
 * 数字 0-9
 * 指数 - "e"
 * 正/负号 - "+"/"-"
 * 小数点 - "."
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let regexp = /^(\+|\-)?(([0-9]+\.?[0-9]*)|(\.[0-9]+))(e(\+|\-)?[0-9]+)?$/;
  return regexp.test(s.trim());
};
let test = '0';
let result = isNumber(test);
// console.log(result)

/**
 * @总结
 * 没啥好总结的，就是正则表达式。。。不过看评论大家都在写 DFA，有啥区别吗。。
 */