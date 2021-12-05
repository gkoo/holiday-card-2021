export enum CellState {
  Empty,
  Filled,
  Xed,
  Marked,
}

interface PuzzleOptions {
  test: boolean;
}

class Puzzle {
  height: number;
  width: number;
  options: PuzzleOptions;
  solution: number[][];
  state: number[][];
  rowClues: number[][] = [];
  columnClues: number[][] = [];

  constructor(width: number, height: number, solution: number[][], options: PuzzleOptions = { test: false }) {
    this.height = height;
    this.width = width;
    this.solution = solution;
    this.state = [];
    this.options = options;
    this.initializeState();
    this.generateClues();
  }

  initializeState() {
    for (let i=0; i < this.height; ++i) {
      const row = [];
      for (let j=0; j < this.width; ++j) {
        row.push(0);
      }
      this.state.push(row);
    }
  }

  generateClues() {
    this.rowClues = this.generateRowClues();
    this.columnClues = this.generateColumnClues();
  }

  generateRowClues() {
    return this.solution.map(this.cellClues);
  }

  generateColumnClues() {
    const clues = [];
    for (let columnNum = 0; columnNum < this.width; ++columnNum) {
      clues.push(this.cellClues(this.solution.map(row => row[columnNum])));
    }
    return clues;
  }

  cellClues(cells: number[]) {
    let count = 0;
    const clues = [];
    for (let i=0; i < cells.length; ++i) {
      if (cells[i] !== 0) {
        ++count;
      } else if (count > 0) {
        clues.push(count);
        count = 0;
      }
    }
    if (count > 0) {
      clues.push(count);
    }
    if (clues.length === 0) {
      clues.push(0);
    }
    return clues;
  }

  toggleCellState(rowIdx: number, colIdx: number, state: CellState) {
    let stateToSet;

    if (this.state[rowIdx][colIdx] === state) {
      stateToSet = CellState.Empty;
    } else {
      stateToSet = state;
    }

    this.state[rowIdx][colIdx] = stateToSet;

    if (this.options.test) {
      this.solution = this.state;
      this.generateClues();
    }
  }

  fillInSolution() {
    this.state.forEach((row, rowIdx) => {
      row.forEach((col, colIdx) => {
        this.state[rowIdx][colIdx] = this.solution[rowIdx][colIdx] || CellState.Xed;
      })
    });
  }

  isSolved() {
    for (let i = 0; i < this.height; ++i) {
      for (let j = 0; j < this.width; ++j) {
        const stateCell = this.state[i][j];
        const solutionCell = this.solution[i][j];
        if ((stateCell === CellState.Filled && solutionCell !== CellState.Filled) || (solutionCell === CellState.Filled && stateCell !== CellState.Filled)) {
          return false;
        }
      }
    }

    // The puzzle is solved!
    if (!this.options.test) {
      this.fillInSolution();
    }
    return true;
  }

  static toString(state: number[][]) {
    return state.map(row =>
      row.map(cell => cell ? 'o' : 'x').join(' ')
    ).join('\n');
  }
}

export default Puzzle;
