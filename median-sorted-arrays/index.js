function findMedianSortedArrays(nums1, nums2) {
  const countOfNums = nums1.length + nums2.length; // 6
  const medianIndex = countOfNums / 2; // 3
  const allNums = []; // 0, 1, 1, 2
  let pointer1 = 0; // 2
  let pointer2 = 0; // 2

  const isUndefined = (val) => typeof val === 'undefined';

  const findNextNum = () => {
    if (isUndefined(nums2[pointer2]) || nums1[pointer1] < nums2[pointer2]) {
      allNums.push(nums1[pointer1]);
      pointer1 += 1;
    } else {
      allNums.push(nums2[pointer2]);
      pointer2 += 1;
    }
  };

  while (pointer1 + pointer2 < medianIndex) {
    findNextNum();
  }

  if (countOfNums % 2 === 0) {
    findNextNum();
    return (allNums[allNums.length - 1] + allNums[allNums.length - 2]) / 2;
  }

  return allNums[allNums.length - 1];
}

module.exports = {findMedianSortedArrays};
