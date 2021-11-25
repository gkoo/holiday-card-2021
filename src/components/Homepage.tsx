import React from 'react';

import Container from '@mui/material/Container';

import Puzzle from '../utils/puzzle';
import PuzzleView from './PuzzleView';

const Homepage = () => {
  const puzzle = new Puzzle(5, 5, [
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
  ]);

  return (
    <Container>
      <h1>Hello, world!</h1>
      <PuzzleView puzzle={puzzle}/>
    </Container>
  );
};

export default Homepage;
