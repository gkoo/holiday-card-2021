class Puzzle {
  height: number;
  width: number;
  solution: number[][];
  state: number[][];
  rowClues: number[][];
  columnClues: number[][];

  constructor(width: number, height: number, solution: number[][]) {
    this.height = height;
    this.width = width;
    this.solution = solution;
    this.state = [];
    this.initializeState();
    this.rowClues = this.generateRowClues();
    this.columnClues = this.generateColumnClues();
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

  static toString(state: number[][]) {
    return state.map(row =>
      row.map(cell => cell ? 'o' : ' ').join(' ')
    ).join('\n');
  }
}

export default Puzzle;
