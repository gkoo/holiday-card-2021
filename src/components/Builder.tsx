import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Puzzle from '../utils/puzzle';
import PuzzleView from './PuzzleView';

const Builder = () => {
  const [width, setWidth] = useState<number>(5);
  const [height, setHeight] = useState<number>(5);
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);

  const handleChangeHeight = (e: any) => {
    setHeight(e.target.value);
  };

  const handleChangeWidth = (e: any) => {
    setWidth(e.target.value);
  };

  const generatePuzzle = () => {
    const solution = [];
    const rowTemplate = [];
    for (let j = 0; j < width; ++j) {
      rowTemplate.push(0);
    }
    for (let i = 0; i < height; ++i) {
      solution.push(rowTemplate);
    }
    const newPuzzle = new Puzzle(width, height, solution, { test: true });
    setPuzzle(newPuzzle);
  };

  const exportPuzzle = () => {
    if (!puzzle) { return; }
    console.log(JSON.stringify(puzzle.solution));
  };

  return (
    <Container>
      <h1>Puzzle Builder</h1>
      <Box sx={{ minWidth: 120 }}>
        {/* Width */}
        <FormControl>
          <InputLabel id="width-label">Width</InputLabel>
          <Select
            labelId="width-label"
            id="change-width"
            value={width}
            label="Width"
            onChange={handleChangeWidth}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>

        {/* Height */}
        <FormControl>
          <InputLabel id="height-label">Height</InputLabel>
          <Select
            labelId="height-label"
            id="change-height"
            value={height}
            label="Height"
            onChange={handleChangeHeight}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>

        <br />
        <br />
        <Button variant="contained" onClick={generatePuzzle}>Generate</Button>
        {puzzle && <Button variant="contained" onClick={exportPuzzle}>Export</Button>}
      </Box>

      {puzzle && <PuzzleView puzzle={puzzle}/>}
    </Container>
  );
};

export default Builder;
