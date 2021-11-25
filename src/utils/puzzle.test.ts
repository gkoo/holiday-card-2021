import Puzzle from './puzzle';

test('puzzle', () => {
  const puzzle = new Puzzle(1, 1, [[1]]);
  expect(puzzle.height).toEqual(1);
});
