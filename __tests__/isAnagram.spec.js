import isAnagram from '../src/isAnagram';

test('isAnagram', () => {
  const actual1 = isAnagram('Я в мире — сирота', 'Я в Риме — Ариост');
  expect(actual1).toBe(true);

  const actual3 = isAnagram('Лунь', 'нууль');
  expect(actual3).toBe(false);

  const actual4 = isAnagram('Ноль', 'Нул');
  expect(actual4).toBe(false);
});
