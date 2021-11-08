import twoSum from '../src/twoSum';

test('twoSum', () => {
  const actual1 = twoSum([2, 7, 11, 15], 9);
  expect(actual1).toEqual([0, 1]);

  const actual2 = twoSum([3, 2, 4], 6);
  expect(actual2).toEqual([1, 2]);

  const actual3 = twoSum([3, 2, 4], 9);
  expect(actual3).toEqual(null);
});
