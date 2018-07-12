function findMedianSortedArrays(nums1, nums2) {
  const median = (nums) => {
    const medianIndex = Math.floor(nums.length/2);
    const isLengthEven = nums.length % 2 === 0;
    const avgOfMiddlePair = () =>
      (nums[medianIndex - 1] + nums[medianIndex]) / 2;

    return isLengthEven ? avgOfMiddlePair() : nums[medianIndex];
  };
  return median(nums1) || median(nums2);
}

module.exports = {findMedianSortedArrays};
