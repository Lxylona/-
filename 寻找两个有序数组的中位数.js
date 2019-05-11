/**
 * @困难
 * 
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * @示例
 * nums1 = [ 1, 3 ]
 * nums2 = [ 2 ]
 * 则中位数是 2.0
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let a1, a2;
  if (nums1.length > nums2.length) {
    a1 = nums2;
    a2 = nums1;
  } else {
    a1 = nums1;
    a2 = nums2;
  }
  // l1 必然小于 l2
  const l1 = a1.length;
  const l2 = a2.length;

  let imin = 0,
    imax = l1;
  while (imin <= imax) {
    const i = Math.floor((imin + imax) / 2);
    // 这里为什么要 + 1？ 我猜是为了让 m + n 为奇数时中位数总是在左边，如果不 + 1， 那么为奇数时中位数应该总是在右边，因为是 Math.floor()
    const j = Math.floor((l1 + l2) / 2 + 1) - i;
    // console.log('begin', i, j, imin, imax)

    if (i < imax && a2[j - 1] > a1[i]) {
      // i 太小
      imin = i + 1;
    } else if (i > imin && a1[i - 1] > a2[j]) {
      // i 太大
      imax = i - 1;
    } else {
      // i 位置刚刚好
      let maxLeft = 0;
      if (i === 0) {
        maxLeft = a2[j - 1];
      } else if (j === 0) {
        maxLeft = a1[i - 1];
      } else {
        maxLeft = Math.max(a1[i - 1], a2[j - 1]);
      }
      // console.log('maxLeft', maxLeft, i, j)
      if ((l1 + l2) % 2 === 1) {
        return maxLeft;
      }
      let minRight = 0;
      if (i === l1) {
        minRight = a2[j];
      } else if (j === l2) {
        minRight = a1[i];
      } else {
        minRight = Math.min(a1[i], a2[j]);
      }
      // console.log('minRight', minRight)
      return (maxLeft + minRight) / 2.0;

    }
  }
  return 0.0

};

let arr1 = [1];
let arr2 = [3, 4];
let result = findMedianSortedArrays(arr1, arr2);
console.log(result);

/**
 * @总结
 * 
 * 1. 看到这道题的时候，两个数组的中位数，那肯定是找到两个数组对应的数到底在哪里(i, j)，
 *    首先要想到的是，**i 和 j 肯定有数学联系，因为我们找的是中位数。也就是 i + j = m - i + n - j**.
 */