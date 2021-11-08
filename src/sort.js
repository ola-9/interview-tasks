/* eslint-disable no-restricted-syntax */
const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const less = [];
  const equal = [];
  const greater = [];

  const base = nums[0];
  for (const num of nums) {
    if (num < base) {
      less.push(num);
    }

    if (num > base) {
      greater.push(num);
    }

    if (num === base) {
      equal.push(num);
    }
  }

  return [...quickSort(less), ...equal, ...quickSort(greater)];
};

export default quickSort;
