/**
 * @param {string} S
 * @return {string}
 */
var longestStrChain = function (words) {
  if (words.length <= 1) {
    return words.length;
  }
  words.sort(function (a, b) {
    return a.length - b.length;
  })
  let len = 1;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > words[i - 1].length) {
      len++;
    }
  }
  let result = 1;
  let temp = 1;
  let j = 0;

  while (j < words.length && result < len) {
    let pre = words[j];
    for (let i = j + 1; i < words.length; i++) {
      if (words[i].length === pre.length + 1) {
        let t = 0;
        while (words[i][t] === pre[t]) {
          t++;
        }
        if (words[i].slice(t + 1) === pre.slice(t)) {
          temp += 1;
          pre = words[i];
        }
      }
    }
    if (temp > result) {
      result = temp;
    }
    temp = 1;
    j++;
  }
  return result;
};
let test = [];
test = ["ddgpj","oopwqq","ooq","oopq","iwdkeoqqtd","iwdkeoqqt","oopwq","t","wdoqqt","vcw","ddgpjy","ddpj","njpci","njci","ft","q","wdkeoqqt","dqq","qq","ni","eihk","ebiihzke","eihzke","eik","eiihzke","dqqt","eihzk","vw","ddp","oq","wdeoqqt","nci","doqqt","vft"]
console.log(longestStrChain(test));