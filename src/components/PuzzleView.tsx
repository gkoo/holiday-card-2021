import * as React from 'react';

import cx from 'classnames';
import Box from '@mui/material/Box';

import Puzzle from '../utils/puzzle';

import './PuzzleView.css';

const PuzzleView = () => {
  const puzzle = new Puzzle(5, 5, [
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
  ]);

  return (
    <>
      {
        puzzle.solution.map(row => (
          <Box style={{ padding: 0, margin: 0 }}>
            {
              row.map(cell =>
                <Box className={cx({ 'picross-cell': true, checked: cell === 1 })}/>
              )
            }
          </Box>
        ))
      }
    </>
  );
};

export default PuzzleView;
