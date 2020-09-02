const generateRandomSquarePosition = require('../src/script');

test('generateRandomSquarePosition return valid position', () => {
    expect(generateRandomSquarePosition(400, 1, 500, 500)).toStrictEqual([100, 100]);
});
