import * as React from 'react';

import cx from 'classnames';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
    <Box sx={{ width: 500 }}>
      <Table className='puzzle-table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 0 }}>
              {/* empty for row clue */}
            </TableCell>
            {puzzle.columnClues.map(clues =>
              <TableCell sx={{ border: 0 }}>
                <span>
                  {clues.map(clue => <>{clue}<br/></>)}
                </span>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            puzzle.state.map((row, rowIdx) => (
              <TableRow key={rowIdx}>
                <TableCell
                  className='clue-labels row-clues'
                  sx={{
                    border: 0,
                    height: 25,
                    minWidth: 100,
                  }}
                  align='right'
                >
                  {puzzle.rowClues[rowIdx].map(clue => <span className='clue'>{clue}</span>)}
                </TableCell>
                {
                  row.map((cell, colIdx) =>
                    <TableCell
                      key={colIdx}
                      sx={{
                        border: 1,
                        width: 25,
                        height: 25,
                      }}
                      className={cx({ 'picross-cell': true, checked: cell === 1 })}
                    />
                  )
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Box>
  );
};

export default PuzzleView;
