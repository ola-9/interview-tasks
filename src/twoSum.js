/*
  Учитывая массив целых чисел nums и целое число target,
  верните индексы двух чисел так, чтобы их сумма составляла target.

  Input: nums = [2,7,11,15], target = 9
  Output: [0, 1]
  Output: Because nums[0] + nums[1] == 9, we return [0, 1].

  Input: nums = [3,2,9,7,4], target = 6
  Output: [1,4]
*/

const twoSum = (nums = [], target) => {
  const { length } = nums;
  const dict = {};

  for (let i = 0; i < length; i += 1) {
    const currentNum = nums[i];
    const diff = target - currentNum;
    if (diff in dict) {
      const first = dict[diff];
      return [first, i];
    }

    dict[currentNum] = i;
  }

  return null;
};

export default twoSum;
