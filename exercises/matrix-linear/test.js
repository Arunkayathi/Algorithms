const matrix = require('./index');

test('matrix is a function', () => {
  expect(typeof matrix).toEqual('function');
});

test('matrix produces a 2x2 array', () => {
  const m = matrix(2);
  expect(m.length).toEqual(2);
  expect(m[0]).toEqual([1, 2]);
  expect(m[1]).toEqual([3, 4]);
});

test('matrix produces a 3x3 array', () => {
  const m = matrix(3);
  expect(m.length).toEqual(3);
  expect(m[0]).toEqual([1, 2, 3]);
  expect(m[1]).toEqual([4, 5, 6]);
  expect(m[2]).toEqual([7, 8, 9]);
});

test('matrix produces a 4x4 array', () => {
  const m = matrix(4);
  expect(m.length).toEqual(4);
  expect(m[0]).toEqual([1, 2, 3, 4]);
  expect(m[1]).toEqual([5, 6, 7, 8]);
  expect(m[2]).toEqual([9, 10, 11, 12]);
  expect(m[3]).toEqual([13, 14, 15, 16]);
});
