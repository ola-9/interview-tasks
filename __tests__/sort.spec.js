import sort from '../src/sort';

test('sort', () => {
  const actual1 = sort([]);
  expect(actual1).toEqual([]);

  const actual2 = sort([3, 2, 4, 10, -5, 9, 0]);
  expect(actual2).toEqual([-5, 0, 2, 3, 4, 9, 10]);
});
