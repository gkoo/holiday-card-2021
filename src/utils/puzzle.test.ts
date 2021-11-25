import Puzzle from './puzzle';

const puzzle = new Puzzle(5, 5, [
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
]);

test('puzzle', () => {
  expect(puzzle.height).toEqual(5);
  expect(puzzle.width).toEqual(5);
});

test('rowClues', () => {
  expect(puzzle.rowClues()).toEqual(
    [
      [1, 1],
      [0],
      [1, 1],
      [1, 1],
      [2, 2],
    ]
  );
});

describe('columnClues', () => {
  it('calculates the clues correctly', () => {
    expect(puzzle.columnClues()).toEqual([
      [1, 2],
      [1, 1],
      [0],
      [1, 1],
      [1, 2],
    ]);
  });
});

describe('cellClues', () => {
  it('calculates the clues correctly', () => {
    expect(puzzle.cellClues([1, 0, 0, 0, 1])).toEqual([1, 1]);
  });

  it('returns 0 when all cells are 0', () => {
    expect(puzzle.cellClues([0, 0, 0, 0, 0])).toEqual([0]);
  });
});

test('toString', () => {
  const state = [
    [0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1],
  ];
  const expectedString = [
    '  o o   o',
    'o   o   o',
    'o   o   o',
    '  o o   o',
    'o o o o o',
  ].join('\n')
  expect(Puzzle.toString(state)).toEqual(expectedString);
});
