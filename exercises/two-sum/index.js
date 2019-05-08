function twoSum(nums, target) {
  const map = {};
  const mapHasCompliment = (c) => map.hasOwnProperty(c);

  for (let index = 0; index < nums.length; index += 1) {
    let compliment = target - nums[index];
    if (mapHasCompliment(compliment)) {
      return [map[compliment], index];
    }
    map[nums[index]] = index;
  }
  return [];
}

module.exports = {twoSum};

