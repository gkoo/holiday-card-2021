import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import Layout from './Layout';
import Puzzle from '../utils/puzzle';
import PuzzleView from './PuzzleView';

const Tester = () => {
  const [puzzleInput, setPuzzleInput] = useState('');
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);

  const generatePuzzle = () => {
    const solution = JSON.parse(puzzleInput);
    const height = solution.length;
    const width = solution[0].length;
    const newPuzzle = new Puzzle(width, height, solution);
    setPuzzle(newPuzzle);
  };

  const handlePuzzleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPuzzleInput(e.target.value);
  };

  return (
    <Layout>
      <Container>
        <h1>Hello, world!</h1>
        <h2>Build from input</h2>
        <TextField id="puzzle-input" label="Input Solution" variant="outlined" onChange={handlePuzzleInput} value={puzzleInput}/>
        <Button variant="contained" onClick={generatePuzzle}>Generate</Button>
        {puzzle && <PuzzleView puzzle={puzzle}/>}
      </Container>
    </Layout>
  );
};

export default Tester;
