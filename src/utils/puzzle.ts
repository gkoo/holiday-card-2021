class Puzzle {
  height: number;
  width: number;
  solution: int[][];

  constructor(width, height, solution) {
    this.height = height;
    this.width = width;
    this.solution = solution;
  }
}

export default Puzzle;
